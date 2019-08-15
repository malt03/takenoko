import * as puppeteer from 'puppeteer';
import logger from './logger';
import notify from './notify/notify';

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
      const responseObject = JSON.parse(responseText);
      if (responseObject['status'] && responseObject['status'] === 200) {
        notify('たけのこに投票しました！');
        logger.info('ok');
      } else {
        notify('たけのこへの投票に失敗しました… エラー: ' + responseText);
        logger.info('error response body: ' + responseText);
      }
    } else {
      notify('たけのこに投票に失敗しました… エラー:' + response.statusText());
      logger.info('error response:' + response.statusText());
    }
  } catch (err) {
    logger.info('error: ' + err);
  } finally {
    await browser.close();
  }
}
