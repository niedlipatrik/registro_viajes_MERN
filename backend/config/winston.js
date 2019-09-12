const winston =require('winston');
const path=require('path')
var options = {
    file: {
        level: 'info',
        filename: path.join(__dirname,'logs','app.log'),
        handleExceptions: true,
        format: winston.format.json(),
        maxsize: 5242880,
        maxFiles: 5,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }
};

var logger = winston.createLogger({
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console)
    ],
    exitOnError: false,
});

logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
}
module.exports = logger;