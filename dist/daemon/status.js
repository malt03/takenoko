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
    pm2.describe(constants_1.default.name, (err, processDescriptions) => {
        pm2.disconnect();
        if (err) {
            throw err;
        }
        if (processDescriptions.length === 0) {
            notify_1.default('たけのこ投票機は起動されていません');
            return;
        }
        if (processDescriptions[0].pm2_env && processDescriptions[0].pm2_env.status) {
            notify_1.default(`たけのこ投票機の状態は '${processDescriptions[0].pm2_env.status}' です`);
        }
        else {
            notify_1.default('たけのこ投票機はなんかうまく動いていません');
        }
    });
});
