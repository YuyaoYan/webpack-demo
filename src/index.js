//YuyaoYan
//Yyiao8787887
// webpack默认打包目录是src下的index.js

import logo from "./pic.png";
import "./index.css";
import "./index.less"
console.log("logo",logo)
var img = new Image();
img.src = logo;
img.classList.add("logo");
console.log("img",img)

var root = document.getElementById("root");
root.append(img);


document.write("hello  webpack@@，今天的心情美美哒");
console.log("hello");

//8081的服务访问9092的服务，存在跨域问题
//通过proxy代理解决
import axios from 'axios';
axios.get('/api/info').then(res=>{
console.log(res) })