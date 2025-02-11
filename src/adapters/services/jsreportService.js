import jsreportClient from '@jsreport/nodejs-client'
import config from '../../config/config.js'

const client = jsreportClient(
  config.jsreport.url,
  config.jsreport.username,
  config.jsreport.password
)

export const generateReportWithTemplate = async (templateName, reportData) => {
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
      },
    })
    console.log('PDF generated successfully with password.')
    return response.body()
  } catch (error) {
    error.message = `Failed to generate report with template: ${error.message}`
    throw error
  }
}

export const generateReportWithoutTemplate = async (
  customTemplate,
  reportData
) => {
  try {
    const response = await client.render({
      template: customTemplate,
      data: reportData,
      options: {
        reports: {
          save: true,
        },
      },
    })
    return response.body()
  } catch (error) {
    error.message = `Failed to generate report without template: ${error.message}`
    throw error
  }
}
