const Joi = require('joi');
const shopkeeper_validrespose = async (req, res, next) => {
  try {
    const schema = Joi.object({
      userId: Joi.string(),
      ProductId: Joi.string(),
      BookingId: Joi.string(),
      Orderstatus: Joi.string(),
      DeliveryDate: Joi.date()
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
