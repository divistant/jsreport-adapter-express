import productService from '../adapters/services/productService.js'
import { generateReportWithTemplate } from '../adapters/services/jsreportService.js'
const generateProductReport = async category => {
  // try {
  const products = await productService.fetchProductData(category)
  const reportData = { products: products }
  const report = await generateReportWithTemplate('products-main', reportData)
  return report
  // } catch (error) {
  //   throw new Error(`Failed to generate report: ${error.message}`)
  // }
}
export default generateProductReport
