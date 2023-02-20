const express = require("express");
const app = express();
const POST = 5000;
const taskRoute = require("./routers/tasks");

//ルーティング設計
app.use("/api/v1/tasks", taskRoute);

app.listen(POST, console.log("サーバー起動"));
