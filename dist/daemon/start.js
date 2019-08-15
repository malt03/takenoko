"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const pm2 = require("pm2");
pm2.connect((err) => {
    if (err) {
        console.error(err);
        process.exit(2);
    }
    pm2.start({
        name: constants_1.default.name,
        script: './dist/schedule.js',
    }, (err, _) => {
        pm2.disconnect();
        if (err) {
            throw err;
        }
    });
});
