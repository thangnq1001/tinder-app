const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const users = require('./routes/users');
const swipes = require('./routes/swipes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  return res.json({status: 'Server is running!'});
});

app.use('/api/v1/users', users);
app.use('/api/v1/swipes', swipes);

module.exports = app;
