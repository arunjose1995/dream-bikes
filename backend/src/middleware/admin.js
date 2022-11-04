const Joi = require('joi');
const admin_validate = async (req, res, next) => {
  try {
    const schema = Joi.object({
      Bike_image: Joi.string(),
      Model_Name: Joi.string(),
      Model_Price: Joi.string(),
      Engine: Joi.string(),
      Power: Joi.string(),
      Torque: Joi.string(),
      Color: Joi.string(),
      Tyre_type: Joi.string(),
      Bracks: Joi.string(),
      Milleage: Joi.string(),
      Fuel_Capacity: Joi.string(),
      Gear_Box: Joi.string(),
      Body_Type: Joi.string()
    });
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(404).send({ message: error });
  }
};

module.exports = {
  admin_validate
};
