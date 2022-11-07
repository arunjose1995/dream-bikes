const user_data = require('../model/authmodel');
const config = require('../../config/config.json');
const bcrypt = require('bcrypt');
const logger = require('../../logger');

const jwt = require('jsonwebtoken');
const { connections } = require('mongoose');

const Registration = async (req, res) => {
  try {
    let uName = await user_data.findOne({ UserName: req.body.UserName });
    if (uName) return res.status(400).send('user Name Already registered....');
    let data = await user_data.findOne({ Email: req.body.Email });
    if (data) return res.status(400).send('user Email Already registered...');
    data = new user_data(({ Name, Email, Password } = req.body));
    data.Password = await bcrypt.hash(data.Password, 10);
    const Post_data = await data.save();
    // const token = jwt.sign(
    //   {
    //     _id: data._id,
    //     UserName: data.UserName,
    //     Email: data.Email,
    //     Password: data.Password
    //   },
    //   config.SecretKey,
    //   {
    //     expiresIn: 86400
    //   }
    // );
    // req.header = token;
    // res.status(200).send({ Post_data, token: token });
    res.status(200).send({ message: 'succesfully Registred', data: Post_data });
    logger.info('Successfully Registered');
  } catch (err) {
    res.status(404).send({ message: err });
    logger.error(err);
  }
};
const login_user = async (req, res) => {
  try {
    const data = await user_data.findOne({ Email: req.body.Email });
    if (!data) return res.status(400).send('Invalid  email ');
    const validpassword = await bcrypt.compare(req.body.Password,
      data.Password);
    if (!validpassword) return res.status(400).send('Invalid  password');
    const token = jwt.sign(
      {
        _id: data._id,
        UserName: data.UserName,
        Email: data.Email,
        Password: data.Password
      },
      config.SecretKey,
      {
        expiresIn: 86400
      }
    );
    res.status(200).send({ token: token, data: data });

    logger.info('Successfully login');
  } catch (err) {
    logger.error(err);
    res.status(404).send({ message: err });
  }
};
const user_Data = async (req, res) => {
  const get_data = await user_data.find();
  res.status(200).send(get_data);
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
      res.status(200).send(forgot);
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
    const data = await user_data.findOne({ Email: req.body.Email });
    if (!data) return res.status(400).send('Invalid  email ');
    const validpassword = await bcrypt.compare(
      req.body.Password,
      data.Password
    );
    if (!validpassword) return res.status(404).send('Invalid  password');
    
    if (data.role === 'admin') {
      logger.info('admin logined Successfully ');
      return res.status(200).send({ data: data });
    } else {
      return res.status(400).send('UnAutharaized');
    }
  } catch (err) {
    res.status(404).send({ message: err });
    logger.error(err);
  }
};
const login_shopkeeper = async (req, res) => {
  try {
    const data = await user_data.findOne({ Email: req.body.Email });
    if (!data) return res.status(400).send('Invalid  email ');
    const validpassword = await bcrypt.compare(
      req.body.Password,
      data.Password
    );
    if (!validpassword) return res.status(400).send('Invalid  password');
    console.log(data.Email, data.Password, data.role);

    if (data.role === 'shopkeeper') {
      logger.info('shopkeper logined Successfully ');
      return res.status(200).send({ data: data });
    } else {
      return res.status(400).send('UnAutharaized');
    }
  } catch (err) {
    res.status(400).send({ message: err });
    logger.error(err);
  }
};

module.exports = {
  Registration,
  login_user,
  login_admin,
  login_shopkeeper,
  user_Data,
  forget_password
};
