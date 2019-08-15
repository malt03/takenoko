"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
const vote_1 = require("./vote");
const logger_1 = require("./logger");
const hour = Math.floor(Math.random() * 6 + 11); // 11 - 17
const min = Math.floor(Math.random() * 60);
const sec = Math.floor(Math.random() * 60);
const cronTime = `${sec} ${min} ${hour} * * *`;
logger_1.default.info('scheduled on ' + cronTime);
new cron_1.CronJob(cronTime, () => { vote_1.default(); }, undefined, true);
