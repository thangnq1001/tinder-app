const express = require('express');
const router = express.Router();
const db = require('../queries');
const jwtVerify = require('../middlewares/jwt-verify');
const httpStatus = require('http-status');

// save a swipe
router.post('/', jwtVerify, async (req, res) => {
  const { swipeReceiver, isLike } = req.body;
  const swipeSender = parseInt(req.headers.token);
  try {
    const result = await db.saveSwipe(swipeSender, swipeReceiver, isLike);
    res.json({message: 'Success'});
  } catch (err) {
    console.error(err);
    res.status(httpStatus.BAD_REQUEST).json({errors: err.toString()});
  }
});

// undo/reset a swipe
router.delete('/', jwtVerify, async (req, res) => {
  const { swipeReceiver } = req.body;
  const swipeSender = parseInt(req.headers.token);
  try {
    const result = await db.undoSwipe(swipeSender, swipeReceiver);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.BAD_REQUEST).json({errors: err.toString()});
  }
})

// get list of swiped users, can be filtered by is_like
router.get('/', jwtVerify, async (req, res) => {
  const swipeSender = parseInt(req.headers.token);
  try {
    const swipes = await db.findSwipesBySender(swipeSender, req.query.isLike);
    const users = await db.findUsers(swipes.map(swipe => swipe.swipe_receiver));
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.BAD_REQUEST).json({errors: err.toString()});
  }
});

module.exports = router;
