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
router.post('/login', middelware.uservalidation, controller.login_user);
router.post(
  '/adminregistration',
  middelware.uservalidation,
  controller.admin_Registrion
);
router.post(
  '/admin',
  auth.admin,
  middelware.uservalidation,
  controller.login_admin
);
router.get('/userdata', controller.user_Data);
router.put('/forgotpassword', controller.forget_password);
module.exports = router;
