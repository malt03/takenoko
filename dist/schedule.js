"use strict";
exports.__esModule = true;
var cron_1 = require("cron");
var vote_1 = require("./vote");
var logger_1 = require("./logger");
var hour = Math.floor(Math.random() * 6 + 11); // 11 - 17
var min = Math.floor(Math.random() * 60);
var sec = Math.floor(Math.random() * 60);
var cronTime = sec + " " + min + " " + hour + " * * *";
logger_1["default"].info('scheduled on ' + cronTime);
new cron_1.CronJob(cronTime, function () { vote_1["default"](); }, null, true);
