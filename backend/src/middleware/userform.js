const Joi = require('joi');
const form_validation = async (req, res, next) => {
  try {
    const schema = Joi.object({
      Name: Joi.string(),
      Date_of_Birth: Joi.date().optional().required(),
      Phone_Number: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
      Mail_id: Joi.string().email().required(),
      Aadhar_Number: Joi.string().required(),
      Address: Joi.string().required(),
      Bikemodel: Joi.string().required(),
      District: Joi.string().required(),
      State: Joi.string().required(),
      Bookig_Date: Joi.date().optional().required()
    });
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports = {
  form_validation
};


