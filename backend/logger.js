const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const logger = createLogger({
  level: 'info',
  transports: [
    new transports.DailyRotateFile({
      filename: 'logs/info-%DATE%.log',
      format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.align(),
        format.printf(
          (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
        )
      )
    })
  ]
});
module.exports = logger;
