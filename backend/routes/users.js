const express = require('express');
const router = express.Router();
const db = require('../queries');
const jwtVerify = require('../middlewares/jwt-verify');
const httpStatus = require('http-status');

router.get('/', jwtVerify, async (req, res, next) => {
  try {
    const swipeSender = parseInt(req.headers.token);
    const swipes = await db.findSwipesBySender(swipeSender);
    const excludedIds = [...swipes.map(swipe => swipe.swipe_receiver), swipeSender];
    const users = await db.findUsersNotIn(excludedIds);
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.BAD_REQUEST).json({errors: err.toString()});
  }
});

router.get('/:id', jwtVerify, async (req, res, next) => {
  try {
    const users = await db.findUserById(req.params.id);
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.BAD_REQUEST).json({errors: err.toString()});
  }
});

module.exports = router;
