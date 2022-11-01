const user_data = require('../model/usermodel');
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
    res.send({ Post_data });
    logger.info('Successfully Form upload');
  } catch (err) {
    console.log('Somthing went wrong', err);
    logger.error(err);
  }
};

module.exports = {
  user_form
};
