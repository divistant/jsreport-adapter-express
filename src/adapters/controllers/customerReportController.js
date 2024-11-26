const generateCustomerReport = require('../../usecase/customerReport');

const customerReportController = async (req, res) => {
  try {
    const report = await generateCustomerReport();

    // Mengirimkan file PDF sebagai respons
    res.setHeader('Content-Type', 'application/pdf');
    res.send(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { customerReportController };
