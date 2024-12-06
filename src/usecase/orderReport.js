const { generateReportWithTemplate } = require('../adapters/services/jsreportService');

const generateOrderReport = async () => {
  try {
    const report = await generateReportWithTemplate("orders-main", "");

    return report;
  } catch (error) {
    throw new Error(`Failed to generate report: ${error.message}`);
  }
};

module.exports = generateOrderReport;
