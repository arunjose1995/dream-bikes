const mongoose = require('mongoose');

const Dream_Bikes = new mongoose.Schema({
  Name: {
    type: String
  },
  Date_of_Birth: {
    type: String
  },
  Phone_Number: {
    type: String
  },
  Mail_id: {
    type: String
  },
  Aadhar_Number: {
    type: String
  },
  Address: {
    type: String
  },
  Street_Address: {
    type: String
  },
  City: {
    type: String
  },
  District: {
    type: String
  },
  State: {
    type: String
  },
  Bookig_Date: {
    type: String
  }
});
module.exports = mongoose.model('User_datas', Dream_Bikes);
