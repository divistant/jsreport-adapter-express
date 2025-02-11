import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

const colorizer = format.colorize()

const logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss Z',
    }),
    format.errors({ stack: true })
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
          const level = colorizer.colorize(info.level, info.level.toUpperCase())
          let format = `[${info.timestamp}] [${level}] - ${info.message}`
          if (info.stack) {
            // Error information
            format += `\n${info.stack}`
          }
          return format
        })
      ),
    }),
  ],
})

export default logger
