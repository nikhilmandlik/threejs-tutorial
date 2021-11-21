(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/chapters/chapter2/Chapter2.js":
/*!*******************************************!*\
  !*** ./src/chapters/chapter2/Chapter2.js ***!
  \*******************************************/
/*! exports provided: show, destroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"destroy\", function() { return destroy; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_libs_dat_gui_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/libs/dat.gui.module.js */ \"./node_modules/three/examples/jsm/libs/dat.gui.module.js\");\n// add orbital control and lights\n\n\n\n\n\n\nclass Chapter2 {\n    constructor() {\n        this.camera;\n        this.scene;\n        this.renderer;\n        this.mesh;\n\n        this.rotation = {\n            x: 0,\n            y: 0\n        };\n\n        this.guiItems = [];\n\n        this.init();\n    }\n\n    init() {\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"]( 0.2, 0.2, 0.2 );\n        const material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshLambertMaterial\"]( { color: 0xff0000 } );\n\n        this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]( geometry, material );\n\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0x999999);\n        this.scene.add(this.mesh);\n\n        this.addLights();\n\n        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({ antialias: true });\n    }\n\n    addLights() {\n        // HemisphereLight\n        const skyColor = 0xeeeeee; // light blue\n        const groundColor = 0xcccccc; // brownish orange\n        const intensity = 1;\n        const hemisphereLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"HemisphereLight\"](\n            skyColor,\n            groundColor,\n            intensity\n        );\n\n        this.scene.add(hemisphereLight);\n\n        // // PointLight\n        // const pointLight = new THREE.PointLight(0xffffff, 1, 100);\n        // pointLight.position.set(5, 10, -5);\n        // this.scene.add(pointLight);\n        \n        // const light = new THREE.AmbientLight( 0x404040 ); // soft white light\n        // this.scene.add(light);\n    }\n\n    animation(time) {\n        this.controls.update();\n\n        this.mesh.rotation.x = this.rotation.x;\n        this.mesh.rotation.y = this.rotation.y;\n\n        this.renderer.render(this.scene, this.camera);\n    }\n\n    show(element) {\n        const width = element.clientWidth - 10;\n        const height = element.clientHeight - 10;\n\n        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"]( 70, width / height, 0.01, 10);\n        this.camera.position.z = 1;\n\n        this.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"]( this.camera, this.renderer.domElement );\n\n        this.renderer.setSize(width, height);\n        this.renderer.setAnimationLoop(this.animation.bind(this));\n\n        this.gui = new three_examples_jsm_libs_dat_gui_module_js__WEBPACK_IMPORTED_MODULE_2__[\"GUI\"]();\n        this.guiItems.push(this.gui.add(this.rotation, 'x', 0, 1));\n        this.guiItems.push(this.gui.add(this.rotation, 'y', 0, 1 ));\n        this.gui.open();\n\n        element.appendChild(this.renderer.domElement);\n    }\n}\n\nconst chapter2 = new Chapter2();\n\nfunction show(ele) {\n    chapter2.show(ele);\n}\n\nfunction destroy() {\n    chapter2.renderer.setAnimationLoop(null);\n\n    chapter2.gui.destroy();\n}\n\n\n\n//# sourceURL=webpack:///./src/chapters/chapter2/Chapter2.js?");

/***/ })

}]);