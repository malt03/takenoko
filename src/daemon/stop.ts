import constants from './constants';
import * as pm2 from 'pm2';
import notify from '../notify/notify';

pm2.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  pm2.stop(constants.name, (err, _) => {
    pm2.disconnect();
    if (err) { throw err; }
    notify('たけのこ投票機を停止しました');
  });
});
