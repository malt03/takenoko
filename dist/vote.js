"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = require("puppeteer");
const logger_1 = require("./logger");
const notify_1 = require("./notify/notify");
async function default_1() {
    logger_1.default.info('launching...');
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();
        logger_1.default.info('loading...');
        await page.goto('https://www.meiji.co.jp/sweets/chocolate/kinotake/cmp/2019senkyo/');
        await page.waitForSelector('.loader', { hidden: true });
        await page.click('.takenoko > .web');
        logger_1.default.info('clicked...');
        const response = await page.waitForResponse('https://api.vote2019.net/api/vote');
        if (response.ok()) {
            const responseText = await response.text();
            const responseObject = JSON.parse(responseText);
            if (responseObject['status'] && responseObject['status'] === 200) {
                notify_1.default('たけのこに投票しました！');
                logger_1.default.info('ok');
            }
            else {
                notify_1.default('たけのこへの投票に失敗しました… エラー: ' + responseText);
                logger_1.default.info('error response body: ' + responseText);
            }
        }
        else {
            notify_1.default('たけのこに投票に失敗しました… エラー:' + response.statusText());
            logger_1.default.info('error response:' + response.statusText());
        }
    }
    catch (err) {
        logger_1.default.info('error: ' + err);
    }
    finally {
        await browser.close();
    }
}
exports.default = default_1;
