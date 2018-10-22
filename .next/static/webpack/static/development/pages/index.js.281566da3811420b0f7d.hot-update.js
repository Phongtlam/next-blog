webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ExternalLinks.js":
/*!*****************************************!*\
  !*** ./src/components/ExternalLinks.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_ExternalLinks_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ExternalLinks.scss */ "./src/styles/ExternalLinks.scss");
/* harmony import */ var _styles_ExternalLinks_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ExternalLinks_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/phongtlam/Working/next-app/src/components/ExternalLinks.js";




var EXTERNAL_ROUTES = [{
  url: 'mailto:phongtlam@gmail.com',
  icon: 'fas fa-envelope'
}, {
  url: 'https://github.com/Phongtlam',
  icon: 'fab fa-github'
}, {
  url: 'https://www.linkedin.com/in/phongtlam/',
  icon: 'fab fa-linkedin-in'
}, {
  url: 'https://angel.co/phongtlam',
  icon: 'fab fa-angellist'
}, {
  url: 'https://soundcloud.com/phong-twitch-lam',
  icon: 'fab fa-soundcloud'
}];

var ExternalLinks = function ExternalLinks(_ref) {
  var location = _ref.location;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-ExternalLinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, EXTERNAL_ROUTES.map(function (route) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: route.url,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('external-link', location),
      href: route.url,
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(route.icon, {
        'fa-2x': location === 'getintouch'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }));
  }));
};

ExternalLinks.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['sidebar', 'getintouch'])
};
ExternalLinks.defaultProps = {
  location: 'sidebar'
};
/* harmony default export */ __webpack_exports__["default"] = (ExternalLinks);

/***/ })

})
//# sourceMappingURL=index.js.281566da3811420b0f7d.hot-update.js.map