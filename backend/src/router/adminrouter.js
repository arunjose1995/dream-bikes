const middelware = require('../middleware/admin');
const controller = require('../controller/admincontoller');
const express = require('express');
const router = express.Router();
router.post('/admin/add/data', middelware.admin_validate, controller.admin_add);
router.get('/admin/get/data', controller.admin_getdata);
router.put('/admin/edit/:id', controller.admin_updateData);
router.delete('/admin/delete/:id', controller.admin_remove_Data);
module.exports = router;
