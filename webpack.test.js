const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {//输出
    path: path.resolve(__dirname, "./dist"), //path.resolve做路径拼接
    filename: "main.js"
  },
  mode:"production"
};
