import { render } from '../adapters/services/jsreportService.js'

export const genericRender = async (template, data, renderOptions) => {
  return await render(template, data, renderOptions, {
    returnMeta: true,
  })
}
