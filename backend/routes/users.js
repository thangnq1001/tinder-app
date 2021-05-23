const express = require('express');
const router = express.Router();
const db = require('../queries');

router.get('/', async (req, res, next) => {
  try {
    const users = await db.getUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.json({errors: err.toString()});
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const users = await db.getUserById(req.params.id);
    res.json(users);
  } catch (err) {
    console.error(err);
    res.json({errors: err.toString()});
  }
});

module.exports = router;
