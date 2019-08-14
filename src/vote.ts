import * as puppeteer from 'puppeteer';
import logger from './logger';

export default async function () {
    logger.info('launching...');
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();
        logger.info('loading...');
        await page.goto('https://www.meiji.co.jp/sweets/chocolate/kinotake/cmp/2019senkyo/');
        await page.waitForSelector('.loader', { hidden: true });
        await page.click('.takenoko > .web');
        logger.info('clicked...');
        const response = await page.waitForResponse('https://api.vote2019.net/api/vote');
        if (response.ok()) {
            const responseText = await response.text();
            logger.info('ok: ' + responseText);
        } else {
            logger.info('error:' + response.statusText());
        }
    } catch (err) {
        logger.info(err);
    } finally {
        await browser.close();
    }
}
