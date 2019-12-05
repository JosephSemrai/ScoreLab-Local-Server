"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path_1.resolve(__dirname, '../../../.env') });
let PORT;
exports.PORT = PORT;
if (process.env.NODE_ENV === 'TEST') {
    exports.PORT = PORT = '8080';
}
else {
    exports.PORT = PORT = process.env.PORT || '8080';
}
//# sourceMappingURL=config.js.map