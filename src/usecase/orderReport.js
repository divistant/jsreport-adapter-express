import { render } from '../adapters/services/jsreportService.js'
const generateOrderReport = async () => {
  const report = await render('orders-main', '')
  return report
}
export default generateOrderReport
