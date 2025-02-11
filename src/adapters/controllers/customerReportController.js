import generateCustomerReport from '../../usecase/customerReport.js'
const customerReportController = async (req, res) => {
  try {
    const report = await generateCustomerReport()
    // Mengirimkan file PDF sebagai respons
    res.setHeader('Content-Type', 'application/pdf')
    res.send(report)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export { customerReportController }
export default {
  customerReportController,
}
