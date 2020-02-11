const program = require("commander");

// ファイルの入出力をするモジュール
const fs = require("fs");

//コマンドライン引数をパースする
program.parse(process.argv);

//ファイルパスをprogram.args配列から取り出す
const filePath = program.args[0];
// console.log(filePath);

// ファイルを非同期で読み込む
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
    return;
  }
  console.log(file);
});
