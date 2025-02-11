import customerService from '../adapters/services/customerService.js'
import { render } from '../adapters/services/jsreportService.js'
const generateCustomerReport = async () => {
  const customer = await customerService.getCustomersWithFullNameAndEmail()
  const customTemplate = {
    content: `
            <html>
            <head>
                <title>Customer Report</title>
                <style>
                body { font-family: Arial, sans-serif; }
                h1 { color: #333; }
                table { width: 100%; border-collapse: collapse; }
                th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
                th { background-color: #4CAF50; color: white; }
                </style>
            </head>
            <body>
                <h1>Customer Report</h1>
                <table>
                <thead>
                    <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {{#each customer}}
                    <tr>
                        <td>{{fullName}}</td>
                        <td>{{email}}</td>
                    </tr>
                    {{/each}}
                </tbody>
                </table>
            </body>
            </html>
        `,
    recipe: 'chrome-pdf',
    engine: 'handlebars',
    // chrome: {
    //     landscape: true,
    // }
  }
  const report = await render(customTemplate, {
    customer,
  })
  return report
}
export default generateCustomerReport
