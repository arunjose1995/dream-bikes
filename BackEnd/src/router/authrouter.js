const middelware = require('../middleware/middleware');
const auth = require('../middleware/auth');
const controller = require('../controller/authcontroller');
const express = require('express');
const router = express.Router();

router.post(
  '/Registration',
  middelware.uservalidation,
  controller.Registration
);
router.post(
  '/login',
  auth.login,
  middelware.uservalidation,
  controller.login_user_Data
);
router.get('/userdata', controller.user_Data);
router.put('/forgotpassword', controller.forget_password);
module.exports = router;
