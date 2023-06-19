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

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Skills */ \"./src/components/Skills.js\");\n/* harmony import */ var _components_Education__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Education */ \"./src/components/Education.js\");\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Experience */ \"./src/components/Experience.js\");\n/* harmony import */ var _public_images_profile_developer_pic_2_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/profile/developer-pic-2.jpeg */ \"./public/images/profile/developer-pic-2.jpeg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst AnimatedNumbers = (param)=>{\n    let { value  } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)(null);\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue)(0);\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useSpring)(motionValue, {\n        duration: 3000\n    });\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useInView)(ref, {\n        once: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(value);\n        }\n    }, [\n        isInView,\n        value,\n        motionValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        springValue.on(\"change\", (latest)=>{\n            if (ref.current && latest.toFixed(0) <= value) {\n                ref.current.textContent = latest.toFixed(0);\n            }\n        });\n    }, [\n        springValue,\n        value\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n        lineNumber: 32,\n        columnNumber: 12\n    }, undefined);\n};\n_s(AnimatedNumbers, \"b8aj1/ahv2yZpM7Evi2PhhKh64k=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useInView\n    ];\n});\n_c = AnimatedNumbers;\nconst about = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CodeBucks | About Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items-center justify-center dark:text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            text: \"Passion Fuels Purpose!\",\n                            className: \"mb-12\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-cols-8 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 flex flex-col items-start justify-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"mb-4 text-lg font-bold uppercase text-dark/75\",\n                                            children: \"Biography\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 1\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-medium\",\n                                            children: \"I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 1\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 1\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-li\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 4\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                            src: _public_images_profile_developer_pic_2_jpeg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                            alt: \"codebuck\",\n                                            className: \"w-full h-auto rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 4\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 1\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2 flex flex-col items-end justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 50\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 13\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 9\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75 dark:text-light\",\n                                                    children: \"satisfied clients\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 9\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 5\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 40\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 13\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 9\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75 dark:text-light\",\n                                                    children: \"projects completed\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 9\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 5\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 4\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 13\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 9\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75 dark:text-light\",\n                                                    children: \"years of experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 9\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 5\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 4\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                            lineNumber: 86,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Education__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                            lineNumber: 88,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\nvar _c;\n$RefreshReg$(_c, \"AnimatedNumbers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1k7QUFDQTtBQUNNO0FBQ007QUFDSjtBQUN5QjtBQUNwQjtBQUN2QjtBQUN5QztBQUN4RSxNQUFNZ0Isa0JBQWtCLFNBQWE7UUFBWixFQUFDQyxNQUFLLEVBQUM7O0lBQzVCLE1BQU1DLE1BQU1SLDZDQUFNQSxDQUFDLElBQUk7SUFDdkIsTUFBTVMsY0FBY0wsOERBQWNBLENBQUM7SUFDbkMsTUFBTU0sY0FBY0wseURBQVNBLENBQUNJLGFBQVk7UUFBQ0UsVUFBVTtJQUFJO0lBQ3pELE1BQU1DLFdBQVdULHlEQUFTQSxDQUFDSyxLQUFJO1FBQUNLLE1BQUssSUFBSTtJQUFBO0lBRXpDZCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2hCLElBQUdhLFVBQVM7WUFDUkgsWUFBWUssR0FBRyxDQUFDUDtRQUNwQixDQUFDO0lBQ0QsR0FBRTtRQUFDSztRQUFTTDtRQUFNRTtLQUFZO0lBRTlCVixnREFBU0EsQ0FBQyxJQUFNO1FBQ1pXLFlBQVlLLEVBQUUsQ0FBQyxVQUFTLENBQUNDLFNBQVc7WUFDaEMsSUFBR1IsSUFBSVMsT0FBTyxJQUFJRCxPQUFPRSxPQUFPLENBQUMsTUFBTVgsT0FBTTtnQkFDekNDLElBQUlTLE9BQU8sQ0FBQ0UsV0FBVyxHQUFHSCxPQUFPRSxPQUFPLENBQUM7WUFDN0MsQ0FBQztRQUNMO0lBQ0osR0FBRTtRQUFDUjtRQUFZSDtLQUFNO0lBR3JCLHFCQUFPLDhEQUFDYTtRQUFLWixLQUFLQTs7Ozs7O0FBQ3RCO0dBdEJNRjs7UUFFa0JGLDBEQUFjQTtRQUNkQyxxREFBU0E7UUFDWkYscURBQVNBOzs7S0FKeEJHO0FBd0JOLE1BQU1lLFFBQVEsSUFBTTtJQUNoQixxQkFDRzs7MEJBQ0MsOERBQUMvQixrREFBSUE7O2tDQUNELDhEQUFDZ0M7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFckMsOERBQUNDO2dCQUFLQyxXQUFVOzBCQUNaLDRFQUFDcEMsMERBQU1BO29CQUFDb0MsV0FBVTs7c0NBQ2QsOERBQUNqQyxnRUFBWUE7NEJBQUNrQyxNQUFLOzRCQUF5QkQsV0FBVTs7Ozs7O3NDQUMxRCw4REFBQ0U7NEJBQUlGLFdBQVU7OzhDQUNYLDhEQUFDRTtvQ0FBSUYsV0FBVTs7c0RBQ1gsOERBQUNHOzRDQUFHSCxXQUFVO3NEQUFnRDs7Ozs7O3NEQUNsRiw4REFBQ0k7NENBQUVKLFdBQVU7c0RBQWM7Ozs7OztzREFLM0IsOERBQUNJOzRDQUFFSixXQUFVO3NEQUFtQjs7Ozs7O3NEQUloQyw4REFBQ0k7NENBQUVKLFdBQVU7c0RBQWM7Ozs7Ozs7Ozs7Ozs4Q0FNM0IsOERBQUNFO29DQUFJRixXQUFVOztzREFFWiw4REFBQ0U7NENBQUlGLFdBQVU7Ozs7OztzREFDZiw4REFBQzFCLG1EQUFLQTs0Q0FBQytCLEtBQUtwQyxtRkFBVUE7NENBQUVxQyxLQUFJOzRDQUFXTixXQUFVOzs7Ozs7Ozs7Ozs7OENBRWpELDhEQUFDRTtvQ0FBSUYsV0FBVTs7c0RBQ2QsOERBQUNFOzRDQUFJRixXQUFVOzs4REFDWCw4REFBQ1A7b0RBQUtPLFdBQVU7O3NFQUNaLDhEQUFDckI7NERBQWdCQyxPQUFPOzs7Ozs7d0RBQUs7Ozs7Ozs7OERBQ2pDLDhEQUFDdUI7b0RBQUdILFdBQVU7OERBQThEOzs7Ozs7Ozs7Ozs7c0RBRWhGLDhEQUFDRTs0Q0FBSUYsV0FBVTs7OERBQ1gsOERBQUNQO29EQUFLTyxXQUFVOztzRUFDWiw4REFBQ3JCOzREQUFnQkMsT0FBTzs7Ozs7O3dEQUFLOzs7Ozs7OzhEQUNqQyw4REFBQ3VCO29EQUFHSCxXQUFVOzhEQUE4RDs7Ozs7Ozs7Ozs7O3NEQUVoRiw4REFBQ0U7NENBQUlGLFdBQVU7OzhEQUNYLDhEQUFDUDtvREFBS08sV0FBVTs7c0VBQ1osOERBQUNyQjs0REFBZ0JDLE9BQU87Ozs7Ozt3REFBSTs7Ozs7Ozs4REFDaEMsOERBQUN1QjtvREFBR0gsV0FBVTs4REFBOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJNUUsOERBQUNuQywwREFBTUE7Ozs7O3NDQUNQLDhEQUFDRyw4REFBVUE7Ozs7O3NDQUNYLDhEQUFDRiw2REFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQjtBQUNBLCtEQUFlNEIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWJvdXQuanM/ZmQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFNraWxscyBmcm9tIFwiQC9jb21wb25lbnRzL1NraWxsc1wiO1xyXG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvRWR1Y2F0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRlZFRleHQgZnJvbSBcIkAvY29tcG9uZW50cy9BbmltYXRlZFRleHRcIjtcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSBcIkAvY29tcG9uZW50cy9FeHBlcmllbmNlXCI7XHJcbmltcG9ydCBwcm9maWxlUGljIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3Byb2ZpbGUvZGV2ZWxvcGVyLXBpYy0yLmpwZWdcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IG0sIHVzZUluVmlldywgdXNlTW90aW9uVmFsdWUsIHVzZVNwcmluZyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmNvbnN0IEFuaW1hdGVkTnVtYmVycyA9ICh7dmFsdWV9KSA9PiB7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBtb3Rpb25WYWx1ZSA9IHVzZU1vdGlvblZhbHVlKDApO1xyXG4gICAgY29uc3Qgc3ByaW5nVmFsdWUgPSB1c2VTcHJpbmcobW90aW9uVmFsdWUse2R1cmF0aW9uIDozMDAwfSk7XHJcbiAgICBjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWYse29uY2U6dHJ1ZX0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihpc0luVmlldyl7XHJcbiAgICAgICAgbW90aW9uVmFsdWUuc2V0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIH0sW2lzSW5WaWV3LHZhbHVlLG1vdGlvblZhbHVlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzcHJpbmdWYWx1ZS5vbihcImNoYW5nZVwiLChsYXRlc3QpID0+IHtcclxuICAgICAgICAgICAgaWYocmVmLmN1cnJlbnQgJiYgbGF0ZXN0LnRvRml4ZWQoMCkgPD0gdmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQudGV4dENvbnRlbnQgPSBsYXRlc3QudG9GaXhlZCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtzcHJpbmdWYWx1ZSx2YWx1ZV0pXHJcblxyXG5cclxuICAgIHJldHVybiA8c3BhbiByZWY9e3JlZn0+PC9zcGFuPlxyXG59XHJcblxyXG5jb25zdCBhYm91dCA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Db2RlQnVja3MgfCBBYm91dCBQYWdlPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImFueSBkZXNjcmlwdGlvblwiPjwvbWV0YT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGRhcms6dGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInB0LTE2XCI+XHJcbiAgICAgICAgICAgICAgICA8QW5pbWF0ZWRUZXh0IHRleHQ9XCJQYXNzaW9uIEZ1ZWxzIFB1cnBvc2UhXCIgY2xhc3NOYW1lPVwibWItMTJcIi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB3LWZ1bGwgZ3JpZC1jb2xzLTggZ2FwLTE2XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1sZyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZGFyay83NVwiPkJpb2dyYXBoeTwvaDI+XHJcbjxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+XHJcbkhpLCBJJ20gQ29kZUJ1Y2tzLCBhIHdlYiBkZXZlbG9wZXIgYW5kIFVJL1VYIGRlc2lnbmVyIHdpdGggYSBwYXNzaW9uIGZvciBjcmVhdGluZyBiZWF1dGlmdWwsIGZ1bmN0aW9uYWwsIFxyXG5hbmQgdXNlci1jZW50ZXJlZCBkaWdpdGFsIGV4cGVyaWVuY2VzLiBXaXRoIDQgeWVhcnMgb2YgZXhwZXJpZW5jZSBpbiB0aGUgZmllbGQuIEkgYW0gYWx3YXlzIGxvb2tpbmcgZm9yIFxyXG5uZXcgYW5kIGlubm92YXRpdmUgd2F5cyB0byBicmluZyBteSBjbGllbnRzJyB2aXNpb25zIHRvIGxpZmUuXHJcbjwvcD5cclxuPHAgY2xhc3NOYW1lPVwibXktNCBmb250LW1lZGl1bVwiPlxyXG5JIGJlbGlldmUgdGhhdCBkZXNpZ24gaXMgYWJvdXQgbW9yZSB0aGFuIGp1c3QgbWFraW5nIHRoaW5ncyBsb29rIHByZXR0eSDigJMgaXQncyBhYm91dCBzb2x2aW5nIHByb2JsZW1zIGFuZCBcclxuY3JlYXRpbmcgaW50dWl0aXZlLCBlbmpveWFibGUgZXhwZXJpZW5jZXMgZm9yIHVzZXJzLiBcclxuPC9wPlxyXG48cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlxyXG5XaGV0aGVyIEknbSB3b3JraW5nIG9uIGEgd2Vic2l0ZSwgbW9iaWxlIGFwcCwgb3IgXHJcbm90aGVyIGRpZ2l0YWwgcHJvZHVjdCwgSSBicmluZyBteSBjb21taXRtZW50IHRvIGRlc2lnbiBleGNlbGxlbmNlIGFuZCB1c2VyLWNlbnRlcmVkIHRoaW5raW5nIHRvIFxyXG5ldmVyeSBwcm9qZWN0IEkgd29yayBvbi4gSSBsb29rIGZvcndhcmQgdG8gdGhlIG9wcG9ydHVuaXR5IHRvIGJyaW5nIG15IHNraWxscyBhbmQgcGFzc2lvbiB0byB5b3VyIG5leHQgcHJvamVjdC5cclxuPC9wPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIHJlbGF0aXZlIGgtbWF4IHJvdW5kZWQtMnhsIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayBiZy1saWdodCBwLThcIj5cclxuICAgXHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgLXJpZ2h0LTMgLXotMTAgdy1bMTAyJV0gaC1bMTAzJV0gcm91bmRlZC1bMnJlbV0gYmctZGFyayBkYXJrOmJnLWxpXCIvPlxyXG4gICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljfSBhbHQ9XCJjb2RlYnVja1wiIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gcm91bmRlZC0yeGxcIi8+XHJcbjwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtN3hsIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICA8QW5pbWF0ZWROdW1iZXJzIHZhbHVlPXs1MH0vPis8L3NwYW4+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzUgZGFyazp0ZXh0LWxpZ2h0XCI+c2F0aXNmaWVkIGNsaWVudHM8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtN3hsIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICA8QW5pbWF0ZWROdW1iZXJzIHZhbHVlPXs0MH0vPis8L3NwYW4+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzUgZGFyazp0ZXh0LWxpZ2h0XCI+cHJvamVjdHMgY29tcGxldGVkPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LTd4bCBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgPEFuaW1hdGVkTnVtYmVycyB2YWx1ZT17NH0vPis8L3NwYW4+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzUgZGFyazp0ZXh0LWxpZ2h0XCI+eWVhcnMgb2YgZXhwZXJpZW5jZTwvaDI+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8U2tpbGxzLz5cclxuICAgICAgICA8RXhwZXJpZW5jZS8+XHJcbiAgICAgICAgPEVkdWNhdGlvbi8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBhYm91dDsiXSwibmFtZXMiOlsiSGVhZCIsIkxheW91dCIsIlNraWxscyIsIkVkdWNhdGlvbiIsIkFuaW1hdGVkVGV4dCIsIkV4cGVyaWVuY2UiLCJwcm9maWxlUGljIiwiUmVhY3QiLCJ1c2UiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJJbWFnZSIsIm0iLCJ1c2VJblZpZXciLCJ1c2VNb3Rpb25WYWx1ZSIsInVzZVNwcmluZyIsIkFuaW1hdGVkTnVtYmVycyIsInZhbHVlIiwicmVmIiwibW90aW9uVmFsdWUiLCJzcHJpbmdWYWx1ZSIsImR1cmF0aW9uIiwiaXNJblZpZXciLCJvbmNlIiwic2V0Iiwib24iLCJsYXRlc3QiLCJjdXJyZW50IiwidG9GaXhlZCIsInRleHRDb250ZW50Iiwic3BhbiIsImFib3V0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwiY2xhc3NOYW1lIiwidGV4dCIsImRpdiIsImgyIiwicCIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});