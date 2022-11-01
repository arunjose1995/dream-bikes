const Joi = require('joi');
const uservalidation = async (req, res, next) => {
  try {
    const schema = Joi.object({
      UserName: Joi.string().min(3).max(15),
      Email: Joi.string().email().required(),
      Password: Joi.string().min(3).max(15).required(),
      role: Joi.string()
    });
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.send(error);
    console.log('wrong');
  }
};

module.exports = {
  uservalidation
};
