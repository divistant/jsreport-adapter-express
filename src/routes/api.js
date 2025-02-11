import express from 'express'
import { productReportController } from '../adapters/controllers/productReportController.js'
import { orderReportController } from '../adapters/controllers/orderReportController.js'
import { customerReportController } from '../adapters/controllers/customerReportController.js'
import { renderRequest } from '../adapters/controllers/jsreportGenericController.js'

const router = express.Router()

router.post('/product-report', productReportController)
router.post('/order-report', orderReportController)
router.post('/customer-report', customerReportController)

router.post('/render/:template', renderRequest)
router.post('/render', renderRequest)

export default router
