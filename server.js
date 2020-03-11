// npm i express -D
// 创建⼀一个server.js 修改scripts "server":"node server.js"
const express = require("express");
const app = express();
app.get("/api/info", (req, res) => {
  res.json({
    name: "开课吧",
    age: 5,
    msg: "欢迎来到开课吧学习前端⾼高级课程"
  });
});
app.listen("9092");


//执行node serve.js