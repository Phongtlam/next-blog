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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_containers_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/containers/Home */ "./src/containers/Home.js");
/* harmony import */ var _src_hocs_AppHOC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/hocs/AppHOC */ "./src/hocs/AppHOC.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_src_hocs_AppHOC__WEBPACK_IMPORTED_MODULE_1__["default"])(_src_containers_Home__WEBPACK_IMPORTED_MODULE_0__["default"], 'home'));

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

/***/ "./src/components/HtmlParser.js":
/*!**************************************!*\
  !*** ./src/components/HtmlParser.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! showdown */ "showdown");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_HtmlParser_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/HtmlParser.scss */ "./src/styles/HtmlParser.scss");
/* harmony import */ var _styles_HtmlParser_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_HtmlParser_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_propTypesShapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/propTypesShapes */ "./src/utils/propTypesShapes.js");
var _jsxFileName = "/Users/phongtlam/Working/next-app/src/components/HtmlParser.js";






var converter = new showdown__WEBPACK_IMPORTED_MODULE_2___default.a.Converter();

var HtmlParser = function HtmlParser(_ref) {
  var className = _ref.className,
      state = _ref.location.state;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('App-HtmlParser', className) // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: converter.makeHtml(state.markdownTexts)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  });
};

HtmlParser.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    search: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(_utils_propTypesShapes__WEBPACK_IMPORTED_MODULE_5__["fileDataShape"])
  }).isRequired
};
HtmlParser.defaultProps = {
  className: null
};
/* harmony default export */ __webpack_exports__["default"] = (HtmlParser);

/***/ }),

