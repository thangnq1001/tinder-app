// for a real-world project, ORM, migration engine,...should be preferred
// for this simple app I use a very simple way to connect to DB
// field names returned to frontend are in underscore format (should be camelCase if we have time)

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tinder_app',
  password: 'postgres',
  port: 5432,

});

/* For user */

const findUsers = (ids) => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM public.user';
    // if find users by only some ids
    if (ids && ids.length) {
      const params = [];
      for (let i = 1; i <= ids.length; i++) {
        params.push('$' + i);
      }
      sql += ` WHERE id IN (${params.join(',')})`;
    }
    pool.query(sql, ids, (err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res.rows);
    });
  });
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM public.user WHERE id = $1', [id], (err, res) => {
      if (err) {
        return reject(err);
      }
      if (!res.rows || !res.rows.length) {
        return resolve(null);
        // or reject('not found...') depends on API design of each project
      }
      resolve(res.rows[0]);
    });
  });
};

/* For swipe */

/**
 * @param swipeSender user id of the sender
 * @param swipeReceiver user id of the receiver
 * @param isLike {boolean}
 */
const saveSwipe = (swipeSender, swipeReceiver, isLike) => {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO public.swipe (swipe_sender, swipe_receiver, is_like) VALUES ($1, $2, $3)', [swipeSender, swipeReceiver, isLike], (err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });
}

/**
 * @param swipeSender user id of the sender
 * @param swipeReceiver user id of the receiver
 */
const undoSwipe = (swipeSender, swipeReceiver) => {
  console.log([swipeSender, swipeReceiver]);
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM public.swipe WHERE swipe_sender = $1 AND swipe_receiver = $2', [swipeSender, swipeReceiver], (err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });
}

/**
 * @param swipeSender user id
 * @param isLike {boolean | undefined}
 */
const findSwipesBySender = (swipeSender, isLike) => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM public.swipe WHERE swipe_sender = $1 ';
    let params = [swipeSender];
    if (typeof isLike === 'boolean') {
      sql += ' AND is_like = $2 ';
      params.push(isLike);
    }
    pool.query(sql, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res.rows);
    });
  })
}

module.exports = {
  findUsers,
  findUserById,
  saveSwipe,
  undoSwipe,
  findSwipesBySender,
}
