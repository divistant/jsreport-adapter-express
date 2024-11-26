const generateOrderReport = require('../../usecase/orderReport');

const orderReportController = async (req, res) => {

  try {
    const report = await generateOrderReport();
    
    res.setHeader('Content-Type', 'application/pdf');
    res.send(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { orderReportController };
