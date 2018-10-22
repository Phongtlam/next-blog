webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_containers_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/containers/App */ "./src/containers/App.js");
/* harmony import */ var _src_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _src_styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/phongtlam/Working/next-app/pages/index.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_containers_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/containers/SideBar.js":
/*!***********************************!*\
  !*** ./src/containers/SideBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_SideBar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/SideBar.scss */ "./src/styles/SideBar.scss");
/* harmony import */ var _styles_SideBar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_SideBar_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ExternalLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExternalLinks */ "./src/components/ExternalLinks.js");
var _jsxFileName = "/Users/phongtlam/Working/next-app/src/containers/SideBar.js";





var ROUTES = [{
  linkTo: '/',
  routeName: 'Home'
}, {
  linkTo: '/Blog',
  routeName: 'Blog'
}, {
  linkTo: '/About',
  routeName: 'About'
}, {
  linkTo: '/Getintouch',
  routeName: 'Get In Touch'
}];

var SideBar = function SideBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(props.className, " App-SideBar"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Phong Lam")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "I specialize in making beautiful software and user interfaces. I have a passion for all things science and chess AI. When not coding, I love reading, writing, listening to music or working out at the gym. Follow my journey as a developer or just send me a message to connect."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-SideBar-router-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, ROUTES.map(function (route) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "route",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: route.linkTo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "route-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, route.routeName)));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
    location: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
};

SideBar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
SideBar.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ })

})
//# sourceMappingURL=index.js.fdc5a078c0905bf3a81c.hot-update.js.map