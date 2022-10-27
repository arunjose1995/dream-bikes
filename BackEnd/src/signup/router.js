const middelware = require('../middleware/middleware');
const auth = require('../middleware/auth');
const controller = require('./controller');
const express = require('express');
const router = express.Router();

router.post('/signup', middelware.uservalidation, controller.Signup_user_Data);
router.get(
  '/login',
  auth.login,
  middelware.uservalidation,
  controller.login_user_Data
);
router.get('/userdata', controller.user_Data);
module.exports = router;
