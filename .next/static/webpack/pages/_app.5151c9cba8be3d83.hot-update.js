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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5\\n        group-hover:w-full transition-[width] ease duration-300\\n        \".concat(router.asPath === href ? \"w-full\" : \"w-0\", \"\\n        dark:bg-light\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex flex-col justify-center items-center\",\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 \".concat(isopen)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"About\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projects\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/articles\",\n                        title: \"Articles\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"http://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -4\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TiwtterIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 52,\n                            columnNumber: 127\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 52,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"http://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -4\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 53,\n                            columnNumber: 126\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 53,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"http://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -4\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 ml-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 54,\n                            columnNumber: 126\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 54,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                        className: \"ml-3 flex items-center justify-center rounded-full p-1\\n       \".concat(mode === \"light\" ? \"bg-dark text-light\" : \"bg-light text-dark\", \"\\n       \"),\n                        children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 66,\n                            columnNumber: 59\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 58,\n                        columnNumber: 8\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 51,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                    lineNumber: 73,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 72,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(NavBar, \"Y4a24yTOUdBm5nAgf2nZ+yB/cXQ=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UiwrREFBaUJBOzs7TUFEdkNRO0FBbUROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcz82YmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1bkljb24gfSBmcm9tIFwiLi9JY29uc1wiO1xyXG5pbXBvcnQgeyBNb29uSWNvbiB9IGZyb20gXCIuL0ljb25zXCI7XHJcbmltcG9ydCB7VGl3dHRlckljb24sR2l0aHViSWNvbixMaW5rZWRJbkljb259IGZyb20gXCIuL0ljb25zXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB1c2VUaGVtZXJTd2l0Y2hlciBmcm9tIFwiLi9ob29rcy91c2VUaGVtZVN3aXRjaGVyXCI7XHJcblxyXG5cclxuY29uc3QgQ3VzdG9tTGluayA9ICh7aHJlZiwgdGl0bGUsIGNsYXNzTmFtZT1cIlwifSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByZWxhdGl2ZSBncm91cGB9Pnt0aXRsZX1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLVsxcHhdIGlubGluZS1ibG9jayAgYmctZGFyayBhYnNvbHV0ZSBsZWZ0LTAgLWJvdHRvbS0wLjVcclxuICAgICAgICBncm91cC1ob3Zlcjp3LWZ1bGwgdHJhbnNpdGlvbi1bd2lkdGhdIGVhc2UgZHVyYXRpb24tMzAwXHJcbiAgICAgICAgJHtyb3V0ZXIuYXNQYXRoID09PSBocmVmID8gJ3ctZnVsbCcgOiAndy0wJ31cclxuICAgICAgICBkYXJrOmJnLWxpZ2h0YH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgPiZuYnNwO1xyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VUaGVtZXJTd2l0Y2hlcigpO1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgIH1cclxuXHJcbnJldHVybihcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMyIHB5LTggZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGRhcms6dGV4dC1saWdodFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWRhcmsgZGFyazpiZy1saWdodCBibG9jayBoLTAuNSB3LTYgcm91bmRlZC1zbSAtdHJhbnNsYXRlLXktMC41XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy1kYXJrIGRhcms6YmctbGlnaHQgYmxvY2sgaC0wLjUgdy02IHJvdW5kZWQtc20gbXktMC41ICR7aXNvcGVufWB9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZGFyayBkYXJrOmJnLWxpZ2h0IGJsb2NrIGgtMC41IHctNiByb3VuZGVkLXNtIHRyYW5zbGF0ZS15LTAuNVwiPjwvc3Bhbj5cclxuXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8bmF2PlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9Jy8nIHRpdGxlPVwiSG9tZVwiIGNsYXNzTmFtZT0nbXItNCcvPlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9Jy9hYm91dCcgdGl0bGU9XCJBYm91dFwiIGNsYXNzTmFtZT1cIm14LTRcIi8+XHJcbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj0nL3Byb2plY3RzJyB0aXRsZT1cIlByb2plY3RzXCIgY2xhc3NOYW1lPVwibXgtNFwiLz5cclxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPScvYXJ0aWNsZXMnIHRpdGxlPVwiQXJ0aWNsZXNcIiBjbGFzc05hbWU9XCJtbC00XCIvPlxyXG5cclxuXHJcbiAgICA8L25hdj5cclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwXCI+XHJcbiAgICAgICA8bW90aW9uLmEgaHJlZj1cImh0dHA6Ly90d2l0dGVyLmNvbVwiIHRhcmdldD17XCJfYmxhbmtcIn0gd2hpbGVIb3Zlcj17e3k6LTR9fSB3aGlsZVRhcD17e3NjYWxlOjAuOX19IGNsYXNzTmFtZT1cInctNiBteC0zIFwiPjxUaXd0dGVySWNvbi8+PC9tb3Rpb24uYT5cclxuICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cDovL3R3aXR0ZXIuY29tXCIgdGFyZ2V0PXtcIl9ibGFua1wifSB3aGlsZUhvdmVyPXt7eTotNH19IHdoaWxlVGFwPXt7c2NhbGU6MC45fX0gY2xhc3NOYW1lPVwidy02IG14LTNcIj48R2l0aHViSWNvbi8+PC9tb3Rpb24uYT5cclxuICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cDovL3R3aXR0ZXIuY29tXCIgdGFyZ2V0PXtcIl9ibGFua1wifSB3aGlsZUhvdmVyPXt7eTotNH19IHdoaWxlVGFwPXt7c2NhbGU6MC45fX0gY2xhc3NOYW1lPVwidy02IG1sLTNcIj48TGlua2VkSW5JY29uLz48L21vdGlvbi5hPlxyXG4gICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCIgdGFyZ2V0PXtcIl9ibGFua1wifT48UGludGVyZXN0SWNvbi8+PC9MaW5rPlxyXG4gICAgICAgPExpbmsgaHJlZj1cIi9cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9PjxEcmliYmJsZUljb24vPjwvTGluaz4gICAqL31cclxuXHJcbiAgICAgICA8YnV0dG9uXHJcbiAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RlKG1vZGUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiKX1cclxuICAgICAgIGNsYXNzTmFtZT17YG1sLTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIHAtMVxyXG4gICAgICAgJHttb2RlID09PSBcImxpZ2h0XCIgPyBcImJnLWRhcmsgdGV4dC1saWdodFwiIDogXCJiZy1saWdodCB0ZXh0LWRhcmtcIn1cclxuICAgICAgIGB9XHJcbiAgICAgICA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtb2RlID09PSBcImRhcmtcIiA/XHJcbiAgICAgICAgICAgIDxTdW5JY29uIGNsYXNzTmFtZT17XCJmaWxsLWRhcmtcIn0+PC9TdW5JY29uPiA6IDxNb29uSWNvbiBjbGFzc05hbWU9e1wiZmlsbC1kYXJrXCJ9PjwvTW9vbkljb24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgPC9idXR0b24+XHJcblxyXG5cclxuICAgIDwvbmF2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1MCVdIHRvcC0yIHRyYW5zbGF0ZS14LVstNTAlXVwiPlxyXG4gICAgPExvZ28vPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPC9oZWFkZXI+XHJcbik7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIkxvZ28iLCJ1c2VSb3V0ZXIiLCJTdW5JY29uIiwiTW9vbkljb24iLCJUaXd0dGVySWNvbiIsIkdpdGh1Ykljb24iLCJMaW5rZWRJbkljb24iLCJtb3Rpb24iLCJ1c2VUaGVtZXJTd2l0Y2hlciIsIkN1c3RvbUxpbmsiLCJocmVmIiwidGl0bGUiLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJzcGFuIiwiYXNQYXRoIiwiTmF2QmFyIiwibW9kZSIsInNldE1vZGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJoYW5kbGVDbGljayIsImhlYWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpc29wZW4iLCJuYXYiLCJhIiwidGFyZ2V0Iiwid2hpbGVIb3ZlciIsInkiLCJ3aGlsZVRhcCIsInNjYWxlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});