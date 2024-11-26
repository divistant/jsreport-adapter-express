const productReport = require('../../usecase/productReport');

const productReportController = async (req, res) => {
  const category = req.query.category;

  try {
    const report = await productReport(category);
    
    res.setHeader('Content-Disposition', 'attachment; filename="report.pdf"');
    res.setHeader('Content-Type', 'application/pdf');
    res.send(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { productReportController };
