const express = require("express");
const app = express();
const POST = 5000;
const taskRoute = require("./routers/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());

//ルーティング設計
app.use("/api/v1/tasks", taskRoute);

//データベースと接続
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    //データベースと接続を確認できる機能
    app.listen(POST, console.log("サーバー起動"));
  } catch (err) {
    console.log(err);
  }
};

start();
