const express = require('express');
const { productReportController } = require('../adapters/controllers/productReportController');
const { orderReportController } = require('../adapters/controllers/orderReportController');
const { customerReportController } = require('../adapters/controllers/customerReportController');

const router = express.Router();

router.post('/product-report', productReportController);
router.post('/order-report', orderReportController);
router.post('/customer-report', customerReportController);

module.exports = router;
