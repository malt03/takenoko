"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notifier = require("node-notifier");
function default_1(message) {
    notifier.notify({
        title: 'たけのこ投票機',
        message: message,
        icon: './assets/takenoko.png',
    });
}
exports.default = default_1;
