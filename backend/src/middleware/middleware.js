const Joi = require('joi');
const uservalidation = async (req, res, next) => {
  try {
    const schema = Joi.object({
      UserName: Joi.string().min(3).max(15),
      Email: Joi.string().email().required(),
      Password: Joi.string().required(),
      role: Joi.string()
    });
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(401).send({ message: error });
  }
};

module.exports = {
  uservalidation
};
