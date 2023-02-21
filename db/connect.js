const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("データベースと接続中..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

//データベース（mongoDB）に接続するため,中継に必要なmongooseを使用する。
//クライアント ←→（）→サーバー ←→（）データベース　＝　クライアント→postman(経由)→サーバーに接続 データベース（mongoDB）をサーバーに接続するためにmongooseを経由して使う
