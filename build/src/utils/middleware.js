"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("./logger");
const logRequest = (req, res, next) => {
    logger.info('Method:  ', req.method);
    logger.info('Path:    ', req.path);
    logger.info('Body:    ', req.body);
    logger.info('---------------------');
    next();
};
exports.logRequest = logRequest;
const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'Endpoint does not exist (Unknown Endpoint)' });
};
exports.unknownEndpoint = unknownEndpoint;
//# sourceMappingURL=middleware.js.map