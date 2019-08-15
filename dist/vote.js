"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = require("puppeteer");
const notify_1 = require("./notify/notify");
async function default_1() {
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();
        await page.goto('https://www.meiji.co.jp/sweets/chocolate/kinotake/cmp/2019senkyo/');
        await page.waitForSelector('.loader', { hidden: true });
        await page.click('.takenoko > .web');
        const response = await page.waitForResponse('https://api.vote2019.net/api/vote');
        if (response.ok()) {
            const responseText = await response.text();
            const responseObject = JSON.parse(responseText);
            if (responseObject['status'] && responseObject['status'] === 200) {
                notify_1.default('たけのこに投票しました！');
            }
            else {
                notify_1.default('たけのこへの投票に失敗しました… エラー: ' + responseText);
            }
        }
        else {
            notify_1.default('たけのこに投票に失敗しました… エラー:' + response.statusText());
        }
    }
    catch (err) {
        notify_1.default('たけのこに投票に失敗しました… エラー:' + err);
    }
    finally {
        await browser.close();
    }
}
exports.default = default_1;
