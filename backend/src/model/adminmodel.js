const mongoose = require('mongoose');

const Dream_Bikes = new mongoose.Schema({
    Bike_image: 
        type: String
,
    Name: {
    type: String
  },
  Email: {
    type: String
  },
});
module.exports = mongoose.model('Admin_DB', Dream_Bikes);