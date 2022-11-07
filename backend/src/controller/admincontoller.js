const user_data = require('../model/adminmodel');
const logger = require('../../logger');
const admin_add = async (req, res) => {
  try {
    const data = new user_data(
      ({
        Bike_image,
        Model_Name,
        Model_Price,
        Engine,
        Power,
        Torque,
        Color,
        Tyre_type,
        Bracks,
        Milleage,
        Fuel_Capacity,
        Gear_Box,
        Body_Type
      } = req.body)
    );
    const Post_data = await data.save();
    res.status(201).send({ Post_data });
    logger.info('Successfully Form upload');
  } catch (err) {
    res.status(401).send({ message: err });
    logger.error(err);
  }
};
const admin_getdata = async (req, res) => {
  const get_data = await user_data.find();
  res.status(201).send({ get_data });
};
const admin_updateData = async (req, res) => {
  const put_data = await user_data.updateOne(
    { _id: req.params.id },
    {
      $set: ({
        Bike_image,
        Model_Name,
        Model_Price,
        Key_specification,
        Engine,
        Power,
        Torque,
        Color,
        Tyre_type,
        Bracks,
        Milleage,
        Fuel_Capacity,
        Gear_Box,
        Body_Type
      } = req.body)
    }
  );
  res.status(201).send(put_data);
};
const admin_remove_Data = async (req, res) => {
  const delete_Data = await user_data.findByIdAndDelete(req.params.id);
  res.status(200).send({ delete_Data });
};

module.exports = {
  admin_add,
  admin_getdata,
  admin_updateData,
  admin_remove_Data
};
