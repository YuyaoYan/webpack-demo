const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: {
    index: "./src/index.js"
  }, //main是模块名称，main是默认的,
  //带s的都可以是数组
  plugins: [
    new HtmlWebpackPlugin({
      title: "首页",
      template: "./src/index.html", //用哪个html作为模版
      inject: true,
      chunks: ["index"],
      filename: "index.html"
    }),
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: "[name]_[contenthash:8].css"
    // }),
  ] //插件配置
};
