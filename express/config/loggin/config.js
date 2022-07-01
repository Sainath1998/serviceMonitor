const {createLogger, format, transports} = require("winston");
require("winston-daily-rotate-file");
let logger;
logger = createLogger({
    format: format.combine(format.splat(), format.simple(), format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), format.printf(info => `${
        info.timestamp
    } ${
        info.level
    }: ${
        info.message
    }` + (info.splat !== undefined ? `${
        info.splat
    }` : " "))),
    transports: [
        new transports.Console(
            {
                format: format.combine(format.colorize({all: true}))
            }
        ),
        new transports.DailyRotateFile(
            {
                level: "debug",
                filename: "debug-application-%DATE%.log",
                datePattern: "YYYY-MM-DD",
                zippedArchive: true,
                maxSize: "10m",
                maxFiles: "1d",
                dirname: "./logs"
            }
        ),
        new transports.DailyRotateFile(
            {
                level: "info",
                filename: "info-application-%DATE%.log",
                datePattern: "YYYY-MM-DD",
                zippedArchive: true,
                maxSize: "10m",
                maxFiles: "1d",
                dirname: "./logs"
            }
        ),
        new transports.DailyRotateFile(
            {
                level: "error",
                filename: "error-application-%DATE%.log",
                datePattern: "YYYY-MM-DD",
                zippedArchive: true,
                maxSize: "10m",
                maxFiles: "1d",
                dirname: "./logs"
            }
        ),
    ]
});


module.exports = logger
