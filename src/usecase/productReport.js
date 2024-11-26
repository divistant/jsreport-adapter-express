const productService = require('../adapters/services/productService');
const { generateReportWithTemplate } = require('../adapters/services/jsreportService'); 

const generateProductReport = async (category) => {
  try {
    const products = await productService.fetchProductData(category);
    
    const reportData = {products: products};

    const report = await generateReportWithTemplate("products-main", reportData);

    return report;
  } catch (error) {
    throw new Error(`Failed to generate report: ${error.message}`);
  }
};

module.exports = generateProductReport;
