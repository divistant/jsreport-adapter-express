import { genericRender } from '../../usecase/jsreportGeneric.js'
import logger from '../../utils/logger.js'

export const renderRequest = async (req, res) => {
  try {
    // Pick up body, and immediately use jsreport service
    const template = req.body.template || req.params.template

    if (!template) {
      throw new Error('Template cannot be empty')
    }

    const { data, options } = req.body

    const renderResult = await genericRender(template, data, options)

    res.setHeader('Content-Type', renderResult.fileInfo.mime)
    res.send(renderResult.result)
  } catch (err) {
    logger.error(err)
    res.status(500).json({ message: err.message })
  }
}
