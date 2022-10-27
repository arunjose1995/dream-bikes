const user_data = require('./model');
const config = require('../../config/config.json');
const bcrypt = require('bcrypt');
const logger = require('../../logger');

const jwt = require('jsonwebtoken');

const Signup_user_Data = async (req, res) => {
  try {
    let data = await user_data.findOne({ Email: req.body.Email });
    if (data) return res.status(400).send('user data Already registered...');
    data = new user_data(({ Name, Email, Password } = req.body));
    const salt = await bcrypt.genSalt(10);
    data.Password = await bcrypt.hash(data.Password, salt);
    const Post_data = await data.save();
    console.log(Post_data);
    const token = jwt.sign({ _id: data._id }, config.SecretKey);
    req.header;
    console.log(req.header);
    console.log(token);
    res.send(Post_data);
    logger.info('Successfully Registered');
  } catch (err) {
    console.log('wrong', err);
    logger.error(err);
  }
};
const login_user_Data = async (req, res) => {
  try {
    let data = await user_data.findOne({ Email: req.body.Email });
    if (!data) return res.status(400).send('Invalid  email ');
    let validpassword = await bcrypt.compare(req.body.Password, data.Password);
    if (!validpassword) return res.status(400).send('Invalid  password');
    const token = jwt.sign({ _id: data._id }, config.SecretKey);
    res.send({ token: token, data: data });
    logger.info('Successfully login');
  } catch (err) {
    logger.error(err);
  }
};
const user_Data = async (req, res) => {
  const get_data = await user_data.find();
  res.send(get_data);
};

module.exports = {
  Signup_user_Data,
  login_user_Data,
  user_Data
};
