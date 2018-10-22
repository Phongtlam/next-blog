webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/containers/Home.js":
/*!********************************!*\
  !*** ./src/containers/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
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

/***/ })

})
//# sourceMappingURL=index.js.4be8c6b69e241979ff42.hot-update.js.map