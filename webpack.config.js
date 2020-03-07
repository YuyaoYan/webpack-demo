const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    index: "./src/index.js",
    login: "./src/login.js"
  }, //main是模块名称，main是默认的,
  output: {
    //输出文件的名称
    path: path.resolve(__dirname, "./dist"), //path.resolve做路径拼接，必须是绝对路径
    filename: "[name]_[chunkhash:8].js" //name是占位符，name是打包模块名称
    // filename: "[name].js" //name是占位符，name是打包模块名称
    //chunkhash:8 可以用来做版本管理，每次打包之后相同文件都有保留不同的文件名
    //hash
  },
  mode: "development", //打包环境
  module: {
    rules: [
      //loader模块处理，webpack不能识别的模块
      {
        test: /\.css$/,
        use: "style-loader"
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   use: "file-loader"
      // },
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   use: "url-loader"
      // },
      {
        test: /\.(png|jpe?g|gif)$/,
        //use使用一个loader可以用对象、字符串，两个loader需要用数组
        use: {
          loader: "url-loader",
          //options额外的配置，比如资源名称
          options: {
            //placeholder占位符 [name]老资源模块的名称
            //[ext]老资源模块的后缀
            //https://webpack.js.org/loaders/file-loader#placeholders
            name: "[name].png",
            //打包后的存放位置
            outputPath: "images/",
            // publicPath: "../images",
            limit: 20480 //2048是2kb，比limit小的话会转化成base64
          }
        }
      },
      {
        test: /\.css$/,
        //执行顺序是从右向左，先执行css-loader后执行style-loader
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        //执行顺序是从右向左，先执行css-loader后执行style-loader
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
  // watch: true,
  // watchOptions: {
  //   //默认为空，不监听的文件或者目录，支持正则
  //   ignored: /node_modules/,
  //   //监听到文件变化后，等300ms再去执行，默认300ms
  //   aggregateTimeout: 300,
  //   //判断文件是否发生变化是通过不停的询问系统指定文件有没有变化，默认每秒问1次
  //   poll: 1000 //ms
  // }

  //带s的都可以是数组
  plugins: [
    new HtmlWebpackPlugin({
      title: "首页",
      template: "./src/index.html", //用哪个html作为模版
      inject: true,
      chunks: ["index"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      title: "注册",
      template: "./src/index.html",
      inject: true,
      chunks: ["login"],
      filename: "login.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css"
    })
  ] //插件配置
};
