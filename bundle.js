/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"three": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src lazy recursive ^.*$":
/*!****************************************!*\
  !*** ./src lazy ^.*$ namespace object ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\".\": [\n\t\t\"./src/index.js\",\n\t\t9\n\t],\n\t\"./\": [\n\t\t\"./src/index.js\",\n\t\t9\n\t],\n\t\"./ChaperLoader\": [\n\t\t\"./src/ChaperLoader.js\",\n\t\t9\n\t],\n\t\"./ChaperLoader.js\": [\n\t\t\"./src/ChaperLoader.js\",\n\t\t9\n\t],\n\t\"./chapters/chapter1/Chapter1\": [\n\t\t\"./src/chapters/chapter1/Chapter1.js\",\n\t\t9,\n\t\t0,\n\t\t3\n\t],\n\t\"./chapters/chapter1/Chapter1.js\": [\n\t\t\"./src/chapters/chapter1/Chapter1.js\",\n\t\t9,\n\t\t0,\n\t\t3\n\t],\n\t\"./chapters/chapter2/Chapter2\": [\n\t\t\"./src/chapters/chapter2/Chapter2.js\",\n\t\t9,\n\t\t0,\n\t\t1,\n\t\t2,\n\t\t4\n\t],\n\t\"./chapters/chapter2/Chapter2.js\": [\n\t\t\"./src/chapters/chapter2/Chapter2.js\",\n\t\t9,\n\t\t0,\n\t\t1,\n\t\t2,\n\t\t4\n\t],\n\t\"./chapters/chapter3/Chapter3\": [\n\t\t\"./src/chapters/chapter3/Chapter3.js\",\n\t\t9,\n\t\t0,\n\t\t1,\n\t\t5\n\t],\n\t\"./chapters/chapter3/Chapter3.js\": [\n\t\t\"./src/chapters/chapter3/Chapter3.js\",\n\t\t9,\n\t\t0,\n\t\t1,\n\t\t5\n\t],\n\t\"./chapters/chapter4/Chapter4\": [\n\t\t\"./src/chapters/chapter4/Chapter4.js\",\n\t\t9,\n\t\t0,\n\t\t1,\n\t\t6\n\t],\n\t\"./chapters/chapter4/Chapter4.js\": [\n\t\t\"./src/chapters/chapter4/Chapter4.js\",\n\t\t9,\n\t\t0,\n\t\t1,\n\t\t6\n\t],\n\t\"./index\": [\n\t\t\"./src/index.js\",\n\t\t9\n\t],\n\t\"./index.js\": [\n\t\t\"./src/index.js\",\n\t\t9\n\t],\n\t\"./style.css\": [\n\t\t\"./src/style.css\",\n\t\t7\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn Promise.all(ids.slice(2).map(__webpack_require__.e)).then(function() {\n\t\treturn __webpack_require__.t(id, ids[1])\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"./src lazy recursive ^.*$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./src_lazy_^.*$_namespace_object?");

/***/ }),

/***/ "./src/ChaperLoader.js":
/*!*****************************!*\
  !*** ./src/ChaperLoader.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChapterLoader; });\nconst CHAPTERS = [1,2,3,4];\n\nclass ChapterLoader {\n    constructor() {\n        this.currentChapter;\n        this.chapters = [];\n        this.sidebar = document.querySelector('.sidebar');\n        this.mainView = document.querySelector('.main-view');\n\n        this.init();\n    }\n\n    init() {\n        CHAPTERS.forEach(chapter => {\n            const moduleName = `Chapter${chapter}`;\n            const folderName = `chapter${chapter}`\n            const path = `./chapters/${folderName}/${moduleName}`;\n            const show = __webpack_require__(\"./src lazy recursive ^.*$\")(`${path}`);\n\n            this.chapters.push({\n                moduleName,\n                name: `Chapter ${chapter}`,\n                module: show\n            });\n        });\n    }\n\n    loadChapterMenu() {\n        const menu = document.createElement('ul');\n        menu.classList.add('menu');\n        this.chapters.forEach(chapter => {\n            const menuItem = document.createElement('li');\n            menuItem.onclick = () => {\n                this.destroyChapter();\n                this.removeAllClasses();\n                this.showChapter(chapter);\n                menuItem.classList.add('selected');\n            };\n            menuItem.textContent = chapter.name;\n            menuItem.className = 'menu-item';\n\n            menu.appendChild(menuItem);\n        });\n\n        this.sidebar.appendChild(menu);\n    }\n\n    removeAllClasses() {\n        this.mainView.textContent = '';\n        document.querySelectorAll('.menu-item')\n            .forEach(ele => ele.classList.remove('selected'));\n    }\n\n    showChapter(chapter) {\n        this.currentChapter = chapter;\n        chapter.module\n            .then(module => {\n                module.show(this.mainView);\n            })\n            .catch(error => {\n                console.error(`${chapter.name} does not exists`);\n            });\n    }\n\n    destroyChapter() {\n        if (!this.currentChapter) {\n            return;\n        }\n\n        this.currentChapter.module\n            .then(module => {\n                module.destroy();\n            })\n            .catch(error => {\n                console.error(`${chapter.name} does not exists`);\n            });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ChaperLoader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ChaperLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChaperLoader */ \"./src/ChaperLoader.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nconst chapterLoader = new _ChaperLoader__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nchapterLoader.loadChapterMenu();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });