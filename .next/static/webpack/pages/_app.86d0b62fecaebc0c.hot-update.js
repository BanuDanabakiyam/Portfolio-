"use strict";
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5\\n        group-hover:w-full transition-[width] ease duration-300\\n        \".concat(router.asPath === href ? \"w-full\" : \"w-0\", \"\\n        dark:bg-light\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \" flex-col justify-center items-center hidden lg-flex\",\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  \".concat(isOpen ? \"rotate-45 translate-y-1\" : \"-translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  \".concat(isOpen ? \"-rotate-45 -translate-y-1\" : \"translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                c: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/\",\n                                title: \"Home\",\n                                className: \"mr-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 45,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/about\",\n                                title: \"About\",\n                                className: \"mx-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 46,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/projects\",\n                                title: \"Projects\",\n                                className: \"mx-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 47,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/articles\",\n                                title: \"Articles\",\n                                className: \"ml-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 48,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex items-center justify-center flex-wrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"http://twitter.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -4\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-6 mx-3 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TiwtterIcon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 127\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 54,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"http://twitter.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -4\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-6 mx-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 126\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 55,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"http://twitter.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -4\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-6 ml-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 126\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 56,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                                className: \"ml-3 flex items-center justify-center rounded-full p-1\\n       \".concat(mode === \"light\" ? \"bg-dark text-light\" : \"bg-light text-dark\", \"\\n       \"),\n                                children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                                    className: \"fill-dark\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                                    className: \"fill-dark\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 59\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 60,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 53,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                    lineNumber: 77,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 76,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(NavBar, \"Y4a24yTOUdBm5nAgf2nZ+yB/cXQ=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXOzs7Ozs2Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRbkcsOERBQUNhO2dCQUFJYixXQUFVOzBCQUNmLDRFQUFDWiw2Q0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVDtJQXRETWdCOztRQUNzQlIsK0RBQWlCQTs7O01BRHZDUTtBQXVETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanM/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdW5JY29uIH0gZnJvbSBcIi4vSWNvbnNcIjtcclxuaW1wb3J0IHsgTW9vbkljb24gfSBmcm9tIFwiLi9JY29uc1wiO1xyXG5pbXBvcnQge1Rpd3R0ZXJJY29uLEdpdGh1Ykljb24sTGlua2VkSW5JY29ufSBmcm9tIFwiLi9JY29uc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgdXNlVGhlbWVyU3dpdGNoZXIgZnJvbSBcIi4vaG9va3MvdXNlVGhlbWVTd2l0Y2hlclwiO1xyXG5cclxuXHJcbmNvbnN0IEN1c3RvbUxpbmsgPSAoe2hyZWYsIHRpdGxlLCBjbGFzc05hbWU9XCJcIn0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcmVsYXRpdmUgZ3JvdXBgfT57dGl0bGV9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaC1bMXB4XSBpbmxpbmUtYmxvY2sgIGJnLWRhcmsgYWJzb2x1dGUgbGVmdC0wIC1ib3R0b20tMC41XHJcbiAgICAgICAgZ3JvdXAtaG92ZXI6dy1mdWxsIHRyYW5zaXRpb24tW3dpZHRoXSBlYXNlIGR1cmF0aW9uLTMwMFxyXG4gICAgICAgICR7cm91dGVyLmFzUGF0aCA9PT0gaHJlZiA/ICd3LWZ1bGwnIDogJ3ctMCd9XHJcbiAgICAgICAgZGFyazpiZy1saWdodGB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgID4mbmJzcDtcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlVGhlbWVyU3dpdGNoZXIoKTtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgICB9XHJcblxyXG5yZXR1cm4oXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBweC0zMiBweS04IGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBkYXJrOnRleHQtbGlnaHRcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaGlkZGVuIGxnLWZsZXhcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJnLWRhcmsgZGFyazpiZy1saWdodCBibG9jayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy02IHJvdW5kZWQtc20gICR7aXNPcGVuID8gJ3JvdGF0ZS00NSB0cmFuc2xhdGUteS0xJyA6ICctdHJhbnNsYXRlLXktMC41J31gfT48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJnLWRhcmsgZGFyazpiZy1saWdodCBibG9jayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy02IHJvdW5kZWQtc20gbXktMC41ICR7aXNPcGVuID8gJ29wYWNpdHktMCcgOiAnb3BhY2l0eS0xMDAnfWB9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYmctZGFyayBkYXJrOmJnLWxpZ2h0IGJsb2NrIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBoLTAuNSB3LTYgcm91bmRlZC1zbSAgJHtpc09wZW4gPyAnLXJvdGF0ZS00NSAtdHJhbnNsYXRlLXktMScgOiAndHJhbnNsYXRlLXktMC41J31gfT48L3NwYW4+XHJcblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPGRpdiBjPlxyXG4gICAgPG5hdj5cclxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPScvJyB0aXRsZT1cIkhvbWVcIiBjbGFzc05hbWU9J21yLTQnLz5cclxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPScvYWJvdXQnIHRpdGxlPVwiQWJvdXRcIiBjbGFzc05hbWU9XCJteC00XCIvPlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9Jy9wcm9qZWN0cycgdGl0bGU9XCJQcm9qZWN0c1wiIGNsYXNzTmFtZT1cIm14LTRcIi8+XHJcbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj0nL2FydGljbGVzJyB0aXRsZT1cIkFydGljbGVzXCIgY2xhc3NOYW1lPVwibWwtNFwiLz5cclxuXHJcblxyXG4gICAgPC9uYXY+XHJcblxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXBcIj5cclxuICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cDovL3R3aXR0ZXIuY29tXCIgdGFyZ2V0PXtcIl9ibGFua1wifSB3aGlsZUhvdmVyPXt7eTotNH19IHdoaWxlVGFwPXt7c2NhbGU6MC45fX0gY2xhc3NOYW1lPVwidy02IG14LTMgXCI+PFRpd3R0ZXJJY29uLz48L21vdGlvbi5hPlxyXG4gICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwOi8vdHdpdHRlci5jb21cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9IHdoaWxlSG92ZXI9e3t5Oi00fX0gd2hpbGVUYXA9e3tzY2FsZTowLjl9fSBjbGFzc05hbWU9XCJ3LTYgbXgtM1wiPjxHaXRodWJJY29uLz48L21vdGlvbi5hPlxyXG4gICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwOi8vdHdpdHRlci5jb21cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9IHdoaWxlSG92ZXI9e3t5Oi00fX0gd2hpbGVUYXA9e3tzY2FsZTowLjl9fSBjbGFzc05hbWU9XCJ3LTYgbWwtM1wiPjxMaW5rZWRJbkljb24vPjwvbW90aW9uLmE+XHJcbiAgICAgICB7LyogPExpbmsgaHJlZj1cIi9cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9PjxQaW50ZXJlc3RJY29uLz48L0xpbms+XHJcbiAgICAgICA8TGluayBocmVmPVwiL1wiIHRhcmdldD17XCJfYmxhbmtcIn0+PERyaWJiYmxlSWNvbi8+PC9MaW5rPiAgICovfVxyXG5cclxuICAgICAgIDxidXR0b25cclxuICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGUobW9kZSA9PT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpfVxyXG4gICAgICAgY2xhc3NOYW1lPXtgbWwtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgcC0xXHJcbiAgICAgICAke21vZGUgPT09IFwibGlnaHRcIiA/IFwiYmctZGFyayB0ZXh0LWxpZ2h0XCIgOiBcImJnLWxpZ2h0IHRleHQtZGFya1wifVxyXG4gICAgICAgYH1cclxuICAgICAgID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1vZGUgPT09IFwiZGFya1wiID9cclxuICAgICAgICAgICAgPFN1bkljb24gY2xhc3NOYW1lPXtcImZpbGwtZGFya1wifT48L1N1bkljb24+IDogPE1vb25JY29uIGNsYXNzTmFtZT17XCJmaWxsLWRhcmtcIn0+PC9Nb29uSWNvbj5cclxuICAgICAgICB9XHJcbiAgICAgICA8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1MCVdIHRvcC0yIHRyYW5zbGF0ZS14LVstNTAlXVwiPlxyXG4gICAgPExvZ28vPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPC9oZWFkZXI+XHJcbik7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIkxvZ28iLCJ1c2VSb3V0ZXIiLCJTdW5JY29uIiwiTW9vbkljb24iLCJUaXd0dGVySWNvbiIsIkdpdGh1Ykljb24iLCJMaW5rZWRJbkljb24iLCJtb3Rpb24iLCJ1c2VUaGVtZXJTd2l0Y2hlciIsIkN1c3RvbUxpbmsiLCJocmVmIiwidGl0bGUiLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJzcGFuIiwiYXNQYXRoIiwiTmF2QmFyIiwibW9kZSIsInNldE1vZGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJoYW5kbGVDbGljayIsImhlYWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJjIiwibmF2IiwiYSIsInRhcmdldCIsIndoaWxlSG92ZXIiLCJ5Iiwid2hpbGVUYXAiLCJzY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});