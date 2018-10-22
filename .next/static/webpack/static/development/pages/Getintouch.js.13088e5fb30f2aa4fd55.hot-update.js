webpackHotUpdate("static/development/pages/Getintouch.js",{

/***/ "./pages/Getintouch.js":
/*!*****************************!*\
  !*** ./pages/Getintouch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _src_containers_GetInTouch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/containers/GetInTouch */ "./src/containers/GetInTouch.js");
/* harmony import */ var _src_hocs_navBarHoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/hocs/navBarHoc */ "./src/hocs/navBarHoc.js");


var GetInTouchWithNav = Object(_src_hocs_navBarHoc__WEBPACK_IMPORTED_MODULE_1__["default"])(_src_containers_GetInTouch__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (GetInTouchWithNav);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Getintouch")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=Getintouch.js.13088e5fb30f2aa4fd55.hot-update.js.map