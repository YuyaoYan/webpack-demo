const path = require("path");
module.exports = {
  entry: {
    index1: "./src/index.js"
    // login: "./src/login.js"
  }, //main是模块名称，main是默认的,
  output: {
    //输出文件的名称
    path: path.resolve(__dirname, "./dist"), //path.resolve做路径拼接，必须是绝对路径
    filename: "[name]_[chunkhash:8].js" //name是占位符，name是打包模块名称
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
      }
    ]
  }
  // plugins: [new HtmlWebpackPlugin()] //插件配置
};
