const user_data = require('../model/usermodel');
const admin_data = require('../model/adminmodel');
const shopkeeper = require('../model/shopkeepermodel');

const order_verify = async (req, res) => {
  const { userId, productId } = req.body;
  let cart = await user_data.findOne({ userId });
  console.log(cart);
  if (cart) {
    let itemIndex = cart.Booking.findIndex((p) => p.productId == productId);
    const Bookingdetails = cart.Booking[itemIndex];
    res.status(201).send({ Bookingdetails });
  } else {
    res.status(404).send('not found');
  }
};
const order_response = async (req, res) => {
  const userId = '6363507be19306aa50f76fde';
  const ProductId = '63637f9b8e54865cfb95ca7b';
  const BookingId = '6363e6cc24ab2bf66d12d4bf';
  const { Orderstatus, DeliveryDate } = req.body;

  const data = new shopkeeper({
    userId,
    ProductId,
    BookingId,
    Orders: {
      Orderstatus,
      DeliveryDate
    }
  });
  const Post_data = await data.save();
  res.status(200).send({ Post_data });
};
module.exports = {
  order_verify,
  order_response
};

