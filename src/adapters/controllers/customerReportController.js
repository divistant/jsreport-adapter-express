import generateCustomerReport from '../../usecase/customerReport.js'
import logger from '../../utils/logger.js'

export const customerReportController = async (req, res) => {
  try {
    const report = await generateCustomerReport()
    // Mengirimkan file PDF sebagai respons
    res.setHeader('Content-Type', 'application/pdf')
    res.send(report)
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: error.message })
  }
}