/***/ "./src/components/MarkDownForm.js":
/*!****************************************!*\
  !*** ./src/components/MarkDownForm.js ***!
  \****************************************/
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
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetch */ "./src/utils/fetch.js");
/* harmony import */ var _styles_MarkDownForm_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/MarkDownForm.scss */ "./src/styles/MarkDownForm.scss");
/* harmony import */ var _styles_MarkDownForm_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_MarkDownForm_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ButtonIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonIcon */ "./src/components/ButtonIcon.js");
/* harmony import */ var _utils_propTypesShapes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/propTypesShapes */ "./src/utils/propTypesShapes.js");
var _jsxFileName = "/Users/phongtlam/Working/next-app/src/components/MarkDownForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var MarkDownForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MarkDownForm, _React$Component);

  function MarkDownForm(props) {
    var _this;

    _classCallCheck(this, MarkDownForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MarkDownForm).call(this, props));
    _this.state = {
      markDownInput: '',
      markDownTitle: '',
      coverImgUrl: '',
      markDownDisplay: '',
      order: 0,
      isLargeSize: false,
      // eslint-disable-next-line react/no-unused-state
      internalKey: ''
    };
    _this._onChangeInput = _this._onChangeInput.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._onStagingFile = _this._onStagingFile.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._onPublish = _this._onPublish.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._onCancelStaging = _this._onCancelStaging.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._onToggleFormSize = _this._onToggleFormSize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._onResetMarkDownForm = _this._onResetMarkDownForm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MarkDownForm, [{
    key: "_onChangeInput",
    value: function _onChangeInput(e, field) {
      var valueToSet = e.target.value;

      if (field === 'order') {
        var numValue = Number(valueToSet);
        this.setState({
          order: numValue
        });
      } else {
        this.setState(_defineProperty({}, field, valueToSet));
      }
    }
  }, {
    key: "_onStagingFile",
    value: function _onStagingFile() {
      var _this2 = this;

      var _this$state = this.state,
          markDownInput = _this$state.markDownInput,
          markDownTitle = _this$state.markDownTitle,
          coverImgUrl = _this$state.coverImgUrl,
          order = _this$state.order;

      if (markDownInput.length === 0 || markDownTitle.length === 0 || coverImgUrl.length === 0) {
        this.setState({
          markDownDisplay: markDownInput.length === 0 ? 'There is nothing to stage' : "Missing ".concat(markDownTitle.length === 0 ? 'title' : 'image cover')
        });
        return;
      }

      Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_3__["stageFile"])({
        date: new Date(),
        markdownTexts: markDownInput,
        title: markDownTitle,
        coverImgUrl: coverImgUrl,
        order: order
      }, this.props.type).then(function (res) {
        _this2.setState({
          markDownDisplay: res.message
        });

        _this2._onResetMarkDownForm();
      }).catch(function (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      });
    }
  }, {
    key: "_onPublish",
    value: function _onPublish() {
      var _this3 = this;

      var _this$state2 = this.state,
          markDownInput = _this$state2.markDownInput,
          markDownTitle = _this$state2.markDownTitle,
          coverImgUrl = _this$state2.coverImgUrl,
          order = _this$state2.order;
      var postAction = _utils_fetch__WEBPACK_IMPORTED_MODULE_3__["publishFile"];
      var postBody = {};

      if (this.props.action === 'edit') {
        postAction = _utils_fetch__WEBPACK_IMPORTED_MODULE_3__["editFile"];
        postBody = {
          _id: this.props.location.state._id,
          markdownTexts: markDownInput,
          title: markDownTitle,
          coverImgUrl: coverImgUrl,
          order: order
        };
      }

      postAction(postBody, this.props.type).then(function (res) {
        if (res.portfolio) {
          _this3.props.setHtmlBody(_this3.props.type, res.portfolio, _this3.props.action === 'edit');
        }

        _this3.setState({
          markDownDisplay: res.message
        });

        _this3._onResetMarkDownForm();

        history.goBack();
      }).catch(function (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      });
    }
  }, {
    key: "_onCancelStaging",
    value: function _onCancelStaging() {
      var _this4 = this;

      Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_3__["stageFile"])({
        cancel: 'cancel staging'
      }).then(function (res) {
        _this4.setState({
          markDownDisplay: res.message
        });
      });
    }
  }, {
    key: "_onResetMarkDownForm",
    value: function _onResetMarkDownForm() {
      this.setState({
        markDownInput: '',
        markDownTitle: '',
        coverImgUrl: '',
        order: 0
      });
    }
  }, {
    key: "_onToggleFormSize",
    value: function _onToggleFormSize() {
      this.setState(function (prevState) {
        return {
          isLargeSize: !prevState.isLargeSize
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('App-MarkDownForm', this.props.className, {
          'small-size': this.state.isLargeSize
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "markdownform-btn",
        callback: function callback() {
          _this5.props.onMarkDownFormClose();
        },
        iconName: "fas fa-times",
        iconSize: "2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "markdownform-btn",
        callback: this._onToggleFormSize,
        iconName: this.state.isLargeSize ? 'fas fa-expand' : 'fas fa-window-minimize',
        iconSize: "2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this5._onChangeInput(e, 'markDownTitle');
        },
        value: this.state.markDownTitle,
        className: "header-input",
        placeholder: "Title goes here",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this5._onChangeInput(e, 'coverImgUrl');
        },
        value: this.state.coverImgUrl,
        className: "header-input",
        placeholder: "Cover Img url",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this5._onChangeInput(e, 'order');
        },
        value: this.state.order,
        type: "number",
        className: "header-input",
        placeholder: "Order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-display",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, this.state.markDownDisplay)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        placeholder: "Markdown body",
        onChange: function onChange(e) {
          return _this5._onChangeInput(e, 'markDownInput');
        },
        value: this.state.markDownInput,
        className: "text-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('staging-btn', {
          hidden: this.props.action === 'edit'
        }),
        callback: this._onStagingFile,
        iconName: "fas fa-file-upload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "Stage Post"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        callback: this._onPublish,
        iconName: this.props.action === 'edit' ? 'fas fa-save' : 'fas fa-file-import',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, this.props.action === 'edit' ? 'Save Edit' : 'Publish Post')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        callback: this._onCancelStaging,
        iconName: "fas fa-ban",
        buttonType: "danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Cancel Staging")));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.key !== state.internalKey && props.location && props.location.state) {
        var _props$location$state = props.location.state,
            markdownTexts = _props$location$state.markdownTexts,
            title = _props$location$state.title,
            coverImgUrl = _props$location$state.coverImgUrl,
            order = _props$location$state.order;
        return {
          internalKey: props.key,
          markDownInput: markdownTexts,
          markDownTitle: title,
          coverImgUrl: coverImgUrl,
          order: order
        };
      }

      return null;
    }
  }]);

  return MarkDownForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(MarkDownForm, "propTypes", {
  setHtmlBody: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  action: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onMarkDownFormClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['portfolio', 'post']),
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    search: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(_utils_propTypesShapes__WEBPACK_IMPORTED_MODULE_6__["fileDataShape"])
  }).isRequired
});

