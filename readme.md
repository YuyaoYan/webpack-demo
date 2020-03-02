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
webpack识别js，图片、css等webpack不识别，需要在loader配置

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
入口文件的打包hash
![0342de7b290dd8a777d11a74145a0614.png](evernotecid://0E85B7B1-CB94-4B3F-BFAB-6885C85BFB95/appyinxiangcom/26098781/ENResource/p64)
//contenthash



**mode**
![c8c83e28a5a23600170a10993fe3365d.png](evernotecid://0E85B7B1-CB94-4B3F-BFAB-6885C85BFB95/appyinxiangcom/26098781/ENResource/p65)
