(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/chapters/chapter1/Chapter1.js":
/*!*******************************************!*\
  !*** ./src/chapters/chapter1/Chapter1.js ***!
  \*******************************************/
/*! exports provided: show, destroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"destroy\", function() { return destroy; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// simple cube rotation\n\n\n\nclass Chapter1 {\n    constructor() {\n        this.camera;\n        this.scene;\n        this.renderer;\n        this.mesh;\n\n        this.init();\n    }\n\n    init() {\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"]( 0.2, 0.2, 0.2 );\n        const material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshNormalMaterial\"]();\n        // const material = new THREE.MeshLambertMaterial();\n\n        this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]( geometry, material );\n\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0x999999);\n        this.scene.add(this.mesh);\n\n        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({ antialias: true });\n    }\n\n    animation(time) {\n        this.mesh.rotation.x = time / 2000;\n        this.mesh.rotation.y = time / 1000;\n        this.renderer.render(this.scene, this.camera);\n    }\n\n    show(element) {\n        const width = element.clientWidth - 10;\n        const height = element.clientHeight - 10;\n\n        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"]( 70, width / height, 0.01, 10);\n        this.camera.position.z = 1;\n        this.renderer.setSize(width, height);\n        this.renderer.setAnimationLoop(this.animation.bind(this));\n        element.appendChild(this.renderer.domElement);\n    }\n}\n\nconst chapter1 = new Chapter1();\n\nfunction show(ele) {\n    chapter1.show(ele);\n}\n\nfunction destroy() {\n    chapter1.renderer.setAnimationLoop(null);\n}\n\n//# sourceURL=webpack:///./src/chapters/chapter1/Chapter1.js?");

/***/ })

}]);