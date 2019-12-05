"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-any
const info = (...params) => {
    if (process.env.NODE_ENV !== 'test') {
        console.log(...params);
    }
};
exports.info = info;
// tslint:disable-next-line:no-any
const error = (...error) => {
    console.error(...error);
};
exports.error = error;
//# sourceMappingURL=logger.js.map