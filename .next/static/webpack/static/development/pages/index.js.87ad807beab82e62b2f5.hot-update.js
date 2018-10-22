webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _src_containers_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/containers/Home */ "./src/containers/Home.js");
/* harmony import */ var _src_hocs_AppHOC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/hocs/AppHOC */ "./src/hocs/AppHOC.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_src_hocs_AppHOC__WEBPACK_IMPORTED_MODULE_1__["default"])(_src_containers_Home__WEBPACK_IMPORTED_MODULE_0__["default"], 'home'));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.87ad807beab82e62b2f5.hot-update.js.map