"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
const vote_1 = require("../vote");
const notify_1 = require("../notify/notify");
const hour = Math.floor(Math.random() * 6 + 11); // 11 - 17
const min = Math.floor(Math.random() * 60);
const sec = Math.floor(Math.random() * 60);
const cronTime = `${sec} ${min} ${hour} * * *`;
notify_1.default(`毎日${hour}時${min}分${sec}秒に投票します`);
new cron_1.CronJob(cronTime, () => { vote_1.default(); }, undefined, true);
