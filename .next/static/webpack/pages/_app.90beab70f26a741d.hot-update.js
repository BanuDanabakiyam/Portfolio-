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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5\\n        group-hover:w-full transition-[width] ease duration-300\\n        \".concat(router.asPath === href ? \"w-full\" : \"w-0\", \"\\n        dark:bg-light\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst CustomMobileLink = (param)=>{\n    let { href , title , className =\"\" , toggle  } = param;\n    _s1();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleClick = ()=>{\n        toggle();\n        router.push(href);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        onClick: handleClick,\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5\\n        group-hover:w-full transition-[width] ease duration-300\\n        \".concat(router.asPath === href ? \"w-full\" : \"w-0\", \"\\n        dark:bg-light\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(CustomMobileLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c1 = CustomMobileLink;\nconst NavBar = ()=>{\n    _s2();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \" flex-col justify-center items-center hidden lg-flex\",\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  \".concat(isOpen ? \"rotate-45 translate-y-1\" : \"-translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  \".concat(isOpen ? \"-rotate-45 -translate-y-1\" : \"translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-between  items-center lg:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/\",\n                                title: \"Home\",\n                                className: \"mr-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 66,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/about\",\n                                title: \"About\",\n                                className: \"mx-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 67,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/projects\",\n                                title: \"Projects\",\n                                className: \"mx-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/articles\",\n                                title: \"Articles\",\n                                className: \"ml-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 69,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 65,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex items-center justify-center flex-wrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"http://twitter.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -4\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-6 mx-3 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TiwtterIcon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 127\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 75,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"http://twitter.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -4\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-6 mx-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 126\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 76,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"http://twitter.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -4\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-6 ml-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 126\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 77,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                                className: \"ml-3 flex items-center justify-center rounded-full p-1\\n       \".concat(mode === \"light\" ? \"bg-dark text-light\" : \"bg-light text-dark\", \"\\n       \"),\n                                children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                                    className: \"fill-dark\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                                    className: \"fill-dark\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 59\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 81,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 74,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 64,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                    lineNumber: 98,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 97,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s2(NavBar, \"Y4a24yTOUdBm5nAgf2nZ+yB/cXQ=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c2 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"CustomMobileLink\");\n$RefreshReg$(_c2, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixXQUFVOzBDQUFXLDRFQUFDUCw4Q0FBVUE7Ozs7Ozs7Ozs7MENBQ2pJLDhEQUFDRSxtREFBUTtnQ0FBQ0csTUFBSztnQ0FBcUJxQixRQUFRO2dDQUFVQyxZQUFZO29DQUFDQyxHQUFFLENBQUM7Z0NBQUM7Z0NBQUdDLFVBQVU7b0NBQUNDLE9BQU07Z0NBQUc7Z0NBQUd2QixXQUFVOzBDQUFXLDRFQUFDTixnREFBWUE7Ozs7Ozs7Ozs7MENBSW5JLDhEQUFDYztnQ0FDREMsU0FBUyxJQUFNRyxRQUFRRCxTQUFTLFVBQVUsU0FBUyxPQUFPO2dDQUMxRFgsV0FBVyxrRUFDc0QsT0FBL0RXLFNBQVMsVUFBVSx1QkFBdUIsb0JBQW9CLEVBQUM7MENBSTVEQSxTQUFTLHVCQUNULDhEQUFDckIsMkNBQU9BO29DQUFDVSxXQUFXOzs7Ozs4REFBMEIsOERBQUNULDRDQUFRQTtvQ0FBQ1MsV0FBVzs7Ozs7NkNBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUW5HLDhEQUFDZ0I7Z0JBQUloQixXQUFVOzBCQUNmLDRFQUFDWiw2Q0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVDtJQXRETXNCOztRQUNzQmQsK0RBQWlCQTs7O01BRHZDYztBQXVETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanM/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdW5JY29uIH0gZnJvbSBcIi4vSWNvbnNcIjtcclxuaW1wb3J0IHsgTW9vbkljb24gfSBmcm9tIFwiLi9JY29uc1wiO1xyXG5pbXBvcnQge1Rpd3R0ZXJJY29uLEdpdGh1Ykljb24sTGlua2VkSW5JY29ufSBmcm9tIFwiLi9JY29uc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgdXNlVGhlbWVyU3dpdGNoZXIgZnJvbSBcIi4vaG9va3MvdXNlVGhlbWVTd2l0Y2hlclwiO1xyXG5cclxuXHJcbmNvbnN0IEN1c3RvbUxpbmsgPSAoe2hyZWYsIHRpdGxlLCBjbGFzc05hbWU9XCJcIn0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcmVsYXRpdmUgZ3JvdXBgfT57dGl0bGV9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaC1bMXB4XSBpbmxpbmUtYmxvY2sgIGJnLWRhcmsgYWJzb2x1dGUgbGVmdC0wIC1ib3R0b20tMC41XHJcbiAgICAgICAgZ3JvdXAtaG92ZXI6dy1mdWxsIHRyYW5zaXRpb24tW3dpZHRoXSBlYXNlIGR1cmF0aW9uLTMwMFxyXG4gICAgICAgICR7cm91dGVyLmFzUGF0aCA9PT0gaHJlZiA/ICd3LWZ1bGwnIDogJ3ctMCd9XHJcbiAgICAgICAgZGFyazpiZy1saWdodGB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgID4mbmJzcDtcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxufVxyXG5jb25zdCBDdXN0b21Nb2JpbGVMaW5rID0gKHtocmVmLCB0aXRsZSwgY2xhc3NOYW1lPVwiXCIsIHRvZ2dsZX0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRvZ2dsZSgpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGhyZWYpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxidXR0b24gaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHJlbGF0aXZlIGdyb3VwYCB9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57dGl0bGV9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaC1bMXB4XSBpbmxpbmUtYmxvY2sgIGJnLWRhcmsgYWJzb2x1dGUgbGVmdC0wIC1ib3R0b20tMC41XHJcbiAgICAgICAgZ3JvdXAtaG92ZXI6dy1mdWxsIHRyYW5zaXRpb24tW3dpZHRoXSBlYXNlIGR1cmF0aW9uLTMwMFxyXG4gICAgICAgICR7cm91dGVyLmFzUGF0aCA9PT0gaHJlZiA/ICd3LWZ1bGwnIDogJ3ctMCd9XHJcbiAgICAgICAgZGFyazpiZy1saWdodGB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgID4mbmJzcDtcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlVGhlbWVyU3dpdGNoZXIoKTtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgICB9XHJcblxyXG5yZXR1cm4oXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBweC0zMiBweS04IGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBkYXJrOnRleHQtbGlnaHQgcmVsYXRpdmUgXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGhpZGRlbiBsZy1mbGV4XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy1kYXJrIGRhcms6YmctbGlnaHQgYmxvY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IGgtMC41IHctNiByb3VuZGVkLXNtICAke2lzT3BlbiA/ICdyb3RhdGUtNDUgdHJhbnNsYXRlLXktMScgOiAnLXRyYW5zbGF0ZS15LTAuNSd9YH0+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy1kYXJrIGRhcms6YmctbGlnaHQgYmxvY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IGgtMC41IHctNiByb3VuZGVkLXNtIG15LTAuNSAke2lzT3BlbiA/ICdvcGFjaXR5LTAnIDogJ29wYWNpdHktMTAwJ31gfT48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJnLWRhcmsgZGFyazpiZy1saWdodCBibG9jayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy02IHJvdW5kZWQtc20gICR7aXNPcGVuID8gJy1yb3RhdGUtNDUgLXRyYW5zbGF0ZS15LTEnIDogJ3RyYW5zbGF0ZS15LTAuNSd9YH0+PC9zcGFuPlxyXG5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuICBpdGVtcy1jZW50ZXIgbGc6aGlkZGVuXCI+XHJcbiAgICA8bmF2PlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9Jy8nIHRpdGxlPVwiSG9tZVwiIGNsYXNzTmFtZT0nbXItNCcvPlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9Jy9hYm91dCcgdGl0bGU9XCJBYm91dFwiIGNsYXNzTmFtZT1cIm14LTRcIi8+XHJcbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj0nL3Byb2plY3RzJyB0aXRsZT1cIlByb2plY3RzXCIgY2xhc3NOYW1lPVwibXgtNFwiLz5cclxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPScvYXJ0aWNsZXMnIHRpdGxlPVwiQXJ0aWNsZXNcIiBjbGFzc05hbWU9XCJtbC00XCIvPlxyXG5cclxuXHJcbiAgICA8L25hdj5cclxuXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwOi8vdHdpdHRlci5jb21cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9IHdoaWxlSG92ZXI9e3t5Oi00fX0gd2hpbGVUYXA9e3tzY2FsZTowLjl9fSBjbGFzc05hbWU9XCJ3LTYgbXgtMyBcIj48VGl3dHRlckljb24vPjwvbW90aW9uLmE+XHJcbiAgICAgICA8bW90aW9uLmEgaHJlZj1cImh0dHA6Ly90d2l0dGVyLmNvbVwiIHRhcmdldD17XCJfYmxhbmtcIn0gd2hpbGVIb3Zlcj17e3k6LTR9fSB3aGlsZVRhcD17e3NjYWxlOjAuOX19IGNsYXNzTmFtZT1cInctNiBteC0zXCI+PEdpdGh1Ykljb24vPjwvbW90aW9uLmE+XHJcbiAgICAgICA8bW90aW9uLmEgaHJlZj1cImh0dHA6Ly90d2l0dGVyLmNvbVwiIHRhcmdldD17XCJfYmxhbmtcIn0gd2hpbGVIb3Zlcj17e3k6LTR9fSB3aGlsZVRhcD17e3NjYWxlOjAuOX19IGNsYXNzTmFtZT1cInctNiBtbC0zXCI+PExpbmtlZEluSWNvbi8+PC9tb3Rpb24uYT5cclxuICAgICAgIHsvKiA8TGluayBocmVmPVwiL1wiIHRhcmdldD17XCJfYmxhbmtcIn0+PFBpbnRlcmVzdEljb24vPjwvTGluaz5cclxuICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgdGFyZ2V0PXtcIl9ibGFua1wifT48RHJpYmJibGVJY29uLz48L0xpbms+ICAgKi99XHJcblxyXG4gICAgICAgPGJ1dHRvblxyXG4gICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kZShtb2RlID09PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIil9XHJcbiAgICAgICBjbGFzc05hbWU9e2BtbC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBwLTFcclxuICAgICAgICR7bW9kZSA9PT0gXCJsaWdodFwiID8gXCJiZy1kYXJrIHRleHQtbGlnaHRcIiA6IFwiYmctbGlnaHQgdGV4dC1kYXJrXCJ9XHJcbiAgICAgICBgfVxyXG4gICAgICAgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbW9kZSA9PT0gXCJkYXJrXCIgP1xyXG4gICAgICAgICAgICA8U3VuSWNvbiBjbGFzc05hbWU9e1wiZmlsbC1kYXJrXCJ9PjwvU3VuSWNvbj4gOiA8TW9vbkljb24gY2xhc3NOYW1lPXtcImZpbGwtZGFya1wifT48L01vb25JY29uPlxyXG4gICAgICAgIH1cclxuICAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICAge31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1bNTAlXSB0b3AtMiB0cmFuc2xhdGUteC1bLTUwJV1cIj5cclxuICAgIDxMb2dvLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwvaGVhZGVyPlxyXG4pO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJMb2dvIiwidXNlUm91dGVyIiwiU3VuSWNvbiIsIk1vb25JY29uIiwiVGl3dHRlckljb24iLCJHaXRodWJJY29uIiwiTGlua2VkSW5JY29uIiwibW90aW9uIiwidXNlVGhlbWVyU3dpdGNoZXIiLCJDdXN0b21MaW5rIiwiaHJlZiIsInRpdGxlIiwiY2xhc3NOYW1lIiwicm91dGVyIiwic3BhbiIsImFzUGF0aCIsIkN1c3RvbU1vYmlsZUxpbmsiLCJ0b2dnbGUiLCJoYW5kbGVDbGljayIsInB1c2giLCJidXR0b24iLCJvbkNsaWNrIiwiTmF2QmFyIiwibW9kZSIsInNldE1vZGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJoZWFkZXIiLCJkaXYiLCJuYXYiLCJhIiwidGFyZ2V0Iiwid2hpbGVIb3ZlciIsInkiLCJ3aGlsZVRhcCIsInNjYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});