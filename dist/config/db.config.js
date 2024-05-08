"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialect = exports.config = void 0;
exports.config = {
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
};
exports.dialect = "mysql";
