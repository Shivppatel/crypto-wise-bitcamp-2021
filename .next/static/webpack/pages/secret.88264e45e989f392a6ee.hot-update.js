webpackHotUpdate_N_E("pages/secret",{

/***/ "./pages/secret.js":
/*!*************************!*\
  !*** ./pages/secret.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_shivpatel_Desktop_Programming_Hackathon_crypto_wise_bitcamp_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_shivpatel_Desktop_Programming_Hackathon_crypto_wise_bitcamp_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_shivpatel_Desktop_Programming_Hackathon_crypto_wise_bitcamp_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_shivpatel_Desktop_Programming_Hackathon_crypto_wise_bitcamp_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_shivpatel_Desktop_Programming_Hackathon_crypto_wise_bitcamp_2021_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/client.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/home/shivpatel/Desktop/Programming/Hackathon/crypto-wise-bitcamp-2021/pages/secret.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Secret() {\n  _s();\n\n  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_5__[\"useSession\"])(),\n      _useSession2 = Object(_home_shivpatel_Desktop_Programming_Hackathon_crypto_wise_bitcamp_2021_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      content = _useState[0],\n      setContent = _useState[1];\n\n  useEffect(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = Object(_home_shivpatel_Desktop_Programming_Hackathon_crypto_wise_bitcamp_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_shivpatel_Desktop_Programming_Hackathon_crypto_wise_bitcamp_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var res, json;\n        return _home_shivpatel_Desktop_Programming_Hackathon_crypto_wise_bitcamp_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('/api/secret');\n\n              case 2:\n                res = _context.sent;\n                _context.next = 5;\n                return res.json();\n\n              case 5:\n                json = _context.sent;\n\n                if (json.content) {\n                  setContent(json.content);\n                }\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, [session]);\n  if ( true && loading) return null;\n\n  if (!session) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"You aren't signed in, please sign in first\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Protected Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Secret, \"NL+tKmta4AvhR2mh4Ks/y/I/Bfk=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_5__[\"useSession\"]];\n});\n\n_c = Secret;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Secret);\n\nvar _c;\n\n$RefreshReg$(_c, \"Secret\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VjcmV0LmpzP2E2MGYiXSwibmFtZXMiOlsiU2VjcmV0IiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwidXNlU3RhdGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImZldGNoIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLG9CQUNXQyxtRUFBVSxFQURyQjtBQUFBO0FBQUEsTUFDVEMsT0FEUztBQUFBLE1BQ0FDLE9BREE7O0FBQUEsa0JBRWNDLHNEQUFRLEVBRnRCO0FBQUEsTUFFVEMsT0FGUztBQUFBLE1BRUFDLFVBRkE7O0FBSWhCQyxXQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVM7QUFBQSx3V0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNFQyxLQUFLLENBQUMsYUFBRCxDQURQOztBQUFBO0FBQ1ZDLG1CQURVO0FBQUE7QUFBQSx1QkFFR0EsR0FBRyxDQUFDQyxJQUFKLEVBRkg7O0FBQUE7QUFFVkEsb0JBRlU7O0FBSWhCLG9CQUFJQSxJQUFJLENBQUNOLE9BQVQsRUFBa0I7QUFDaEJDLDRCQUFVLENBQUNLLElBQUksQ0FBQ04sT0FBTixDQUFWO0FBQ0Q7O0FBTmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEcsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQVFBQSxhQUFTO0FBQ1YsR0FWUSxFQVVOLENBQUNOLE9BQUQsQ0FWTSxDQUFUO0FBWUEsTUFBSSxTQUFpQ0MsT0FBckMsRUFBOEMsT0FBTyxJQUFQOztBQUU5QyxNQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLHdCQUNFO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFPRDs7QUFDRCxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQUlHO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztHQW5DUUwsTTtVQUNvQkMsMkQ7OztLQURwQkQsTTtBQXFDTUEscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zZWNyZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0cyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcblxuZnVuY3Rpb24gU2VjcmV0KCkge1xuICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9zZWNyZXQnKTtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICBpZiAoanNvbi5jb250ZW50KSB7XG4gICAgICAgIHNldENvbnRlbnQoanNvbi5jb250ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbc2Vzc2lvbl0pO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkaW5nKSByZXR1cm4gbnVsbDtcblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPllvdSBhcmVuJ3Qgc2lnbmVkIGluLCBwbGVhc2Ugc2lnbiBpbiBmaXJzdDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Qcm90ZWN0ZWQgUGFnZTwvaDE+XG4gICAgICAgIDxwPntjb250ZW50fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjcmV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/secret.js\n");

/***/ })

})