_defineProperty(MarkDownForm, "defaultProps", {
  setHtmlBody: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: null,
  type: 'portfolio',
  action: null
});

/* harmony default export */ __webpack_exports__["default"] = (MarkDownForm);

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
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
/* harmony import */ var _ButtonIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonIcon */ "./src/components/ButtonIcon.js");
/* harmony import */ var _styles_Modal_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Modal.scss */ "./src/styles/Modal.scss");
/* harmony import */ var _styles_Modal_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/phongtlam/Working/next-app/src/components/Modal.js";






var Modal = function Modal(_ref) {
  var className = _ref.className,
      _ref$modalData = _ref.modalData,
      type = _ref$modalData.type,
      confirmText = _ref$modalData.confirmText,
      rejectText = _ref$modalData.rejectText,
      message = _ref$modalData.message,
      resolver = _ref$modalData.resolver,
      rejecter = _ref$modalData.rejecter,
      isOpen = _ref$modalData.isOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('App-Modal-wrapper', {
      hidden: !isOpen
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('App-Modal-content', className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('header', type),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "header-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    buttonType: "danger",
    className: "button",
    iconName: "fas fa-ban",
    callback: rejecter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, rejectText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    buttonType: "primary",
    className: "button",
    iconName: "far fa-check-circle",
    callback: resolver,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, confirmText))));
};

Modal.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modalData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    confirmText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    rejectText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['primary', 'danger']),
    isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  })
};
Modal.defaultProps = {
  className: null,
  modalData: {
    isOpen: false,
    message: '',
    confirmText: 'Confirm',
    rejectText: 'Cancel',
    type: 'primary'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/Particles.js":
/*!*************************************!*\
  !*** ./src/components/Particles.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Particles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Particles.scss */ "./src/styles/Particles.scss");
/* harmony import */ var _styles_Particles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Particles_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/phongtlam/Working/next-app/src/components/Particles.js";






var ParticlesWrapper = function ParticlesWrapper(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('App-Particles', className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    params: {
      particles: {
        number: {
          value: 160,
          density: {
            enable: false
          }
        },
        color: {
          value: '#000000'
        },
        size: {
          value: 10,
          random: true
        },
        move: {
          direction: 'bottom',
          out_mode: 'out'
        },
        line_linked: {
          enable: false
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

ParticlesWrapper.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
ParticlesWrapper.defaultProps = {
  className: null
};
/* harmony default export */ __webpack_exports__["default"] = (ParticlesWrapper);

/***/ }),

/***/ "./src/components/PortfolioCard.js":
/*!*****************************************!*\
  !*** ./src/components/PortfolioCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! showdown */ "showdown");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_PortfolioCard_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/PortfolioCard.scss */ "./src/styles/PortfolioCard.scss");
/* harmony import */ var _styles_PortfolioCard_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_PortfolioCard_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ButtonIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonIcon */ "./src/components/ButtonIcon.js");
/* harmony import */ var _utils_propTypesShapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/propTypesShapes */ "./src/utils/propTypesShapes.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/fetch */ "./src/utils/fetch.js");
var _jsxFileName = "/Users/phongtlam/Working/next-app/src/components/PortfolioCard.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var converter = new showdown__WEBPACK_IMPORTED_MODULE_2___default.a.Converter();

var _onImageClick = function _onImageClick(projectTitle, projectData) {
  history.push("/Home/".concat(projectTitle), _objectSpread({}, projectData));
};

var _onEdit = function _onEdit(projectTitle, projectData) {
  history.push("/Home/".concat(projectTitle, "/edit"), _objectSpread({}, projectData));
};

var _onDelete = function _onDelete(project) {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_6__["deleteFile"])(project, 'portfolio');
};

