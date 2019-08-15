"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const pm2 = require("pm2");
pm2.connect((err) => {
    if (err) {
        console.error(err);
        process.exit(2);
    }
    pm2.describe(constants_1.default.name, (err) => {
        pm2.disconnect();
        if (err) {
            throw err;
        }
    });
});
