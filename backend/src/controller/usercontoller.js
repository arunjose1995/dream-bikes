const user_data = require('../model/usermodel');
const admin_data = require('../model/adminmodel');
const loginuser = require('../model/authmodel');
const Cart = require('../model/addtocart');
const logger = require('../../logger');

const user_form = async (req, res) => {
  try {
    const data = new user_data(
      ({
        Name,
        Date_of_Birth,
        Phone_Number,
        Mail_id,
        Aadhar_Number,
        Address,
        Street_Address,
        City,
        District,
        State,
        Bookig_Date
      } = req.body)
    );
    const Post_data = await data.save();
    res.status(200).send({ Post_data });
    logger.info('Successfully Form upload');
  } catch (err) {
    res.status(500).send({ message: err });
    logger.error(err);
  }
};
const user_form_data = async (req, res) => {
  const get_data = await user_data.find();
  res.status(200).send(get_data);
};
const admin_post_data = async (req, res) => {
  const posted_data = await admin_data.find();
  res.status(200).send(posted_data);
};
const addtocart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      const productDetails = await admin_data.findById(productId);
      console.log(productDetails);
      // if (!productDetails) {
      let itemIndex = cart.products.findIndex((p) => p._id == productId);
      console.log(itemIndex);
      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        cart.products[itemIndex] = productItem;
      } else {
        cart.products.push(productDetails);
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      const productDetails = await admin_data.findById(productId);
      const newCart = await Cart.create({
        userId,
        products: [productDetails]
      });
      return res.status(201).send(newCart);
    }
    // } else {
    //   const productDetails = await admin_data.findById(productId);
    //   const newCart = await Cart.create({
    //     userId,
    //     products: [productDetails]
    //   });
    //   return res.status(201).send(newCart);
    // }
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};
const get_card_data = async (req, res) => {
  const posted_data = await Cart.find();
  res.status(201).send(posted_data);
};
module.exports = {
  user_form,
  user_form_data,
  admin_post_data,
  addtocart,
  get_card_data
};
