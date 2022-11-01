const middelware = require('../middleware/userform');
const controller = require('../controller/usercontoller');
const express = require('express');
const router = express.Router();
router.post(
  '/user/form/registration',
  middelware.form_validation,
  controller.user_form
);
module.exports = router;
