import constants from './constants';
import * as pm2 from 'pm2';

pm2.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  pm2.describe(constants.name, (err, processDescriptions) => {
    pm2.disconnect();
    if (err) { throw err; }
    if (processDescriptions.length === 0) {
      console.info('takenoko is not started');
      return;
    }
    if (processDescriptions[0].pm2_env && processDescriptions[0].pm2_env.status) {
      console.info(`takenoko is ${processDescriptions[0].pm2_env.status}`);
    } else {
      console.error('unknown status');
    }
  });
});
