const mongoose = require('mongoose');

const Dream_Bikes = new mongoose.Schema({
  UserName: {
    type: String
  },
  Email: {
    type: String
  },
  Password: {
    type: String
  }
});
module.exports = mongoose.model('User_Registration_datas', Dream_Bikes);
