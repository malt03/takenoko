import * as pm2 from 'pm2';

pm2.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  pm2.start({
    name: 'takenoko',
    script: './dist/schedule.js',
  }, (err, _) => {
    pm2.disconnect();
    if (err) { throw err; }
  });
});