var PortfolioCard = function PortfolioCard(_ref) {
  var onOpenMarkDownEdit = _ref.onOpenMarkDownEdit,
      cardData = _ref.cardData,
      loadModalData = _ref.loadModalData,
      _ref$cardData = _ref.cardData,
      coverImgUrl = _ref$cardData.coverImgUrl,
      title = _ref$cardData.title,
      markdownTexts = _ref$cardData.markdownTexts;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-PortfolioCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-PortfolioCard-image-container",
    role: "button",
    onClick: function onClick() {
      _onImageClick(title, cardData);
    },
    onKeyDown: function onKeyDown() {
      _onImageClick(title, cardData);
    },
    tabIndex: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "image",
    src: coverImgUrl,
    alt: "cover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    callback: function callback() {},
    className: "button-overlay",
    iconName: "fas fa-expand",
    iconSize: "5x",
    buttonType: "borderless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "action-button",
    callback: function callback() {
      onOpenMarkDownEdit(true);

      _onEdit(title, cardData);
    },
    iconName: "fas fa-edit",
    buttonType: "borderless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "action-button",
    callback: function callback() {
      loadModalData({
        callback: function callback() {
          return _onDelete(cardData);
        },
        message: "Delete ".concat(cardData.title, " ?"),
        type: 'danger'
      });
    },
    iconName: "fas fa-trash-alt",
    buttonType: "borderless-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: converter.makeHtml(markdownTexts.split('<!--more-->')[0])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })));
};

PortfolioCard.propTypes = {
  cardData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(_utils_propTypesShapes__WEBPACK_IMPORTED_MODULE_5__["fileDataShape"]),
  onOpenMarkDownEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  loadModalData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
PortfolioCard.defaultProps = {
  cardData: {},
  onOpenMarkDownEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  loadModalData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (PortfolioCard);

/***/ }),

/***/ "./src/containers/Home.js":
/*!********************************!*\
  !*** ./src/containers/Home.js ***!
  \********************************/
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
/* harmony import */ var _styles_Home_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.scss */ "./src/styles/Home.scss");
/* harmony import */ var _styles_Home_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MarkDownForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MarkDownForm */ "./src/components/MarkDownForm.js");
/* harmony import */ var _components_ButtonIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ButtonIcon */ "./src/components/ButtonIcon.js");
/* harmony import */ var _components_HtmlParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HtmlParser */ "./src/components/HtmlParser.js");
/* harmony import */ var _components_PortfolioCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PortfolioCard */ "./src/components/PortfolioCard.js");
/* harmony import */ var _utils_propTypesShapes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/propTypesShapes */ "./src/utils/propTypesShapes.js");
/* harmony import */ var _components_Particles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Particles */ "./src/components/Particles.js");
var _jsxFileName = "/Users/phongtlam/Working/next-app/src/containers/Home.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.state = {
      isOpenMarkDownEdit: false
    };
    _this._onOpenMarkDownEdit = _this._onOpenMarkDownEdit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Home, [{
    key: "_onOpenMarkDownEdit",
    value: function _onOpenMarkDownEdit(isOpen) {
      this.setState({
        isOpenMarkDownEdit: isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          appData = _this$props.appData,
          className = _this$props.className;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('App-Home', className),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Particles__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), appData.map(function (datum) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PortfolioCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: datum._id,
          cardData: datum,
          onOpenMarkDownEdit: _this2._onOpenMarkDownEdit,
          loadModalData: _this2.props.loadModalData,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        });
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Home, "propTypes", {
  appData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape(_utils_propTypesShapes__WEBPACK_IMPORTED_MODULE_8__["fileDataShape"])),
  setHtml: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  loadModalData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
});

_defineProperty(Home, "defaultProps", {
  appData: [],
  setHtml: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  className: null,
  loadModalData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
});

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
    href: "/",
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
      key: route.linkTo,
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "route-button",
      type: "button",
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
      lineNumber: 49
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

/***/ "./src/hocs/AppHOC.js":
/*!****************************!*\
  !*** ./src/hocs/AppHOC.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/SideBar */ "./src/containers/SideBar.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetch */ "./src/utils/fetch.js");
/* harmony import */ var _styles_App_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/App.scss */ "./src/styles/App.scss");
/* harmony import */ var _styles_App_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_App_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal */ "./src/components/Modal.js");
var _jsxFileName = "/Users/phongtlam/Working/next-app/src/hocs/AppHOC.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var INITIAL_MODAL_DATA = {
  isOpen: false,
  message: '',
  confirmText: 'Confirm',
  rejectText: 'Cancel',
  callback: null,
  type: 'primary'
};

