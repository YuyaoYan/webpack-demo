//YuyaoYan
//Yyiao8787887
// webpack默认打包目录是src下的index.js

import logo from "./pic.png";

console.log("logo",logo)
var img = new Image();
img.src = logo;
img.classList.add("logo");
console.log("img",img)

var root = document.getElementById("root");
root.append(img);


document.write("hello  webpack");
console.log("hello");