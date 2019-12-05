import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as config from './utils/config';
import * as logger from './utils/logger';
import * as middleware from './utils/middleware';
import { rootRouter } from './controllers/root';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(middleware.logRequest);

// Routers
app.use('/', rootRouter);

// After router middleware
app.use(middleware.unknownEndpoint);

export { app };
