const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const proConfig = {
  output: {
    //输出文件的名称
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]_[chunkhash:8].js"
  },
  mode: "production", //打包环境
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "style-loader"
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        //use使用一个loader可以用对象、字符串，两个loader需要用数组
        use: {
          loader: "url-loader",
          options: {
            name: "[name].png",
            outputPath: "images/",
            limit: 20480 //2048是2kb，比limit小的话会转化成base64
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader", "postcss-loader"]
      },
      {
        test: /\.(woff2|woff)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css"
    })
  ]
};
module.exports = merge(baseConfig, proConfig);
