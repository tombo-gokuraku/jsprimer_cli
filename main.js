// コマンドライン引数をパースするモジュール
const program = require("commander");

// ファイルの入出力をするモジュール
const fs = require("fs");

// MarkdownをHTMLへ変換するモジュール
const marked = require("marked");

//コマンドライン引数をパースする
program.option("--gfm", "enable gfm");
program.parse(process.argv);

//ファイルパスをprogram.args配列から取り出す
const filePath = program.args[0];

// デフォルトのコマンドライン引数を設定、 ユーザー入力で上書きする
const cliOptions = {
  gfm: false,
  ...program.opts()
};
// ファイルを非同期で読み込む
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
    return;
  }
  const html = marked(file, {
    gfm: cliOptions.gfm
  });
  console.log(html);
});
