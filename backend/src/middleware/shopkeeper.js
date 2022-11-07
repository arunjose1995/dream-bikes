const Joi = require('joi');
const shopkeeper_validrespose = async (req, res, next) => {
  try {
    const schema = Joi.object({
      Orderstatus: Joi.string().required(),
      DeliveryDate: Joi.date().required()
    });
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = {
  shopkeeper_validrespose
};
