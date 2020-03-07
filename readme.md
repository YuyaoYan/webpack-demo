webpack安装：
###### 全局安装(不推荐)
```js
npm install webpack webpack-cli -g //可以帮助我们在命令里使用npx，webpack登相关指令
//webpack webpack-cli这是两个模块，在webpack4之后 分离的，但两者具有依赖性
webpack -v
npm uninstall webpack webpack-cli -g
```
###### 局部安装
```js
npm i webpack webpack-cli -D
./node_modules/.bin/webpack -v

```
###### 局部安装
```js
npm install webpack webpack-cli --save-dev //-D
```
###### 安装指定版本
```
npm info webpack //查看版本信息
npm install webpack@x.xx webpack-cli -D
```
###### 启动
```
npx webpack
```
webpack识别js和json，图片、css等webpack不识别，需要在loader配置

##### webpack配置文件
```js
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {//输出
    path: path.resolve(__dirname, "./dist"), //path.resolve做路径拼接
    filename: "main.js"
  },
  mode:"development"
};

```
生产环境打包后的文件是压缩过的，生产环境没有压缩。

若不是默认的配置文件webpack.config.js,指定配置文件：
```js
npx webpack --config webpack.test.js
```

在package.json中
```js
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    //这里就相当于npm run dev
    //走node_modules/.bin/webpack
    "dev": "webpack" 
    "dev": "webpack --config webpack.test.js"//可以指定打包的文件，相当于npx的命令
  },
```

#### webpack的核心概念
**entry:**
指定webpack打包入口文件：Webpack执行构建的第一步将从Entry开始，可以抽象成输入
```js
//单页面入口
entry: "./src/index.js";
entry: {
  main: ',.src.index.js'
};
//多页面入口
entry: {
  index: "./src/index.js",
  login: "./src/login.js"
};
```
//hash
每次打包时生成的hash
//chunkhash
入口文件的打包hash，js模块
![0342de7b290dd8a777d11a74145a0614.png](evernotecid://0E85B7B1-CB94-4B3F-BFAB-6885C85BFB95/appyinxiangcom/26098781/ENResource/p64)
//contenthash
js文件中引入了css，如果js改变了，css没有改变的话，打包时不希望打包没有改变的css，这时候引入contenthash，可以跟chunkshash区分开来。


**mode**
![c8c83e28a5a23600170a10993fe3365d.png](evernotecid://0E85B7B1-CB94-4B3F-BFAB-6885C85BFB95/appyinxiangcom/26098781/ENResource/p65)

**loader**
[官网安装方法及示例](https://webpack.docschina.org/loaders/sass-loader/)
处理图片字体css等
安装
```js
npm i file-loader -D
```

**url-loader**
```js
npm install url-loader -D
```

url-loader可以理解为file-loader的强化版
```js
module: {
    rules: [
      //loader模块处理，webpack不能识别的模块
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
```

**文件监听**      40min
轮询判断文件的最后编辑时间是否有变化，某个文件发生了变化，并不会告诉监听者，先缓存起来。
webpack开启监听模式，有两种：
1. 启动webpack命令式，带上--watch参数，启动监听后，需要手动刷新浏览器。
```js
scripts:{
    "watch": "webpack --watch"
}
```
![1bbac36323a5aa1d08878cfcbc49343b.png](evernotecid://0E85B7B1-CB94-4B3F-BFAB-6885C85BFB95/appyinxiangcom/26098781/ENResource/p90)
2. 在配置文件里设置watch:true
```js
watch: true,
  watchOptions: {
    //默认为空，不监听的文件或者目录，支持正则
    ignored: /node_modules/,
    //监听到文件变化后，等300ms再去执行，默认300ms
    aggregateTimeout: 300,
    //判断文件是否发生变化是通过不停的询问系统指定文件有没有变化，默认每秒问1000次
    poll: 1000
  }
```

**style-loader** **css-loader**
css-loader会将所有的css文件合并成一个字符串
style-loader会在html页面创建一个style标签，将合并好的css字符串放在里面
安装：
```js
npm i style-loader css-loader -D
```

**less-loader**
安装：
```js
npm i less-loader less -D
```

**postcss-loader** 浏览器前缀添加
安装：
```js
npm i postcss-loader autoprefixer -D
```
```js
{
    test: /\.less$/,
    //执行顺序是从右向左，先执行css-loader后执行style-loader
    use: ["style-loader", "css-loader", "less-loader", {
      loader:"postcss-loader",
      options: {
        plugins: ()=>[
          require("autoprefixer")({
            overrideBrowserslist:["last 2 versions",">1%"]//autoprefixer新版本中browsers替换成overrideBrowserslist
          })
        ]
      }
    }]
    },
```

**Plugins**
plugin可以在webpack运行到某个阶段的时候，帮你做一些事情，类似于生命周期的概念。
扩展插件，在webpack构建的流程中的特定时机注入扩展逻辑来改变构建结果或做你想要做的事情。
作用于整个构建过程。

插件使用时，要先在webpack.config.js中引入
```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
```
1. HtmlWebpackPligin
HtmlWebpackPligin会在打包结束后，自动生成一个html文件，并把打包生成的js模块引入到该html中。
```js
npm i --save-dev html-webpack-plugin
```
```js
plugins: [
    new HtmlWebpackPlugin({
      title: "首页",
      //用哪个html作为模版
      template: "./src/index.html", 
      //值为true时，默认放在body
      inject: "head" 
    })
  ]
```

2. clean-webpack-plugin
删掉dist文件夹
```js
npm i --save-dev clean-webpack-plugin -D
```

3. mini-css-extract-plugin
把css处理成独立文件
```js
npm i --save-dev mini-css-extract-plugin -D
```