var AppHOC = function AppHOC(WrappedComponent, componentType) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.state = {
          portfolioData: [],
          blogData: [],
          modalData: INITIAL_MODAL_DATA
        };
        _this._setHtml = _this._setHtml.bind(_assertThisInitialized(_assertThisInitialized(_this)));
        _this._loadModalData = _this._loadModalData.bind(_assertThisInitialized(_assertThisInitialized(_this)));
        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          Promise.all([Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_3__["fetchAll"])('portfolio'), Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_3__["fetchAll"])('post')]).then(function (responseArray) {
            _this2.setState({
              portfolioData: responseArray[0].sort(function (a, b) {
                return a.order < b.order;
              }),
              blogData: responseArray[1]
            });
          });
        }
      }, {
        key: "_loadModalData",
        value: function _loadModalData(_ref) {
          var _this3 = this;

          var callback = _ref.callback,
              cancelCallback = _ref.cancelCallback,
              otherProps = _objectWithoutProperties(_ref, ["callback", "cancelCallback"]);

          this.setState({
            modalData: _objectSpread({}, INITIAL_MODAL_DATA, {
              isOpen: true,
              resolver: function resolver() {
                return Promise.resolve(callback()).then(function (res) {
                  _this3.setState(function (prevState) {
                    return {
                      modalData: INITIAL_MODAL_DATA,
                      portfolioData: res.portfolio ? prevState.portfolioData.filter(function (el) {
                        return el._id !== res._id;
                      }) : prevState.portfolioData,
                      blogData: res.blog ? prevState.blogData.filter(function (el) {
                        return el._id !== res._id;
                      }) : prevState.blogData
                    };
                  });
                });
              },
              rejecter: function rejecter() {
                if (cancelCallback) {
                  cancelCallback();
                }

                _this3.setState({
                  modalData: INITIAL_MODAL_DATA
                });
              }
            }, otherProps)
          });
        }
      }, {
        key: "_setHtml",
        value: function _setHtml(type, htmlsData) {
          var editMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var htmlType = type === 'portfolio' ? 'portfolioData' : 'blogData';

          if (editMode) {
            var indexToReplace = this.state[htmlType].findIndex(function (el) {
              return el._id === htmlsData._id;
            });
            this.setState(function (prevState) {
              return _defineProperty({}, htmlType, _toConsumableArray(prevState[htmlType].slice(0, indexToReplace)).concat([htmlsData], _toConsumableArray(prevState[htmlType].slice(indexToReplace + 1))).sort(function (a, b) {
                return a.order < b.order;
              }));
            });
          } else {
            this.setState(function (prevState) {
              return _defineProperty({}, htmlType, prevState[htmlType].concat(htmlsData).sort(function (a, b) {
                return a.order < b.order;
              }));
            });
          }
        }
      }, {
        key: "_injectComponentProps",
        value: function _injectComponentProps(type) {
          var dataProps = {
            setHtml: this._setHtml,
            loadModalData: this._loadModalData,
            appData: {}
          };

          switch (type) {
            case 'home':
              dataProps.appData = this.state.portfolioData;
              break;

            case 'blog':
              dataProps.appData = this.state.blogData;
              break;

            default:
              dataProps = {};
          }

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({}, dataProps, {
            className: "App-content-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }));
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
            rel: "stylesheet",
            href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css",
            integrity: "sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz",
            crossOrigin: "anonymous",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "App",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
            modalData: this.state.modalData,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "App-sidebar-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          }), this._injectComponentProps(componentType)));
        }
      }]);

      return _class;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (AppHOC);

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

