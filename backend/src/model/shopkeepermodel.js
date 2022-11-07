const { string } = require('joi');
const mongoose = require('mongoose');
const Dream_Bikes = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'authmodel'
  },
  ProductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'adminmodel'
  },
  BookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usermodel'
  },

  Orders: [
    {
      Orderstatus: {
        type: String
      },
      DeliveryDate: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model('shopkeeper', Dream_Bikes);
