"use strict";
exports.__esModule = true;
var log4js_1 = require("log4js");
log4js_1.configure({
    appenders: {
        out: { type: 'file', filename: 'log' }
    },
    categories: {
        "default": { appenders: ['out'], level: 'info' }
    }
});
exports["default"] = log4js_1.getLogger();
