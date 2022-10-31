const user_data = require('../model/authmodel');
const config = require('../../config/config.json');
const bcrypt = require('bcrypt');
const logger = require('../../logger');

const jwt = require('jsonwebtoken');

const Registration = async (req, res) => {
  try {
    let uName = await user_data.findOne({ UserName: req.body.UserName });
    if (uName) return res.status(400).send('user Name Already registered....');
    let data = await user_data.findOne({ Email: req.body.Email });
    if (data) return res.status(400).send('user data Already registered...');
    data = new user_data(({ Name, Email, Password } = req.body));
    data.Password = await bcrypt.hash(data.Password, 10);
    const Post_data = await data.save();
    console.log(Post_data);
    const token = jwt.sign({ _id: data._id });
    req.header;
    res.send(Post_data);
    logger.info('Successfully Registered');
  } catch (err) {
    console.log('wrong', err);
    logger.error(err);
  }
};
const login_user = async (req, res) => {
  try {
    let data = await user_data.findOne({ Email: req.body.Email });
    if (!data) return res.status(400).send('Invalid  email ');
    let validpassword = await bcrypt.compare(req.body.Password, data.Password);
    if (!validpassword) return res.status(400).send('Invalid  password');
    const token = jwt.sign({ _id: data._id });
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
const forget_password = async (req, res) => {
  try {
    const data = await user_data.findOne({ Email: req.body.Email });
    if (!data) return res.status(400).send('Invalid  email ');
    const validpassword = await bcrypt.compare(
      req.body.Password,
      data.Password
    );
    if (!validpassword) {
      const hash = await bcrypt.hash(req.body.Password, 10);
      const forgot = await user_data.updateOne(
        { Email: req.body.Email },
        {
          $set: {
            Password: hash
          }
        }
      );
      logger.info('Resest the Password');
      res.send(forgot);
    } else {
      logger.warn('Invalid passord');
      return res.status(400).send('Invalid  password');
    }
  } catch (err) {
    logger.error(err);
    res.status(404).send('Somthing Wrong');
  }
};

const login_admin = async (req, res) => {
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

module.exports = {
  Registration,
  login_user,
  login_admin,
  user_Data,
  forget_password
};
