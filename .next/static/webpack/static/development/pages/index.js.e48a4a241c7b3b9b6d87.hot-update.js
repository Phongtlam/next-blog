webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/hocs/AppHOC.js":
/*!****************************!*\
  !*** ./src/hocs/AppHOC.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
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
            loadModalData: this._loadModalData
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
              lineNumber: 111
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
              lineNumber: 117
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
            rel: "stylesheet",
            href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css",
            integrity: "sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz",
            crossOrigin: "anonymous",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "App",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
            modalData: this.state.modalData,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "App-sidebar-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
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

/***/ })

})
//# sourceMappingURL=index.js.e48a4a241c7b3b9b6d87.hot-update.js.map