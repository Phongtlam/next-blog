webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/next/dist/lib/head.js":
false,

/***/ "./node_modules/next/dist/lib/side-effect.js":
false,

/***/ "./node_modules/next/head.js":
false,

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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Head, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css",
    integrity: "sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), EXTERNAL_ROUTES.map(function (route) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: route.url,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('external-link', location),
      href: route.url,
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(route.icon, {
        'fa-2x': location === 'getintouch'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
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
//# sourceMappingURL=index.js.2784b72a4cb0e35d7c71.hot-update.js.map