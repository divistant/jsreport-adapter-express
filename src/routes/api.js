import express from 'express'
import { productReportController } from '../adapters/controllers/productReportController.js'
import { orderReportController } from '../adapters/controllers/orderReportController.js'
import { customerReportController } from '../adapters/controllers/customerReportController.js'

const router = express.Router()

router.post('/product-report', productReportController)
router.post('/order-report', orderReportController)
router.post('/customer-report', customerReportController)

export default router
