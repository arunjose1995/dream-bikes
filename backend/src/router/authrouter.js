const middelware = require('../middleware/middleware');
const auth = require('../middleware/auth');
const controller = require('../controller/authcontroller');
const express = require('express');
const cors=require('cors')
const router = express.Router();
router.use(cors({ origin: '*' }));
router.post(
  '/Registration',
  middelware.uservalidation,
  controller.Registration
);
router.post(
  '/login',
  middelware.uservalidation,
  controller.login_user
);
router.post('/admin', middelware.uservalidation, controller.login_admin);
router.post(
  '/shopkeeper',
  middelware.uservalidation,
  controller.login_shopkeeper
);
router.get('/userdata', controller.user_Data);
router.put('/forgotpassword', controller.forget_password);
auth.login, (module.exports = router);


