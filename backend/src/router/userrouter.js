const middelware = require('../middleware/userform');
const controller = require('../controller/usercontoller');
const express = require('express');
const router = express.Router();
router.post(
  '/user/BookingForm',
  middelware.form_validation,
  controller.user_form
);
router.get('/user/get/form', controller.user_form_data);
router.get('/user/get/postdata', controller.admin_post_data);
router.get('/user/get/postdata/:id', controller.admin_postsingle_data);
router.post('/user/addtocart', controller.addtocart);
router.get('/user/addcart/data/:id', controller.get_card_data);
router.delete('/user/addcart/remove', controller.Remove_card_data);
router.get('/user/get/myorders/:id', controller.Myorders);
module.exports = router;
