const logger = require('../utils/logger');

const loggerMiddleware = (req, res, next) => {
    const method = req.method;
    const uri = req.originalUrl;
    const ip = req.ip || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];

    const logMessage = `${method} | URI: ${uri} | IP: ${ip} | User Agent: ${userAgent}`;

    logger.info(logMessage);

    next();
};

module.exports = loggerMiddleware;
