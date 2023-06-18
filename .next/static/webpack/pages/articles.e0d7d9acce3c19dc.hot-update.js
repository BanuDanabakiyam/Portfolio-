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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/articles/pagination component in reactjs.jpg */ \"./public/images/articles/pagination component in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_loading_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/articles/create loading in reactjs.jpg */ \"./public/images/articles/create loading in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/articles/create modal component in react using react portals.png */ \"./public/images/articles/create modal component in react using react portals.png\");\n/* harmony import */ var _public_images_articles_form_Validation_in_reactjs_using_custom_react_Hook_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/images/articles/form Validation in reactjs using custom react Hook.png */ \"./public/images/articles/form Validation in reactjs using custom react Hook.png\");\n/* harmony import */ var _public_images_articles_smooth_scrolling_in_reactjs_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/images/articles/smooth scrolling in reactjs.png */ \"./public/images/articles/smooth scrolling in reactjs.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion)((next_image__WEBPACK_IMPORTED_MODULE_4___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    function handleMove(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n        y.set(-10);\n    }\n    function handleMoveLeave(event) {\n        imgRef.current.style.display = \"none\";\n        x.set(0);\n        y.set(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMove,\n        onMouseLeave: handleMoveLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"capitalize text-xl font-semibold hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                style: {\n                    x: x,\n                    y: y\n                },\n                whileInView: {\n                    opacity: 1,\n                    transition: {\n                        du\n                    }\n                },\n                src: img,\n                ref: imgRef,\n                alt: \"title\",\n                className: \"z-10 w-96 h-auto hidden absolute rounded-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { img , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light   text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4   \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                title: title,\n                img: img,\n                link: link\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold pl-4\",\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { img , title , time , summary , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2rem] bg-dark\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"w-full inline-block cursor-pointer overflow-hidden rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: title,\n                    className: \"w-full h-auto \",\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: link,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"capitalize text-2xl font-bold my-2 mt-4 hover:underline\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mb-2\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold\",\n                children: time\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst Articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CodeBucks | Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 88,\n                        columnNumber: 14\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 89,\n                        columnNumber: 14\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 87,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full mb-16 flex flex-col items-center justify-center overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Words Can Change The World!\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 93,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.    Follow this step-by-step guide to integrate Pagination component in your ReactJS project\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.    Follow this step-by-step guide to integrate Pagination component in your ReactJS project\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_loading_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 94,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-4xl w-full text-center my-16 mt-32\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 113,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_form_Validation_in_reactjs_using_custom_react_Hook_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_smooth_scrolling_in_reactjs_png__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 114,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 92,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 91,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c4 = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n$RefreshReg$(_c4, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2U7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ3dDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDQztnQkFBS3hCLFdBQVU7MEJBQ2IsNEVBQUMvQiwwREFBTUE7b0JBQUMrQixXQUFVOztzQ0FDZCw4REFBQ25DLGdFQUFZQTs0QkFBQzRELE1BQUs7NEJBQThCekIsV0FBVTs7Ozs7O3NDQUMzRCw4REFBQzBCOzRCQUFHMUIsV0FBVTs7OENBQ1YsOERBQUNZO29DQUNEL0IsT0FBTTtvQ0FDTmlDLFNBQVE7b0NBRVJELE1BQUs7b0NBQ0w5QixNQUFLO29DQUNMRCxLQUFLUixtR0FBUUE7Ozs7Ozs4Q0FFYiw4REFBQ3NDO29DQUNEL0IsT0FBTTtvQ0FDTmlDLFNBQVE7b0NBRVJELE1BQUs7b0NBQ0w5QixNQUFLO29DQUNMRCxLQUFLUCw2RkFBUUE7Ozs7Ozs7Ozs7OztzQ0FJakIsOERBQUN3Qjs0QkFBR0MsV0FBVTtzQ0FBb0Q7Ozs7OztzQ0FDbEUsOERBQUMwQjs7OENBQ0csOERBQUNsQjtvQ0FDRDNCLE9BQU07b0NBQ040QixNQUFLO29DQUNMMUIsTUFBSztvQ0FDTEQsS0FBS04sdUhBQVFBOzs7Ozs7OENBSWIsOERBQUNnQztvQ0FDRDNCLE9BQU07b0NBQ040QixNQUFLO29DQUNMMUIsTUFBSztvQ0FDTEQsS0FBS0wsdUhBQVFBOzs7Ozs7OENBSWIsOERBQUMrQjtvQ0FDRDNCLE9BQU07b0NBQ040QixNQUFLO29DQUNMMUIsTUFBSztvQ0FDTEQsS0FBS0osZ0dBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2pDO01BNURNMEM7QUE2RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGljbGVzLmpzP2Y1YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tIFwiQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sdXNlTW90aW9uVmFsdWUgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgYXJ0aWNsZTEgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9wYWdpbmF0aW9uIGNvbXBvbmVudCBpbiByZWFjdGpzLmpwZyc7XHJcbmltcG9ydCBhcnRpY2xlMiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9jcmVhdGUgbG9hZGluZyBpbiByZWFjdGpzLmpwZ1wiO1xyXG5pbXBvcnQgYXJ0aWNsZTMgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvY3JlYXRlIG1vZGFsIGNvbXBvbmVudCBpbiByZWFjdCB1c2luZyByZWFjdCBwb3J0YWxzLnBuZ1wiO1xyXG5pbXBvcnQgYXJ0aWNsZTQgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvZm9ybSBWYWxpZGF0aW9uIGluIHJlYWN0anMgdXNpbmcgY3VzdG9tIHJlYWN0IEhvb2sucG5nXCI7XHJcbmltcG9ydCBhcnRpY2xlNSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9zbW9vdGggc2Nyb2xsaW5nIGluIHJlYWN0anMucG5nXCI7XHJcblxyXG5jb25zdCBGcmFtZXJJbWFnZSA9IG1vdGlvbihJbWFnZSk7XHJcblxyXG5cclxuY29uc3QgTW92aW5nSW1nID0gKHt0aXRsZSxpbWcsbGlua30pID0+IHtcclxuXHJcbiAgICBjb25zdCB4ID11c2VNb3Rpb25WYWx1ZSgwKTtcclxuICAgIGNvbnN0IHkgPSB1c2VNb3Rpb25WYWx1ZSgwKTtcclxuICAgIGNvbnN0IGltZ1JlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQpe1xyXG4gICAgICAgIGltZ1JlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgeC5zZXQoZXZlbnQucGFnZVgpO1xyXG4gICAgICAgIHkuc2V0KC0xMCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3ZlTGVhdmUoZXZlbnQpe1xyXG4gICAgICAgIGltZ1JlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIHguc2V0KDApO1xyXG4gICAgICAgIHkuc2V0KDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3ZlfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW92ZUxlYXZlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgdGV4dC14bCBmb250LXNlbWlib2xkIGhvdmVyOnVuZGVybGluZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8RnJhbWVySW1hZ2UgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7eDp4LHk6eX19XHJcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7b3BhY2l0eToxLCB0cmFuc2l0aW9uOntkdX19fVxyXG4gICAgICAgICAgICBzcmM9e2ltZ30gcmVmPXtpbWdSZWZ9IGFsdD1cInRpdGxlXCIgY2xhc3NOYW1lPVwiei0xMCB3LTk2IGgtYXV0byBoaWRkZW4gYWJzb2x1dGUgcm91bmRlZC1sZ1wiPjwvRnJhbWVySW1hZ2U+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgQXJ0aWNsZSA9ICh7aW1nLHRpdGxlLGRhdGUsbGlua30pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHAtNCBweS02IG15LTQgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctbGlnaHRcclxuICAgICAgICB0ZXh0LWRhcmsgZmlyc3Q6bXQtMCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1kYXJrIGJvcmRlci1yLTQgYm9yZGVyLWItNFxyXG4gICAgICAgIFwiPlxyXG4gICAgICAgICAgICA8TW92aW5nSW1nIHRpdGxlPXt0aXRsZX0gaW1nPXtpbWd9IGxpbms9e2xpbmt9PjwvTW92aW5nSW1nPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGQgcGwtNFwiPntkYXRlfTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgRmVhdHVyZWRBcnRpY2xlID0gKHtpbWcsIHRpdGxlLCB0aW1lLCBzdW1tYXJ5LCBsaW5rfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjb2wtc3Bhbi0xIHctZnVsbCBwLTQgYmctbGlnaHQgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgLXJpZ2h0LTMgLXotMTAgdy1bMTAxJV0gaC1bMTAzJV0gcm91bmRlZC1ici0zeGwgcm91bmRlZC1bMnJlbV0gYmctZGFya1wiLz5cclxuICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBpbmxpbmUtYmxvY2sgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEZyYW1lckltYWdlIHNyYz17aW1nfSBhbHQ9e3RpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIFwiXHJcbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tzY2FsZToxLjA1fX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOjAuMn19XHJcbiAgICAgICAgPjwvRnJhbWVySW1hZ2U+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZSB0ZXh0LTJ4bCBmb250LWJvbGQgbXktMiBtdC00IGhvdmVyOnVuZGVybGluZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1iLTJcIj57c3VtbWFyeX08L3A+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGRcIj57dGltZX08L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5jb25zdCBBcnRpY2xlcyA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgIDx0aXRsZT5Db2RlQnVja3MgfCBBcnRpY2xlcyBQYWdlPC90aXRsZT5cclxuICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJhbnkgZGVzY3JpcHRpb25cIj48L21ldGE+XHJcbiAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwidy1mdWxsIG1iLTE2IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInB0LTE2XCI+XHJcbiAgICAgICAgICAgICAgICA8QW5pbWF0ZWRUZXh0IHRleHQ9XCJXb3JkcyBDYW4gQ2hhbmdlIFRoZSBXb3JsZCFcIiBjbGFzc05hbWU9XCJtYi0xNlwiLz5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0xNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZEFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkJ1aWxkIEEgQ3VzdG9tIFBhZ2luYXRpb24gQ29tcG9uZW50IEluIFJlYWN0anMgRnJvbSBTY3JhdGNoXCJcclxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5PVwiTGVhcm4gaG93IHRvIGJ1aWxkIGEgY3VzdG9tIHBhZ2luYXRpb24gY29tcG9uZW50IGluIFJlYWN0SlMgZnJvbSBzY3JhdGNoLiBcclxuICAgICAgICAgICAgICAgICAgICBGb2xsb3cgdGhpcyBzdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gaW50ZWdyYXRlIFBhZ2luYXRpb24gY29tcG9uZW50IGluIHlvdXIgUmVhY3RKUyBwcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICB0aW1lPVwiOSBtaW4gcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgID48L0ZlYXR1cmVkQXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCdWlsZCBBIEN1c3RvbSBQYWdpbmF0aW9uIENvbXBvbmVudCBJbiBSZWFjdGpzIEZyb20gU2NyYXRjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3VtbWFyeT1cIkxlYXJuIGhvdyB0byBidWlsZCBhIGN1c3RvbSBwYWdpbmF0aW9uIGNvbXBvbmVudCBpbiBSZWFjdEpTIGZyb20gc2NyYXRjaC4gXHJcbiAgICAgICAgICAgICAgICAgICAgRm9sbG93IHRoaXMgc3RlcC1ieS1zdGVwIGd1aWRlIHRvIGludGVncmF0ZSBQYWdpbmF0aW9uIGNvbXBvbmVudCBpbiB5b3VyIFJlYWN0SlMgcHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZT1cIjkgbWluIHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWc9e2FydGljbGUyfVxyXG4gICAgICAgICAgICAgICAgICAgID48L0ZlYXR1cmVkQXJ0aWNsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTR4bCB3LWZ1bGwgdGV4dC1jZW50ZXIgbXktMTYgbXQtMzJcIj5BbGwgQXJ0aWNsZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb3JtIFZhbGlkYXRpb24gSW4gUmVhY3RqczogQnVpbGQgQSBSZXVzYWJsZSBDdXN0b20gSG9vayBGb3IgSW5wdXRzIEFuZCBFcnJvciBIYW5kbGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIkp1bmUgMTggMjAyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvcm0gVmFsaWRhdGlvbiBJbiBSZWFjdGpzOiBCdWlsZCBBIFJldXNhYmxlIEN1c3RvbSBIb29rIEZvciBJbnB1dHMgQW5kIEVycm9yIEhhbmRsaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPVwiSnVuZSAxOCAyMDIzXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlNH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9ybSBWYWxpZGF0aW9uIEluIFJlYWN0anM6IEJ1aWxkIEEgUmV1c2FibGUgQ3VzdG9tIEhvb2sgRm9yIElucHV0cyBBbmQgRXJyb3IgSGFuZGxpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9XCJKdW5lIDE4IDIwMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWc9e2FydGljbGU1fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgPC8+XHJcbiAgICAgICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXM7Il0sIm5hbWVzIjpbIkFuaW1hdGVkVGV4dCIsIkhlYWQiLCJMaW5rIiwiSW1hZ2UiLCJMYXlvdXQiLCJSZWFjdCIsInVzZVJlZiIsIm1vdGlvbiIsInVzZU1vdGlvblZhbHVlIiwiYXJ0aWNsZTEiLCJhcnRpY2xlMiIsImFydGljbGUzIiwiYXJ0aWNsZTQiLCJhcnRpY2xlNSIsIkZyYW1lckltYWdlIiwiTW92aW5nSW1nIiwidGl0bGUiLCJpbWciLCJsaW5rIiwieCIsInkiLCJpbWdSZWYiLCJoYW5kbGVNb3ZlIiwiZXZlbnQiLCJjdXJyZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0IiwicGFnZVgiLCJoYW5kbGVNb3ZlTGVhdmUiLCJocmVmIiwidGFyZ2V0Iiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlTGVhdmUiLCJoMiIsImNsYXNzTmFtZSIsIndoaWxlSW5WaWV3Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdSIsInNyYyIsInJlZiIsImFsdCIsIkFydGljbGUiLCJkYXRlIiwibGkiLCJzcGFuIiwiRmVhdHVyZWRBcnRpY2xlIiwidGltZSIsInN1bW1hcnkiLCJkaXYiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJkdXJhdGlvbiIsInAiLCJBcnRpY2xlcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJ0ZXh0IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});