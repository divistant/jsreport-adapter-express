const { createLogger, format, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const logger = createLogger({
    level: 'silly',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        })
    ),
    transports: [
        new DailyRotateFile({
            filename: 'logs/daily-log-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            format: format.json()
        }),
        new transports.Console({
            format: format.combine(
                format.printf(info => `[${info.timestamp}] [${info.level.toUpperCase()}] - ${info.message}`)
            )
        })
    ]
});

module.exports = logger;
