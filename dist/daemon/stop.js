"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const pm2 = require("pm2");
const notify_1 = require("../notify/notify");
pm2.connect((err) => {
    if (err) {
        console.error(err);
        process.exit(2);
    }
    pm2.stop(constants_1.default.name, (err, _) => {
        pm2.disconnect();
        if (err) {
            throw err;
        }
        notify_1.default('たけのこ投票機を停止しました');
    });
});
