# はち歯科 イベントチェックインシステム

イベント来場者のチェックインを管理するシンプルなWebアプリケーションです。

## 機能

- メールアドレスと来場人数の入力
- CSVファイルへのデータ保存
- レスポンシブデザイン

## セットアップ方法

1. 必要なパッケージのインストール:
```bash
npm install
```

2. サーバーの起動:
```bash
npm start
```

3. ブラウザで以下のURLにアクセス:
```
http://localhost:3000
```

## データの保存

チェックインデータは `checkins.csv` ファイルに以下の形式で保存されます：
- メールアドレス
- 来場人数
- チェックイン時間
- 日付 