import { CronJob } from 'cron';
import vote from './vote';
import logger from './logger';

const hour = Math.floor(Math.random() * 6 + 11); // 11 - 17
const min = Math.floor(Math.random() * 60);
const sec = Math.floor(Math.random() * 60);
const cronTime = `${sec} ${min} ${hour} * * *`;
logger.info('scheduled on ' + cronTime);
new CronJob(cronTime, () => { vote(); }, null, true);
