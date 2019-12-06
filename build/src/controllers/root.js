"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const rootRouter = express.Router();
exports.rootRouter = rootRouter;
// Home page route.
rootRouter.get('/', (req, res) => {
    res.sendFile('index.html', { root: './src/public/' });
});
//# sourceMappingURL=root.js.map