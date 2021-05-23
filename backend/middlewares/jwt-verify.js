const httpStatus = require('http-status');

// simplified jwt verify middleware
const jwtVerify = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(httpStatus.UNAUTHORIZED).json({message: 'Token is required'});
  }
  next();
}

module.exports = jwtVerify;
