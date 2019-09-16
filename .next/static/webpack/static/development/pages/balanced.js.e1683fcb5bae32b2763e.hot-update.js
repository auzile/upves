webpackHotUpdate("static\\development\\pages\\balanced.js",{

/***/ "./pages/balanced.js":
/*!***************************!*\
  !*** ./pages/balanced.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Head_Banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Head_Banner */ "./components/Head_Banner.js");
/* harmony import */ var _components_picRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/picRow */ "./components/picRow.js");
/* harmony import */ var _db_balanced_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../db/balanced.json */ "./db/balanced.json");
var _db_balanced_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/balanced.json */ "./db/balanced.json", 1);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layouts/Layout */ "./layouts/Layout.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "G:\\Documents\\Projects\\upves\\pages\\balanced.js";








var Balanced =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Balanced, _React$Component);

  function Balanced(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Balanced);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Balanced).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Balanced, [{
    key: "iterates",
    value: function iterates() {
      var data = _db_balanced_json__WEBPACK_IMPORTED_MODULE_9__.data;
      data.map(function (item) {
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_picRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = _db_balanced_json__WEBPACK_IMPORTED_MODULE_9__.data;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Head_Banner__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text_1: "BALANCED INVESTMENT",
        text_2: "Less risk, but more profit.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "cardContainer text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, data.map(function (item) {
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "cardContents",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          class: "card-img-top",
          src: item.src,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "card-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, item.title)))));
      })));
    }
  }]);

  return Balanced;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Balanced);

/***/ })

})
//# sourceMappingURL=balanced.js.e1683fcb5bae32b2763e.hot-update.js.map