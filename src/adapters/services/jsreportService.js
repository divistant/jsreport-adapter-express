const jsreportClient = require('@jsreport/nodejs-client');
const config = require('../../config/config');

const client = jsreportClient(config.jsreport.url, config.jsreport.username, config.jsreport.password);

const generateReportWithTemplate = async (templateName, reportData) => {
  try {
    const response = await client.render({
      template: {
        name: templateName,
      },
      data: reportData,
      options: {
        reports: {
          save: true,
        },
      }
    });

    console.log("PDF generated successfully with password.");

    return response.body();
  } catch (error) {
    throw new Error(`Failed to generate report with template: ${error.message}`);
  }
};

const generateReportWithoutTemplate = async (customTemplate, reportData) => {
  try {
    const response = await client.render({
      template: customTemplate,
      data: reportData,
      options: {
        reports: {
          save: true,
        },
      }
    });

    return response.body();
  } catch (error) {
    throw new Error(`Failed to generate report without template: ${error.message}`);
  }
};

module.exports = { generateReportWithTemplate, generateReportWithoutTemplate };
