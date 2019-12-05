import * as logger from './logger';
import { Request, Response, NextFunction } from 'express';

const logRequest = (req: Request, res: Response, next: NextFunction) => {
  logger.info('Method:  ', req.method);
  logger.info('Path:    ', req.path);
  logger.info('Body:    ', req.body);
  logger.info('---------------------');

  next();
};

const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'Endpoint does not exist (Unknown Endpoint)' });
};

export { logRequest, unknownEndpoint };
