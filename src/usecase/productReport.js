import productService from '../adapters/services/productService.js'
import { render } from '../adapters/services/jsreportService.js'
const generateProductReport = async category => {
  const products = await productService.fetchProductData(category)
  const reportData = { products: products }
  const report = await render('products-main', reportData)
  return report
}
export default generateProductReport
