const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const devConfig = {
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },
  mode: "development", //打包环境
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./dist", //服务器静态资源目录
    port: 8081,
    open: true, //服务启动后，会把服务地址放在dist目录下，找到index.html并在浏览器自动打开
    proxy: {
      "/api": {
        target: "http://localhost:9092"
      }
    },
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "style-loader"
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].png",
            outputPath: "images/",
            limit: 20480
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
      },
      {
        test: /\.(woff2|woff)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
// merge合并两个对象
module.exports = merge(baseConfig, devConfig);
