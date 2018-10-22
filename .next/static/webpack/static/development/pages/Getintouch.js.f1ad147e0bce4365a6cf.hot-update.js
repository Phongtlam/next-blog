webpackHotUpdate("static/development/pages/Getintouch.js",{

/***/ "./pages/Getintouch.js":
/*!*****************************!*\
  !*** ./pages/Getintouch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_containers_GetInTouch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/containers/GetInTouch */ "./src/containers/GetInTouch.js");
/* harmony import */ var _src_hocs_navBarHoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/hocs/navBarHoc */ "./src/hocs/navBarHoc.js");
var _jsxFileName = "/Users/phongtlam/Working/next-app/pages/Getintouch.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_containers_GetInTouch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
});
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

/***/ }),

/***/ "./src/hocs/navBarHoc.js":
/*!*******************************!*\
  !*** ./src/hocs/navBarHoc.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/SideBar */ "./src/containers/SideBar.js");
/* harmony import */ var _styles_App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/App.scss */ "./src/styles/App.scss");
/* harmony import */ var _styles_App_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_App_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/phongtlam/Working/next-app/src/hocs/navBarHoc.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var navBarHoc = function navBarHoc(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SideBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: "App-sidebar-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          }));
        }
      }]);

      return _class;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (navBarHoc);

/***/ })

})
//# sourceMappingURL=Getintouch.js.f1ad147e0bce4365a6cf.hot-update.js.map