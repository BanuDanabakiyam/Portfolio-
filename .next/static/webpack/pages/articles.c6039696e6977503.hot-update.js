"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./src/pages/articles.js":
/*!*******************************!*\
  !*** ./src/pages/articles.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/articles/pagination component in reactjs.jpg */ \"./public/images/articles/pagination component in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_loading_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/articles/create loading in reactjs.jpg */ \"./public/images/articles/create loading in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/articles/create modal component in react using react portals.png */ \"./public/images/articles/create modal component in react using react portals.png\");\n/* harmony import */ var _public_images_articles_form_Validation_in_reactjs_using_custom_react_Hook_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/images/articles/form Validation in reactjs using custom react Hook.png */ \"./public/images/articles/form Validation in reactjs using custom react Hook.png\");\n/* harmony import */ var _public_images_articles_smooth_scrolling_in_reactjs_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/images/articles/smooth scrolling in reactjs.png */ \"./public/images/articles/smooth scrolling in reactjs.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion)((next_image__WEBPACK_IMPORTED_MODULE_4___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    function handleMove(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n        y.set(-10);\n    }\n    function handleMoveLeave(event) {\n        imgRef.current.style.display = \"none\";\n        x.set(0);\n        y.set(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMove,\n        onMouseLeave: handleMoveLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"capitalize text-xl font-semibold hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                style: {\n                    x: x,\n                    y: y\n                },\n                i: true,\n                whileInView: {\n                    opacity: 1,\n                    transition: {\n                        duration: 0.2\n                    }\n                },\n                src: img,\n                ref: imgRef,\n                alt: \"title\",\n                className: \"z-10 w-96 h-auto hidden absolute rounded-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { img , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light   text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4   \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                title: title,\n                img: img,\n                link: link\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold pl-4\",\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { img , title , time , summary , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2rem] bg-dark\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"w-full inline-block cursor-pointer overflow-hidden rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: title,\n                    className: \"w-full h-auto \",\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: link,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"capitalize text-2xl font-bold my-2 mt-4 hover:underline\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mb-2\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold\",\n                children: time\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst Articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CodeBucks | Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 89,\n                        columnNumber: 14\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 90,\n                        columnNumber: 14\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 88,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full mb-16 flex flex-col items-center justify-center overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Words Can Change The World!\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 94,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.    Follow this step-by-step guide to integrate Pagination component in your ReactJS project\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.    Follow this step-by-step guide to integrate Pagination component in your ReactJS project\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_loading_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 95,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-4xl w-full text-center my-16 mt-32\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 114,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_form_Validation_in_reactjs_using_custom_react_Hook_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_smooth_scrolling_in_reactjs_png__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 115,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 93,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 92,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c4 = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n$RefreshReg$(_c4, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtEQUFJQTs7a0NBQ0QsOERBQUNlO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUN3Qzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUVyQyw4REFBQ0M7Z0JBQUt4QixXQUFVOzBCQUNiLDRFQUFDL0IsMERBQU1BO29CQUFDK0IsV0FBVTs7c0NBQ2QsOERBQUNuQyxnRUFBWUE7NEJBQUM0RCxNQUFLOzRCQUE4QnpCLFdBQVU7Ozs7OztzQ0FDM0QsOERBQUMwQjs0QkFBRzFCLFdBQVU7OzhDQUNWLDhEQUFDYTtvQ0FDRGhDLE9BQU07b0NBQ05rQyxTQUFRO29DQUVSRCxNQUFLO29DQUNML0IsTUFBSztvQ0FDTEQsS0FBS1IsbUdBQVFBOzs7Ozs7OENBRWIsOERBQUN1QztvQ0FDRGhDLE9BQU07b0NBQ05rQyxTQUFRO29DQUVSRCxNQUFLO29DQUNML0IsTUFBSztvQ0FDTEQsS0FBS1AsNkZBQVFBOzs7Ozs7Ozs7Ozs7c0NBSWpCLDhEQUFDd0I7NEJBQUdDLFdBQVU7c0NBQW9EOzs7Ozs7c0NBQ2xFLDhEQUFDMEI7OzhDQUNHLDhEQUFDakI7b0NBQ0Q1QixPQUFNO29DQUNONkIsTUFBSztvQ0FDTDNCLE1BQUs7b0NBQ0xELEtBQUtOLHVIQUFRQTs7Ozs7OzhDQUliLDhEQUFDaUM7b0NBQ0Q1QixPQUFNO29DQUNONkIsTUFBSztvQ0FDTDNCLE1BQUs7b0NBQ0xELEtBQUtMLHVIQUFRQTs7Ozs7OzhDQUliLDhEQUFDZ0M7b0NBQ0Q1QixPQUFNO29DQUNONkIsTUFBSztvQ0FDTDNCLE1BQUs7b0NBQ0xELEtBQUtKLGdHQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNqQztNQTVETTBDO0FBNkROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hcnRpY2xlcy5qcz9mNWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRlZFRleHQgZnJvbSBcIkAvY29tcG9uZW50cy9BbmltYXRlZFRleHRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uLHVzZU1vdGlvblZhbHVlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IGFydGljbGUxIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvcGFnaW5hdGlvbiBjb21wb25lbnQgaW4gcmVhY3Rqcy5qcGcnO1xyXG5pbXBvcnQgYXJ0aWNsZTIgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvY3JlYXRlIGxvYWRpbmcgaW4gcmVhY3Rqcy5qcGdcIjtcclxuaW1wb3J0IGFydGljbGUzIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2NyZWF0ZSBtb2RhbCBjb21wb25lbnQgaW4gcmVhY3QgdXNpbmcgcmVhY3QgcG9ydGFscy5wbmdcIjtcclxuaW1wb3J0IGFydGljbGU0IGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2Zvcm0gVmFsaWRhdGlvbiBpbiByZWFjdGpzIHVzaW5nIGN1c3RvbSByZWFjdCBIb29rLnBuZ1wiO1xyXG5pbXBvcnQgYXJ0aWNsZTUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvc21vb3RoIHNjcm9sbGluZyBpbiByZWFjdGpzLnBuZ1wiO1xyXG5cclxuY29uc3QgRnJhbWVySW1hZ2UgPSBtb3Rpb24oSW1hZ2UpO1xyXG5cclxuXHJcbmNvbnN0IE1vdmluZ0ltZyA9ICh7dGl0bGUsaW1nLGxpbmt9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgeCA9dXNlTW90aW9uVmFsdWUoMCk7XHJcbiAgICBjb25zdCB5ID0gdXNlTW90aW9uVmFsdWUoMCk7XHJcbiAgICBjb25zdCBpbWdSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3ZlKGV2ZW50KXtcclxuICAgICAgICBpbWdSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgIHguc2V0KGV2ZW50LnBhZ2VYKTtcclxuICAgICAgICB5LnNldCgtMTApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTW92ZUxlYXZlKGV2ZW50KXtcclxuICAgICAgICBpbWdSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICB4LnNldCgwKTtcclxuICAgICAgICB5LnNldCgwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW92ZX1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdmVMZWF2ZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHRleHQteGwgZm9udC1zZW1pYm9sZCBob3Zlcjp1bmRlcmxpbmVcIj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPEZyYW1lckltYWdlIFxyXG4gICAgICAgICAgICBzdHlsZT17e3g6eCx5Onl9fVxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7b3BhY2l0eToxLCB0cmFuc2l0aW9uOntkdXJhdGlvbjowLjJ9fX1cclxuICAgICAgICAgICAgc3JjPXtpbWd9IHJlZj17aW1nUmVmfSBhbHQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInotMTAgdy05NiBoLWF1dG8gaGlkZGVuIGFic29sdXRlIHJvdW5kZWQtbGdcIj48L0ZyYW1lckltYWdlPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGUgPSAoe2ltZyx0aXRsZSxkYXRlLGxpbmt9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBwLTQgcHktNiBteS00IHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLWxpZ2h0XHJcbiAgICAgICAgdGV4dC1kYXJrIGZpcnN0Om10LTAgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayBib3JkZXItci00IGJvcmRlci1iLTRcclxuICAgICAgICBcIj5cclxuICAgICAgICAgICAgPE1vdmluZ0ltZyB0aXRsZT17dGl0bGV9IGltZz17aW1nfSBsaW5rPXtsaW5rfT48L01vdmluZ0ltZz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LXNlbWlib2xkIHBsLTRcIj57ZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IEZlYXR1cmVkQXJ0aWNsZSA9ICh7aW1nLCB0aXRsZSwgdGltZSwgc3VtbWFyeSwgbGlua30pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmVsYXRpdmUgY29sLXNwYW4tMSB3LWZ1bGwgcC00IGJnLWxpZ2h0IGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgcm91bmRlZC0yeGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIC1yaWdodC0zIC16LTEwIHctWzEwMSVdIGgtWzEwMyVdIHJvdW5kZWQtYnItM3hsIHJvdW5kZWQtWzJyZW1dIGJnLWRhcmtcIi8+XHJcbiAgICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaW5saW5lLWJsb2NrIGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGcmFtZXJJbWFnZSBzcmM9e2ltZ30gYWx0PXt0aXRsZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBcIlxyXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7c2NhbGU6MS4wNX19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjowLjJ9fVxyXG4gICAgICAgID48L0ZyYW1lckltYWdlPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgdGV4dC0yeGwgZm9udC1ib2xkIG15LTIgbXQtNCBob3Zlcjp1bmRlcmxpbmVcIj57dGl0bGV9PC9oMj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtYi0yXCI+e3N1bW1hcnl9PC9wPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LXNlbWlib2xkXCI+e3RpbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3QgQXJ0aWNsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICA8dGl0bGU+Q29kZUJ1Y2tzIHwgQXJ0aWNsZXMgUGFnZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiYW55IGRlc2NyaXB0aW9uXCI+PC9tZXRhPlxyXG4gICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInctZnVsbCBtYi0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJwdC0xNlwiPlxyXG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PVwiV29yZHMgQ2FuIENoYW5nZSBUaGUgV29ybGQhXCIgY2xhc3NOYW1lPVwibWItMTZcIi8+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCdWlsZCBBIEN1c3RvbSBQYWdpbmF0aW9uIENvbXBvbmVudCBJbiBSZWFjdGpzIEZyb20gU2NyYXRjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3VtbWFyeT1cIkxlYXJuIGhvdyB0byBidWlsZCBhIGN1c3RvbSBwYWdpbmF0aW9uIGNvbXBvbmVudCBpbiBSZWFjdEpTIGZyb20gc2NyYXRjaC4gXHJcbiAgICAgICAgICAgICAgICAgICAgRm9sbG93IHRoaXMgc3RlcC1ieS1zdGVwIGd1aWRlIHRvIGludGVncmF0ZSBQYWdpbmF0aW9uIGNvbXBvbmVudCBpbiB5b3VyIFJlYWN0SlMgcHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZT1cIjkgbWluIHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWc9e2FydGljbGUxfVxyXG4gICAgICAgICAgICAgICAgICAgICA+PC9GZWF0dXJlZEFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQnVpbGQgQSBDdXN0b20gUGFnaW5hdGlvbiBDb21wb25lbnQgSW4gUmVhY3RqcyBGcm9tIFNjcmF0Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnk9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBjdXN0b20gcGFnaW5hdGlvbiBjb21wb25lbnQgaW4gUmVhY3RKUyBmcm9tIHNjcmF0Y2guIFxyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvdyB0aGlzIHN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnRlZ3JhdGUgUGFnaW5hdGlvbiBjb21wb25lbnQgaW4geW91ciBSZWFjdEpTIHByb2plY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU9XCI5IG1pbiByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMn1cclxuICAgICAgICAgICAgICAgICAgICA+PC9GZWF0dXJlZEFydGljbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC00eGwgdy1mdWxsIHRleHQtY2VudGVyIG15LTE2IG10LTMyXCI+QWxsIEFydGljbGVzPC9oMj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9ybSBWYWxpZGF0aW9uIEluIFJlYWN0anM6IEJ1aWxkIEEgUmV1c2FibGUgQ3VzdG9tIEhvb2sgRm9yIElucHV0cyBBbmQgRXJyb3IgSGFuZGxpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9XCJKdW5lIDE4IDIwMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWc9e2FydGljbGUzfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb3JtIFZhbGlkYXRpb24gSW4gUmVhY3RqczogQnVpbGQgQSBSZXVzYWJsZSBDdXN0b20gSG9vayBGb3IgSW5wdXRzIEFuZCBFcnJvciBIYW5kbGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIkp1bmUgMTggMjAyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvcm0gVmFsaWRhdGlvbiBJbiBSZWFjdGpzOiBCdWlsZCBBIFJldXNhYmxlIEN1c3RvbSBIb29rIEZvciBJbnB1dHMgQW5kIEVycm9yIEhhbmRsaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPVwiSnVuZSAxOCAyMDIzXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlNX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICA8L21haW4+XHJcbiAgICAgICAgIDwvPlxyXG4gICAgICAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzOyJdLCJuYW1lcyI6WyJBbmltYXRlZFRleHQiLCJIZWFkIiwiTGluayIsIkltYWdlIiwiTGF5b3V0IiwiUmVhY3QiLCJ1c2VSZWYiLCJtb3Rpb24iLCJ1c2VNb3Rpb25WYWx1ZSIsImFydGljbGUxIiwiYXJ0aWNsZTIiLCJhcnRpY2xlMyIsImFydGljbGU0IiwiYXJ0aWNsZTUiLCJGcmFtZXJJbWFnZSIsIk1vdmluZ0ltZyIsInRpdGxlIiwiaW1nIiwibGluayIsIngiLCJ5IiwiaW1nUmVmIiwiaGFuZGxlTW92ZSIsImV2ZW50IiwiY3VycmVudCIsInN0eWxlIiwiZGlzcGxheSIsInNldCIsInBhZ2VYIiwiaGFuZGxlTW92ZUxlYXZlIiwiaHJlZiIsInRhcmdldCIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZUxlYXZlIiwiaDIiLCJjbGFzc05hbWUiLCJpIiwid2hpbGVJblZpZXciLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3JjIiwicmVmIiwiYWx0IiwiQXJ0aWNsZSIsImRhdGUiLCJsaSIsInNwYW4iLCJGZWF0dXJlZEFydGljbGUiLCJ0aW1lIiwic3VtbWFyeSIsImRpdiIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInAiLCJBcnRpY2xlcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJ0ZXh0IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});