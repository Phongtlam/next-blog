module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Getintouch.js":
/*!*****************************!*\
  !*** ./pages/Getintouch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_containers_GetInTouch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/containers/GetInTouch */ "./src/containers/GetInTouch.js");
/* harmony import */ var _src_hocs_navBarHoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/hocs/navBarHoc */ "./src/hocs/navBarHoc.js");


var GetInTouchWithNav = Object(_src_hocs_navBarHoc__WEBPACK_IMPORTED_MODULE_1__["default"])(_src_containers_GetInTouch__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (GetInTouchWithNav);

/***/ }),

/***/ "./src/components/ButtonIcon.js":
/*!**************************************!*\
  !*** ./src/components/ButtonIcon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_ButtonIcon_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ButtonIcon.scss */ "./src/styles/ButtonIcon.scss");
/* harmony import */ var _styles_ButtonIcon_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ButtonIcon_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/phongtlam/Working/next-app/src/components/ButtonIcon.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var ButtonIcon = function ButtonIcon(_ref) {
  var className = _ref.className,
      callback = _ref.callback,
      iconName = _ref.iconName,
      _ref$iconSize = _ref.iconSize,
      iconSize = _ref$iconSize === void 0 ? 'lg' : _ref$iconSize,
      _ref$buttonType = _ref.buttonType,
      buttonType = _ref$buttonType === void 0 ? 'normal' : _ref$buttonType,
      children = _ref.children,
      moreprops = _objectWithoutProperties(_ref, ["className", "callback", "iconName", "iconSize", "buttonType", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('App-ButtonIcon', buttonType, className),
    type: "button",
    onClick: function onClick() {
      return callback();
    }
  }, moreprops, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('icon', iconName, "fa-".concat(iconSize)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children) : null);
};

ButtonIcon.propTypes = {
  callback: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iconName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  iconSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  buttonType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['normal', 'primary', 'danger', 'borderless', 'borderless-danger']),
  moreprops: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})
};
ButtonIcon.defaultProps = {
  className: '',
  iconSize: 'lg',
  buttonType: 'normal',
  children: null,
  moreprops: {}
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonIcon);

/***/ }),

/***/ "./src/components/ExternalLinks.js":
/*!*****************************************!*\
  !*** ./src/components/ExternalLinks.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
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

/***/ }),

/***/ "./src/containers/GetInTouch.js":
/*!**************************************!*\
  !*** ./src/containers/GetInTouch.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_GetInTouch_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/GetInTouch.scss */ "./src/styles/GetInTouch.scss");
/* harmony import */ var _styles_GetInTouch_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_GetInTouch_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ButtonIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ButtonIcon */ "./src/components/ButtonIcon.js");
/* harmony import */ var _components_ExternalLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ExternalLinks */ "./src/components/ExternalLinks.js");
var _jsxFileName = "/Users/phongtlam/Working/next-app/src/containers/GetInTouch.js";







var GetInTouch = function GetInTouch(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('App-GetInTouch', props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-GetInTouch-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Let's work together!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "I would love to chat about science-fiction books, music, work out routines or anything! I am interested in meeting over a cup of coffee to discuss about whatever comes to your mind. I enjoy a friendly chat, a collaboration on a new project or just to meet someone new. Feel free to drop me a line!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "You can find me also on:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
    location: "getintouch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Or send me a message here:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "contact-form",
    className: "App-GetInTouch-form",
    method: "post",
    action: "https://formspree.io/phongtlam@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-GetInTouch-controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "name",
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Your name *", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    required: "required",
    className: "form-control-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email",
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Your email *", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    required: "required",
    className: "form-control-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "message",
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Tell me about your project! *", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    rows: "4",
    name: "message",
    id: "message",
    required: "required",
    className: "form-control-input textarea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "submit",
    iconName: "fas fa-paper-plane",
    value: "Send",
    callback: function callback() {},
    buttonType: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Send")))));
};

GetInTouch.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
GetInTouch.defaultProps = {
  className: null
};
/* harmony default export */ __webpack_exports__["default"] = (GetInTouch);

/***/ }),

/***/ "./src/containers/SideBar.js":
/*!***********************************!*\
  !*** ./src/containers/SideBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
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

/***/ }),

/***/ "./src/hocs/navBarHoc.js":
/*!*******************************!*\
  !*** ./src/hocs/navBarHoc.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/SideBar */ "./src/containers/SideBar.js");
/* harmony import */ var _styles_App_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/App.scss */ "./src/styles/App.scss");
/* harmony import */ var _styles_App_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_App_scss__WEBPACK_IMPORTED_MODULE_3__);
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
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.state = {};
        return _this;
      }

      _createClass(_class, [{
        key: "_method",
        value: function _method() {
          this.setState({});
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
            rel: "stylesheet",
            href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css",
            integrity: "sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz",
            crossOrigin: "anonymous",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "App",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "App-sidebar-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, {
            className: "App-content-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          })));
        }
      }]);

      return _class;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (navBarHoc);

/***/ }),

/***/ "./src/styles/App.scss":
/*!*****************************!*\
  !*** ./src/styles/App.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/ButtonIcon.scss":
/*!************************************!*\
  !*** ./src/styles/ButtonIcon.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/ExternalLinks.scss":
/*!***************************************!*\
  !*** ./src/styles/ExternalLinks.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/GetInTouch.scss":
/*!************************************!*\
  !*** ./src/styles/GetInTouch.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/SideBar.scss":
/*!*********************************!*\
  !*** ./src/styles/SideBar.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/Getintouch.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/Getintouch.js */"./pages/Getintouch.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=Getintouch.js.map