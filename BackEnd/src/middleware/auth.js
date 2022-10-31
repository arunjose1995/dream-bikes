const jwt = require('jsonwebtoken');
const User = require('../model/authmodel');
const config = require('../../config/config.json');

const login = async (req, res, next) => {
  const token = req.header('x-auth-token');
  console.log(token);
  if (!token) return res.status(401).send('Access denied.No token provated...');
  try {
    const decoded = jwt.verify(token);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (ex) {
    res.status(400).send('Invalid token...');
  }
};

const admin = async (req, res, next) => {
  console.log(req.user);
  if (req.user) return res.status(401).send('Access denied...');
  try {
    const decoded = jwt.verify(token, config.SecretKey);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (ex) {
    res.status(400).send('Invalid token...');
  }
};

module.exports = {
  login,
  admin
};
