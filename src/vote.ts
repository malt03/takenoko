import * as puppeteer from 'puppeteer';
import notify from './notify/notify';

export default async function () {
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
        notify('たけのこに投票しました！');
      } else {
        notify('たけのこへの投票に失敗しました… エラー: ' + responseText);
      }
    } else {
      notify('たけのこに投票に失敗しました… エラー:' + response.statusText());
    }
  } catch (err) {
    notify('たけのこに投票に失敗しました… エラー:' + err);
  } finally {
    await browser.close();
  }
}
