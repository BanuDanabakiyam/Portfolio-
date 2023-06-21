/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_monsterrat___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\pages\\\\_app.js\",\"import\":\"Montserrat\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-mont\"}],\"variableName\":\"monsterrat\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\pages\\\\\\\\_app.js\\\",\\\"import\\\":\\\"Montserrat\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"variable\\\":\\\"--font-mont\\\"}],\\\"variableName\\\":\\\"monsterrat\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_monsterrat___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_monsterrat___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"\".concat((next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_monsterrat___WEBPACK_IMPORTED_MODULE_6___default().variable), \" font-mont bg-light w-full min-h-screen dark:bg-dark\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_NavBar__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {\n                        mode: \"wait\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, router.asPath, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 24,\n                            columnNumber: 34\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFNQTtBQVJ1QjtBQUNZO0FBQ0E7QUFFWjtBQUNtQjtBQUNSO0FBT3pCLFNBQVNNLElBQUksS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFDMUIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLHFCQUNFOzswQkFDQSw4REFBQ0Ysa0RBQUlBOztrQ0FDTCw4REFBQ087d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXRCLDhEQUFDQztnQkFBS0MsV0FBVyxHQUF1QixPQUFwQmpCLHlMQUFtQixFQUFDOztrQ0FDeEMsOERBQUNDLDJEQUFNQTs7Ozs7a0NBQ1AsOERBQUNHLDBEQUFlQTt3QkFBQ2UsTUFBSztrQ0FBTyw0RUFBQ1o7NEJBQStCLEdBQUdDLFNBQVM7MkJBQTVCQyxPQUFPVyxNQUFNOzs7Ozs7Ozs7O2tDQUUxRCw4REFBQ2xCLDBEQUFNQTs7Ozs7Ozs7Ozs7OztBQUlYLENBQUM7R0FoQnVCSTs7UUFDUEQsa0RBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJ0AvY29tcG9uZW50cy9OYXZCYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgeyBNb250c2VycmF0IH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IG1vbnN0ZXJyYXQgPSBNb250c2VycmF0KHtcclxuICBzdWJzZXRzOlsnbGF0aW4nXSxcclxuICB2YXJpYWJsZTonLS1mb250LW1vbnQnXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxtYWluIGNsYXNzTmFtZT17YCR7bW9uc3RlcnJhdC52YXJpYWJsZX0gZm9udC1tb250IGJnLWxpZ2h0IHctZnVsbCBtaW4taC1zY3JlZW4gZGFyazpiZy1kYXJrYH0+XHJcbiAgICA8TmF2QmFyLz5cclxuICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT0nd2FpdCc+PENvbXBvbmVudCBrZXk9e3JvdXRlci5hc1BhdGh9IHsuLi5wYWdlUHJvcHN9IC8+PC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICBcclxuICAgIDxGb290ZXIvPlxyXG4gICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25zdGVycmF0IiwiTmF2QmFyIiwiRm9vdGVyIiwiSGVhZCIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVJvdXRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsInZhcmlhYmxlIiwibW9kZSIsImFzUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});