import * as notifier from 'node-notifier';

export default function (message: string) {
  notifier.notify({
    title: 'たけのこ投票機',
    message: message,
    icon: './assets/takenoko.png',
  });
}
