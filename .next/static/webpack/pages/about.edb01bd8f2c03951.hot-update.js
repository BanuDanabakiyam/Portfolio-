"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/components/AnimatedText.js":
/*!****************************************!*\
  !*** ./src/components/AnimatedText.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst quote = {\n    initial: {\n        opacity: 1\n    },\n    animate: {\n        opacity: 1,\n        transition: {\n            delay: 0.5,\n            straggerChildren: 0.08\n        }\n    }\n};\nconst singleWord = {\n    initial: {\n        opacity: 0,\n        y: 50\n    },\n    animate: {\n        opacity: 1,\n        y: 1,\n        transition: {\n            duration: 1\n        }\n    }\n};\nconst AnimatedText = (param)=>{\n    let { text , className =\"\"  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0 dark:tetx-lig\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: \"inline-block w-full text-dark  font-bold capitalize text-8xl dark:text-light \".concat(className),\n            variants: quote,\n            initial: \"initial\",\n            animate: \"animate\",\n            children: text.split(\" \").map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block\",\n                    variants: singleWord,\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, word + \"-\" + index, true, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\AnimatedText.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\AnimatedText.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\AnimatedText.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_c = AnimatedText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedText);\nvar _c;\n$RefreshReg$(_c, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNhO0FBQ3ZDLE1BQU1FLFFBQVE7SUFDVkMsU0FBUTtRQUNKQyxTQUFRO0lBQ1o7SUFDQUMsU0FBUTtRQUNKRCxTQUFRO1FBQ1JFLFlBQVc7WUFDUEMsT0FBTTtZQUNOQyxrQkFBaUI7UUFDckI7SUFDSjtBQUNKO0FBQ0EsTUFBTUMsYUFBYTtJQUNmTixTQUFRO1FBQ0pDLFNBQVE7UUFDUk0sR0FBRTtJQUNOO0lBQ0FMLFNBQVE7UUFDSkQsU0FBUTtRQUNSTSxHQUFFO1FBQ0ZKLFlBQVc7WUFDUEssVUFBUztRQUNiO0lBQ0o7QUFDSjtBQUdBLE1BQU1DLGVBQWUsU0FBMEI7UUFBekIsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEdBQUUsRUFBQztJQUN0QyxxQkFDSSw4REFBQ0M7UUFBSUQsV0FBVTtrQkFDWCw0RUFBQ2Isb0RBQVM7WUFBQ2EsV0FBVyxnRkFBMEYsT0FBVkE7WUFDdEdHLFVBQVVmO1lBQ1ZDLFNBQVE7WUFDUkUsU0FBUTtzQkFHSlEsS0FBS0ssS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQyxNQUFLQyxzQkFDMUIsOERBQUNwQixzREFBVztvQkFBc0JhLFdBQVU7b0JBQzVDRyxVQUFVUjs7d0JBQ1JXO3dCQUFLOzttQkFGV0EsT0FBSyxNQUFJQzs7Ozs7Ozs7Ozs7Ozs7O0FBUTNDO0tBbEJNVDtBQW1CTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanM/NGMxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmNvbnN0IHF1b3RlID0ge1xyXG4gICAgaW5pdGlhbDp7XHJcbiAgICAgICAgb3BhY2l0eToxLFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGU6e1xyXG4gICAgICAgIG9wYWNpdHk6MSxcclxuICAgICAgICB0cmFuc2l0aW9uOntcclxuICAgICAgICAgICAgZGVsYXk6MC41LFxyXG4gICAgICAgICAgICBzdHJhZ2dlckNoaWxkcmVuOjAuMDgsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHNpbmdsZVdvcmQgPSB7XHJcbiAgICBpbml0aWFsOntcclxuICAgICAgICBvcGFjaXR5OjAsXHJcbiAgICAgICAgeTo1MCxcclxuICAgIH0sXHJcbiAgICBhbmltYXRlOntcclxuICAgICAgICBvcGFjaXR5OjEsXHJcbiAgICAgICAgeToxLFxyXG4gICAgICAgIHRyYW5zaXRpb246e1xyXG4gICAgICAgICAgICBkdXJhdGlvbjoxLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IEFuaW1hdGVkVGV4dCA9ICh7dGV4dCwgY2xhc3NOYW1lPVwiXCJ9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0byBweS0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIG92ZXJmbG93LWhpZGRlbiBzbTpweS0wIGRhcms6dGV0eC1saWdcIj5cclxuICAgICAgICAgICAgPG1vdGlvbi5oMSBjbGFzc05hbWU9e2BpbmxpbmUtYmxvY2sgdy1mdWxsIHRleHQtZGFyayAgZm9udC1ib2xkIGNhcGl0YWxpemUgdGV4dC04eGwgZGFyazp0ZXh0LWxpZ2h0ICR7Y2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtxdW90ZX1cclxuICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dC5zcGxpdChcIiBcIikubWFwKCh3b3JkLGluZGV4KSA9PiBcclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBrZXk9e3dvcmQrJy0nK2luZGV4fSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3NpbmdsZVdvcmR9XHJcbiAgICAgICAgICAgICAgICA+e3dvcmR9Jm5ic3A7PC9tb3Rpb24uc3Bhbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIDwvbW90aW9uLmgxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRUZXh0OyJdLCJuYW1lcyI6WyJyZWFjdCIsIm1vdGlvbiIsInF1b3RlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5Iiwic3RyYWdnZXJDaGlsZHJlbiIsInNpbmdsZVdvcmQiLCJ5IiwiZHVyYXRpb24iLCJBbmltYXRlZFRleHQiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJ2YXJpYW50cyIsInNwbGl0IiwibWFwIiwid29yZCIsImluZGV4Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n"));

/***/ })

});