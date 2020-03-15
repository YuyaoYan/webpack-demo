//YuyaoYan
//Yyiao8787887
// webpack默认打包目录是src下的index.js

// import logo from "./pic.png";
// import "./index.css";
// import "./index.less";
// console.log("logo", logo);
// var img = new Image();
// img.src = logo;
// img.classList.add("logo");
// console.log("img", img);

// var root = document.getElementById("root");
// root.append(img);

// document.write("hello  webpack@@，今天的心情美美哒");
// console.log("hello");

// //8081的服务访问9092的服务，存在跨域问题
// //通过proxy代理解决
// import axios from "axios";
// axios.get("/api/info").then((res) => {
//   console.log(res);
// });

/**
 * 20200314
 */
// import counter from "./counter";
// import number from "./number";
// counter();
// number();

// if (module.hot) {
//   module.hot.accept("./number", function() {
//     document.body.removeChild(document.getElementById("number"));
//     number();
//   });
// }

/**
 * 20200314
 * @description babel
 */

// // import "@babel/polyfill"; //这里包含了es6,es7,es8...
// // 把使用到的es特性打包进来，没使用到的不用

// // es6: Promise, map, const, 箭头函数
// const arr = [new Promise(() => {}), new Promise(() => {})];
// arr.map((item) => {
//   console.log(item);
// });

/**
 * @description 配置React打包环境
 */
// import React, { Component } from "react";
// import ReactDom from "react-dom";
// import "@babel/polyfill";
// class App extends Component {
//   render() {
//     return <div>hello World</div>;
//   }
// }

// ReactDom.render(<APP />, document.getElementById("app"));


import "@babel/polyfill";
import React, { Component } from "react";
import ReactDom from "react-dom";
class App extends Component {
  render() {
    return <div>hello world</div>;
  }
}
ReactDom.render(<App />, document.getElementById("app"));