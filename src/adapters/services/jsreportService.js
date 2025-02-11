import jsreportClient from '@jsreport/nodejs-client'
import config from '../../config/config.js'
import defu from 'defu'
import { fileTypeFromBuffer } from 'file-type'
import * as fs from 'fs'
import logger from '../../utils/logger.js'
import { roundTo } from '../../utils/number.js'

const client = jsreportClient(
  config.jsreport.url,
  config.jsreport.username,
  config.jsreport.password,
)

const renderDefaultOptions = {
  options: {
    reports: {
      save: true,
    },
  },
}

const defaultMiscOptions = {
  savePrefix: 'report',
  returnMeta: false,
}

const log = msg => {
  logger.info(`JSReport Service: ${msg}`)
}

export const render = async (
  template,
  data,
  renderOptions = {},
  miscOptions = {},
) => {
  const extraOptions = defu(renderOptions, renderDefaultOptions)
  miscOptions = defu(miscOptions, defaultMiscOptions)

  // Normalize template format
  if (typeof template !== 'object') {
    template = {
      name: template,
    }
  }

  try {
    const tpl = JSON.stringify(template)
    log(`Rendering template: ${tpl} ...`)
    const _renderStart = new Date().getTime()

    const response = await client.render({
      template,
      data,
      options: extraOptions,
    })

    const result = await response.body()

    const _renderEnd = new Date().getTime()
    const _renderDuration = roundTo((_renderEnd - _renderStart) / 1000, 4)
    log(`Rendering template finished in ${_renderDuration}s, template: ${tpl}`)

    // Save local copy
    const fileInfo = await fileTypeFromBuffer(result)
    if (config.jsreport.saveLocal) {
      const filename = `${miscOptions.savePrefix}-${Date.now()}.${fileInfo.ext}`
      log(`Saving local copy of the result: ${filename}`)
      fs.writeFileSync(`./output/${filename}`, result, {
        encoding: 'binary',
      })
    }

    if (!miscOptions.returnMeta) {
      // Return the resulting file
      return result
    } else {
      return {
        result,
        fileInfo,
      }
    }
  } catch (error) {
    if (error.message?.length < 5) {
      error.message = `JSReport Service error: ${error.code}, cause: ${error.cause}`
    }
    throw error
  }
}
