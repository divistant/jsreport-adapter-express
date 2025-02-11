import { generateReportWithTemplate } from '../adapters/services/jsreportService.js'
const generateOrderReport = async () => {
  try {
    const report = await generateReportWithTemplate('orders-main', '')
    return report
  } catch (error) {
    throw new Error(`Failed to generate report: ${error.message}`)
  }
}
export default generateOrderReport
