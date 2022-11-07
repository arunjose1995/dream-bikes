const user_data = require('../model/usermodel');
const admin_data = require('../model/adminmodel');
const loginuser = require('../model/authmodel');
const Cart = require('../model/addtocart');
const shopkeeper = require('../model/shopkeepermodel');
const logger = require('../../logger');

const user_form = async (req, res) => {
  const { userId, productId } = req.body;
  const {
    Name,
    Date_of_Birth,
    Phone_Number,
    Mail_id,
    Aadhar_Number,
    Gender,
    Address,
    Bikemodel,
    District,
    State,
    Bookig_Date
  } = req.body;
  try {
    let cart = await user_data.findOne({ userId });
    if (cart) {
      let itemIndex = cart.Booking.findIndex((p) => p.productId == productId);
      if (itemIndex > -1) {
        let productItem = cart.Booking[itemIndex];
        cart.Booking[itemIndex] = productItem;
      } else {
        cart.Booking.push({
          productId,
          Name,
          Date_of_Birth,
          Phone_Number,
          Mail_id,
          Aadhar_Number,
          Gender,
          Address,
          Bikemodel,
          District,
          State,
          Bookig_Date
        });
      }
      cart = await cart.save();
      logger.info('Successfully Form upload');
      return res.status(201).send(cart);
    } else {
      const data = await user_data.create({
        userId,
        productId,
        Booking: [
          {
            productId,
            Name,
            Date_of_Birth,
            Phone_Number,
            Mail_id,
            Aadhar_Number,
            Gender,
            Address,
            Bikemodel,
            District,
            State,
            Bookig_Date
          }
        ]
      });
      const Post_data = await data.save();
      res.status(200).send({ Post_data });
      logger.info('Successfully Form upload');
    }
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
const admin_postsingle_data = async (req, res) => {
  const postedsingle_data = await Cart.findOne({ userId: req.params.id });
  res.status(201).send(postedsingle_data);
};
const addtocart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      const productDetails = await admin_data.findById(productId);
      let itemIndex = cart.products.findIndex((p) => p._id == productId);
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
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};
const get_card_data = async (req, res) => {
  const posted_data = await Cart.findOne({ userId: req.params.id });
  res.status(201).send(posted_data);
};
const Remove_card_data = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      let itemIndex = cart.products.findIndex((p) => p._id == productId);
      console.log(itemIndex);
      if (itemIndex > -1) {
        cart.products.splice(itemIndex, 1);
        cart = await cart.save();
        return res.status(200).send({ status: true, updatedCart: cart });
      }
      res.status(400).send({ message: 'Item does not exist in cart' });
    } else {
      res.status(400).send({ status: false, message: 'no  cart' });
    }
  } catch (err) {
    res.status(400).send({ status: false, message: ' cart' });
  }
};
const Myorders = async (req, res) => {
  const posted_data = await shopkeeper.find({ userId: req.params.id });
  res.status(200).send(posted_data);
};
module.exports = {
  user_form,
  user_form_data,
  admin_post_data,
  admin_postsingle_data,
  addtocart,
  get_card_data,
  Remove_card_data,
  Myorders
};

