/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pic_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pic.png */ \"./src/pic.png\");\n//YuyaoYan\n//Yyiao8787887\n// webpack默认打包目录是src下的index.js\n\n\n\nconsole.log(\"logo\",_pic_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\nvar img = new Image();\nimg.src = _pic_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nimg.classList.add(\"logo\");\nconsole.log(\"img\",img)\n\nvar root = document.getElementById(\"root\");\nroot.append(img);\n\n\ndocument.write(\"hello  webpack\");\nconsole.log(\"hello\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pic.png":
/*!*********************!*\
  !*** ./src/pic.png ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,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\");\n\n//# sourceURL=webpack:///./src/pic.png?");

/***/ })

/******/ });