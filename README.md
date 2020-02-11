# jsprimer_cli

## 今回の知見
今回得られた教訓

- Bashのリダイレクトはファイル末尾に改行を追加する
    これに気が付かず、expectedなテストファイルが一致しないという問題に直面した
- 各モジュールの使い方
  - commander
      コマンドライン引数をパースしてくれるイイ奴
  - fs
      ファイル入出力をするモジュール
  - mocha
      テストを実行するモジュール

## Todo
追加でやるべきだと思ったこと
- Node.js向けのeslintを書いておくべき

## Reference
https://jsprimer.net/use-case/nodecli/refactor-and-unittest/
