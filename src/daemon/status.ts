import constants from './constants';
import * as pm2 from 'pm2';
import notify from '../notify/notify';

pm2.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  pm2.describe(constants.name, (err, processDescriptions) => {
    pm2.disconnect();
    if (err) { throw err; }
    if (processDescriptions.length === 0) {
      notify('たけのこ投票機は起動されていません');
      return;
    }
    if (processDescriptions[0].pm2_env && processDescriptions[0].pm2_env.status) {
      notify(`たけのこ投票機の状態は '${processDescriptions[0].pm2_env.status}' です`);
    } else {
      notify('たけのこ投票機はなんかうまく動いていません');
    }
  });
});
