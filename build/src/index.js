"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const logger = require("./utils/logger");
const config = require("./utils/config");
app_1.app.listen(config.PORT, () => {
    // tslint:disable-next-line:no-console
    logger.info(`Server started at http://localhost:${config.PORT}`);
});
//# sourceMappingURL=index.js.map