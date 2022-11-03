const middelware = require('../middleware/shopkeeper');
const controller = require('../controller/shopkeepercontroller');
const express = require('express');
const router = express.Router();
router.get('/shopkeeper/get/:id', controller.order_verify);
router.post(
  '/shopkeper/sendresponse',
  middelware.shopkeeper_validrespose,
  controller.order_response
);
module.exports = router;
