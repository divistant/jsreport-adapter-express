import generateOrderReport from '../../usecase/orderReport.js'
const orderReportController = async (req, res) => {
  try {
    const report = await generateOrderReport()
    res.setHeader('Content-Type', 'application/pdf')
    res.send(report)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export { orderReportController }
export default {
  orderReportController,
}
