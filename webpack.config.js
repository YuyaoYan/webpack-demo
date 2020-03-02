const path = require("path");
module.exports = {
  entry:  {
    index1: "./src/index.js",
    login: "./src/login.js"
  }, //main是模块名称，main是默认的,
  output: {//输出文件的名称
    path: path.resolve(__dirname, "./dist"), //path.resolve做路径拼接，必须是绝对路径
    filename: "[name]_[chunkhash:8].js" //name是占位符，name是打包模块名称
    //chunkhash:8 可以用来做版本管理，每次打包之后相同文件都有保留不同的文件名
    //hash
  },
  mode:"development", //打包环境
  // modules: {
  //   rules:[
  //     //loader模块处理，webpack不能识别的模块
  //     {
  //       test: /\.css$/,
  //       use: "style-loader"
  //     }
  //   ]
  // },
  // plugins: [new HtmlWebpackPlugin()] //插件配置
};