"use strict";
(globalThis["webpackChunkwebpack_config"] = globalThis["webpackChunkwebpack_config"] || []).push([["common"],{

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sayHello: () => (/* binding */ sayHello)
/* harmony export */ });
window.addEventListener(
  "unhandledrejection",
  e => {
    console.log("unhandledrejection:", e);
  }
);

window.addEventListener(
  "error",
  e => {
    console.log("error:", e);
  }
);

const sayHello = () => {
  console.log("~hello");
  setTimeout(() => {
    Promise.reject(new Error("something broke"));
    console.log(foo);
  }, 3000)
};


/***/ })

}]);