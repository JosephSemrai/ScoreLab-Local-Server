"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const middleware = require("./utils/middleware");
const root_1 = require("./controllers/root");
const app = express();
exports.app = app;
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(middleware.logRequest);
app.use('/src/public/', express.static('public'));
// Routers
app.use('/', root_1.rootRouter);
// After router middleware
app.use(middleware.unknownEndpoint);
//# sourceMappingURL=app.js.map