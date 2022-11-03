const jwt = require('jsonwebtoken');
const config = require('../../config/config.json');
const login = async (req, res, next) => {
  const token = req.header('token');
  console.log(token);
  if (!token) return res.status(401).send('Access denied.No token provated...');
  try {
    const decoded = jwt.verify(token, config.SecretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token...');
  }
};
module.exports = {
  login
};
