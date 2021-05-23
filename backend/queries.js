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

const getUsers = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM public.user', (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows);
    });
  })
};

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM public.user WHERE id = $1', [id], (err, res) => {
      if (err) {
        reject(err);
      }
      if (!res.rows || !res.rows.length) {
        return resolve(null);
        // or reject('not found...') depends on API design of each project
      }
      resolve(res.rows[0]);
    });
  });
};

module.exports = {
  getUsers,
  getUserById,
}
