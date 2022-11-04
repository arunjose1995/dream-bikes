const { string } = require('joi');
const mongoose = require('mongoose');
const Dream_Bikes = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'authmodel'
    },
    prodectId: {
      type: String
    },
    products: [],
    active: {
      type: Boolean,
      default: true
    },
    modifiedOn: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', Dream_Bikes);