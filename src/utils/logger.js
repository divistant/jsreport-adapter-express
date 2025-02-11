import { pick } from 'lodash-es'
import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import { inspect } from 'util'

const colorizer = format.colorize()

const logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss Z',
    }),
    format.errors({ stack: true }),
  ),
  transports: [
    new DailyRotateFile({
      filename: 'logs/daily-log-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      format: format.json(),
    }),
    new transports.Console({
      format: format.combine(
        format.printf(info => {
          const colorize = str => colorizer.colorize(info.level, str)
          const level = colorize(info.level.toUpperCase())
          // const timestamp = colorize(info.timestamp)
          const timestamp = info.timestamp
          let message = info.message
          if (typeof message === 'object') {
            message = inspect(message)
          }

          let format = `[${timestamp}] [${level}] - ${message}`

          if (info.request || info.response) {
            // An axios error
            format += `\n${colorize('Error data')}: ${inspect(pick(info, ['code', 'config', 'request', 'response']), undefined, 2)}`
          } else if (info.stack) {
            // Error information
            format += `\n${info.stack}`
          }
          return format
        }),
      ),
    }),
  ],
})

export default logger
