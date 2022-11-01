const mongoose = require('mongoose');

const Dream_Bikes = new mongoose.Schema({
  Bike_image: String,
  Model_Name: {
    type: String
  },
  Model_Price: {
    type: String
  },
  Key_specification: {
    type: String
  },
  Engine: {
    type: String
  },
  Power: {
    type: String
  },
  Torque: {
    type: String
  },
  Color: {
    type: String
  },
  Tyre_type: {
    type: String
  },
  Bracks: {
    type: String
  },
  Milleage: {
    type: String
  },
  Fuel_Capacity: {
    type: String
  },
  Gear_Box: {
    type: String
  },
  Body_Type: {
    type: String
  }
});
module.exports = mongoose.model('Admin_DB', Dream_Bikes);
