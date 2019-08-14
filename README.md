# たけのこ投票機

[きのこの山・たけのこの里 国民総選挙 2019](https://www.meiji.co.jp/sweets/chocolate/kinotake/cmp/2019senkyo/)で一日に一度たけのこに投票します。  
きのこ派のforkは許可しません。

## 必要なもの
- [nodejs](https://nodejs.org/ja/)

## セットアップ
```sh
git clone https://github.com/malt03/takenoko.git
cd takenoko
npm install --production
```

## 一日に一度自動投票
```sh
npm run start
```

### 実行状況確認
```sh
npm run status
```

### ストップ
```sh
npm run stop
```

## すぐに投票
```sh
npm run vote-now
```