/***/ "./src/styles/Home.scss":
/*!******************************!*\
  !*** ./src/styles/Home.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/HtmlParser.scss":
/*!************************************!*\
  !*** ./src/styles/HtmlParser.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/MarkDownForm.scss":
/*!**************************************!*\
  !*** ./src/styles/MarkDownForm.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/Modal.scss":
/*!*******************************!*\
  !*** ./src/styles/Modal.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/Particles.scss":
/*!***********************************!*\
  !*** ./src/styles/Particles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/PortfolioCard.scss":
/*!***************************************!*\
  !*** ./src/styles/PortfolioCard.scss ***!
  \***************************************/
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

/***/ "./src/urls.js":
/*!*********************!*\
  !*** ./src/urls.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  nodeServer:  true ? 'http://localhost:3001' : undefined,
  database:  true ? 'mongodb://localhost:27017/my-blog' : undefined
};

/***/ }),

/***/ "./src/utils/fetch.js":
/*!****************************!*\
  !*** ./src/utils/fetch.js ***!
  \****************************/
/*! exports provided: api, stageFile, publishFile, editFile, fetchAll, deleteFile, logIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stageFile", function() { return stageFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishFile", function() { return publishFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editFile", function() { return editFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAll", function() { return fetchAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFile", function() { return deleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIn", function() { return logIn; });
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../urls */ "./src/urls.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_urls__WEBPACK_IMPORTED_MODULE_0__);
/* global fetch */

var api = function api(body, method, route) {
  return new Promise(function (resolve, reject) {
    fetch("".concat(_urls__WEBPACK_IMPORTED_MODULE_0___default.a.nodeServer).concat(route), {
      headers: {
        'Content-Type': 'application/json'
      },
      method: method,
      body: body ? JSON.stringify(body) : null
    }).then(function (res) {
      return resolve(res.json());
    }).catch(function (error) {
      return reject(error);
    });
  });
};

var postApi = function postApi(body, route) {
  return api(body, 'POST', route);
};

var getApi = function getApi(route) {
  return api(null, 'GET', route);
};

var putApi = function putApi(body, route) {
  return api(body, 'PUT', route);
};

var deleteApi = function deleteApi(body, route) {
  return api(body, 'DELETE', route);
};

var stageFile = function stageFile(body, type) {
  return postApi(body, "/".concat(type, "/stage"));
};
var publishFile = function publishFile(body, type) {
  return postApi(body, "/".concat(type, "/publish"));
};
var editFile = function editFile(body, type) {
  return putApi(body, "/".concat(type, "/edit"));
};
var fetchAll = function fetchAll(type) {
  return getApi("/".concat(type, "/all"));
};
var deleteFile = function deleteFile(body, type) {
  return deleteApi(body, "/".concat(type, "/delete"));
};
var logIn = function logIn(body, queryString) {
  return postApi(body, "/login".concat(queryString));
};

/***/ }),

/***/ "./src/utils/propTypesShapes.js":
/*!**************************************!*\
  !*** ./src/utils/propTypesShapes.js ***!
  \**************************************/
/*! exports provided: fileDataShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileDataShape", function() { return fileDataShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
 // eslint-disable-next-line

var fileDataShape = {
  coverImgUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  markdownTexts: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  date: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  _id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  __v: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "showdown":
/*!***************************!*\
  !*** external "showdown" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("showdown");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map