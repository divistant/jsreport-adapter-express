import generateOrderReport from '../../usecase/orderReport.js'
import logger from '../../utils/logger.js'

export const orderReportController = async (req, res) => {
  try {
    const report = await generateOrderReport()
    res.setHeader('Content-Type', 'application/pdf')
    res.send(report)
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: error.message })
  }
}
