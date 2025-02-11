import productReport from '../../usecase/productReport.js'
import logger from '../../utils/logger.js'
const productReportController = async (req, res) => {
  const category = req.query.category
  try {
    const report = await productReport(category)
    res.setHeader('Content-Disposition', 'attachment; filename="report.pdf"')
    res.setHeader('Content-Type', 'application/pdf')
    res.send(report)
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: error.message })
  }
}
export { productReportController }
export default {
  productReportController,
}
