import { CronJob } from 'cron';
import vote from '../vote';
import notify from '../notify/notify';

const hour = Math.floor(Math.random() * 6 + 11); // 11 - 17
const min = Math.floor(Math.random() * 60);
const sec = Math.floor(Math.random() * 60);
const cronTime = `${sec} ${min} ${hour} * * *`;
notify(`毎日${hour}時${min}分${sec}秒に投票します`);
new CronJob(cronTime, () => { vote(); }, undefined, true);
