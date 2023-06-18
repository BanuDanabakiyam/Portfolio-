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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/articles/pagination component in reactjs.jpg */ \"./public/images/articles/pagination component in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_loading_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/articles/create loading in reactjs.jpg */ \"./public/images/articles/create loading in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/articles/create modal component in react using react portals.png */ \"./public/images/articles/create modal component in react using react portals.png\");\n/* harmony import */ var _public_images_articles_form_Validation_in_reactjs_using_custom_react_Hook_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/images/articles/form Validation in reactjs using custom react Hook.png */ \"./public/images/articles/form Validation in reactjs using custom react Hook.png\");\n/* harmony import */ var _public_images_articles_smooth_scrolling_in_reactjs_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/images/articles/smooth scrolling in reactjs.png */ \"./public/images/articles/smooth scrolling in reactjs.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion)((next_image__WEBPACK_IMPORTED_MODULE_4___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    function handleMove(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n        y.set(-10);\n    }\n    function handleMoveLeave(event) {\n        imgRef.current.style.display = \"none\";\n        x.set(0);\n        y.set(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMove,\n        onMouseLeave: handleMoveLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"capitalize text-xl font-semibold hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                style: {\n                    x: x,\n                    y: y\n                },\n                initial: {\n                    opacity: 0\n                },\n                whileInView: {\n                    opacity: 1,\n                    transition: {\n                        duration: 0.2\n                    }\n                },\n                src: img,\n                ref: imgRef,\n                alt: \"title\",\n                className: \"z-10 w-96 h-auto hidden absolute rounded-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { img , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion.li, {\n        initial: {\n            y: 200\n        },\n        className: \"relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light   text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4   \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                title: title,\n                img: img,\n                link: link\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold pl-4\",\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { img , title , time , summary , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2rem] bg-dark\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"w-full inline-block cursor-pointer overflow-hidden rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: title,\n                    className: \"w-full h-auto \",\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: link,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"capitalize text-2xl font-bold my-2 mt-4 hover:underline\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 79,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mb-2\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold\",\n                children: time\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst Articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CodeBucks | Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 92,\n                        columnNumber: 14\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 93,\n                        columnNumber: 14\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 91,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full mb-16 flex flex-col items-center justify-center overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Words Can Change The World!\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 97,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.    Follow this step-by-step guide to integrate Pagination component in your ReactJS project\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.    Follow this step-by-step guide to integrate Pagination component in your ReactJS project\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_loading_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 98,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-4xl w-full text-center my-16 mt-32\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 117,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_form_Validation_in_reactjs_using_custom_react_Hook_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_smooth_scrolling_in_reactjs_png__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 118,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 95,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c4 = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n$RefreshReg$(_c4, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEJNRDtBQXNCTixNQUFNTyxXQUFXLElBQU07SUFDbkIscUJBQ0k7OzBCQUNDLDhEQUFDdEQsa0RBQUlBOztrQ0FDRCw4REFBQ2U7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ3dDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDQztnQkFBS3hCLFdBQVU7MEJBQ2IsNEVBQUMvQiwwREFBTUE7b0JBQUMrQixXQUFVOztzQ0FDZCw4REFBQ25DLGdFQUFZQTs0QkFBQzRELE1BQUs7NEJBQThCekIsV0FBVTs7Ozs7O3NDQUMzRCw4REFBQzBCOzRCQUFHMUIsV0FBVTs7OENBQ1YsOERBQUNhO29DQUNEaEMsT0FBTTtvQ0FDTmtDLFNBQVE7b0NBRVJELE1BQUs7b0NBQ0wvQixNQUFLO29DQUNMRCxLQUFLUixtR0FBUUE7Ozs7Ozs4Q0FFYiw4REFBQ3VDO29DQUNEaEMsT0FBTTtvQ0FDTmtDLFNBQVE7b0NBRVJELE1BQUs7b0NBQ0wvQixNQUFLO29DQUNMRCxLQUFLUCw2RkFBUUE7Ozs7Ozs7Ozs7OztzQ0FJakIsOERBQUN3Qjs0QkFBR0MsV0FBVTtzQ0FBb0Q7Ozs7OztzQ0FDbEUsOERBQUMwQjs7OENBQ0csOERBQUNqQjtvQ0FDRDVCLE9BQU07b0NBQ042QixNQUFLO29DQUNMM0IsTUFBSztvQ0FDTEQsS0FBS04sdUhBQVFBOzs7Ozs7OENBSWIsOERBQUNpQztvQ0FDRDVCLE9BQU07b0NBQ042QixNQUFLO29DQUNMM0IsTUFBSztvQ0FDTEQsS0FBS0wsdUhBQVFBOzs7Ozs7OENBSWIsOERBQUNnQztvQ0FDRDVCLE9BQU07b0NBQ042QixNQUFLO29DQUNMM0IsTUFBSztvQ0FDTEQsS0FBS0osZ0dBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2pDO01BNURNMEM7QUE2RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGljbGVzLmpzP2Y1YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tIFwiQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sdXNlTW90aW9uVmFsdWUgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgYXJ0aWNsZTEgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9wYWdpbmF0aW9uIGNvbXBvbmVudCBpbiByZWFjdGpzLmpwZyc7XHJcbmltcG9ydCBhcnRpY2xlMiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9jcmVhdGUgbG9hZGluZyBpbiByZWFjdGpzLmpwZ1wiO1xyXG5pbXBvcnQgYXJ0aWNsZTMgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvY3JlYXRlIG1vZGFsIGNvbXBvbmVudCBpbiByZWFjdCB1c2luZyByZWFjdCBwb3J0YWxzLnBuZ1wiO1xyXG5pbXBvcnQgYXJ0aWNsZTQgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvZm9ybSBWYWxpZGF0aW9uIGluIHJlYWN0anMgdXNpbmcgY3VzdG9tIHJlYWN0IEhvb2sucG5nXCI7XHJcbmltcG9ydCBhcnRpY2xlNSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9zbW9vdGggc2Nyb2xsaW5nIGluIHJlYWN0anMucG5nXCI7XHJcblxyXG5jb25zdCBGcmFtZXJJbWFnZSA9IG1vdGlvbihJbWFnZSk7XHJcblxyXG5cclxuY29uc3QgTW92aW5nSW1nID0gKHt0aXRsZSxpbWcsbGlua30pID0+IHtcclxuXHJcbiAgICBjb25zdCB4ID11c2VNb3Rpb25WYWx1ZSgwKTtcclxuICAgIGNvbnN0IHkgPSB1c2VNb3Rpb25WYWx1ZSgwKTtcclxuICAgIGNvbnN0IGltZ1JlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQpe1xyXG4gICAgICAgIGltZ1JlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgeC5zZXQoZXZlbnQucGFnZVgpO1xyXG4gICAgICAgIHkuc2V0KC0xMCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3ZlTGVhdmUoZXZlbnQpe1xyXG4gICAgICAgIGltZ1JlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIHguc2V0KDApO1xyXG4gICAgICAgIHkuc2V0KDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3ZlfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW92ZUxlYXZlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgdGV4dC14bCBmb250LXNlbWlib2xkIGhvdmVyOnVuZGVybGluZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8RnJhbWVySW1hZ2UgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7eDp4LHk6eX19XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OjB9fVxyXG4gICAgICAgICAgICB3aGlsZUluVmlldz17e29wYWNpdHk6MSwgdHJhbnNpdGlvbjp7ZHVyYXRpb246MC4yfX19XHJcbiAgICAgICAgICAgIHNyYz17aW1nfSByZWY9e2ltZ1JlZn0gYWx0PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ6LTEwIHctOTYgaC1hdXRvIGhpZGRlbiBhYnNvbHV0ZSByb3VuZGVkLWxnXCI+PC9GcmFtZXJJbWFnZT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBBcnRpY2xlID0gKHtpbWcsdGl0bGUsZGF0ZSxsaW5rfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxtb3Rpb24ubGlcclxuICAgICAgICBpbml0aWFsPXt7eToyMDB9fVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBwLTQgcHktNiBteS00IHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLWxpZ2h0XHJcbiAgICAgICAgdGV4dC1kYXJrIGZpcnN0Om10LTAgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayBib3JkZXItci00IGJvcmRlci1iLTRcclxuICAgICAgICBcIj5cclxuICAgICAgICAgICAgPE1vdmluZ0ltZyB0aXRsZT17dGl0bGV9IGltZz17aW1nfSBsaW5rPXtsaW5rfT48L01vdmluZ0ltZz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LXNlbWlib2xkIHBsLTRcIj57ZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgPC9tb3Rpb24ubGk+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBGZWF0dXJlZEFydGljbGUgPSAoe2ltZywgdGl0bGUsIHRpbWUsIHN1bW1hcnksIGxpbmt9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbC1zcGFuLTEgdy1mdWxsIHAtNCBiZy1saWdodCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1kYXJrIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCAtcmlnaHQtMyAtei0xMCB3LVsxMDElXSBoLVsxMDMlXSByb3VuZGVkLWJyLTN4bCByb3VuZGVkLVsycmVtXSBiZy1kYXJrXCIvPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGlubGluZS1ibG9jayBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8RnJhbWVySW1hZ2Ugc3JjPXtpbWd9IGFsdD17dGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gXCJcclxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17e3NjYWxlOjEuMDV9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246MC4yfX1cclxuICAgICAgICA+PC9GcmFtZXJJbWFnZT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHRleHQtMnhsIGZvbnQtYm9sZCBteS0yIG10LTQgaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWItMlwiPntzdW1tYXJ5fTwvcD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1zZW1pYm9sZFwiPnt0aW1lfTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgPHRpdGxlPkNvZGVCdWNrcyB8IEFydGljbGVzIFBhZ2U8L3RpdGxlPlxyXG4gICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImFueSBkZXNjcmlwdGlvblwiPjwvbWV0YT5cclxuICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwicHQtMTZcIj5cclxuICAgICAgICAgICAgICAgIDxBbmltYXRlZFRleHQgdGV4dD1cIldvcmRzIENhbiBDaGFuZ2UgVGhlIFdvcmxkIVwiIGNsYXNzTmFtZT1cIm1iLTE2XCIvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQnVpbGQgQSBDdXN0b20gUGFnaW5hdGlvbiBDb21wb25lbnQgSW4gUmVhY3RqcyBGcm9tIFNjcmF0Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnk9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBjdXN0b20gcGFnaW5hdGlvbiBjb21wb25lbnQgaW4gUmVhY3RKUyBmcm9tIHNjcmF0Y2guIFxyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvdyB0aGlzIHN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnRlZ3JhdGUgUGFnaW5hdGlvbiBjb21wb25lbnQgaW4geW91ciBSZWFjdEpTIHByb2plY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU9XCI5IG1pbiByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMX1cclxuICAgICAgICAgICAgICAgICAgICAgPjwvRmVhdHVyZWRBcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZEFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkJ1aWxkIEEgQ3VzdG9tIFBhZ2luYXRpb24gQ29tcG9uZW50IEluIFJlYWN0anMgRnJvbSBTY3JhdGNoXCJcclxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5PVwiTGVhcm4gaG93IHRvIGJ1aWxkIGEgY3VzdG9tIHBhZ2luYXRpb24gY29tcG9uZW50IGluIFJlYWN0SlMgZnJvbSBzY3JhdGNoLiBcclxuICAgICAgICAgICAgICAgICAgICBGb2xsb3cgdGhpcyBzdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gaW50ZWdyYXRlIFBhZ2luYXRpb24gY29tcG9uZW50IGluIHlvdXIgUmVhY3RKUyBwcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICB0aW1lPVwiOSBtaW4gcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvRmVhdHVyZWRBcnRpY2xlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIHctZnVsbCB0ZXh0LWNlbnRlciBteS0xNiBtdC0zMlwiPkFsbCBBcnRpY2xlczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvcm0gVmFsaWRhdGlvbiBJbiBSZWFjdGpzOiBCdWlsZCBBIFJldXNhYmxlIEN1c3RvbSBIb29rIEZvciBJbnB1dHMgQW5kIEVycm9yIEhhbmRsaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPVwiSnVuZSAxOCAyMDIzXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlM31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9ybSBWYWxpZGF0aW9uIEluIFJlYWN0anM6IEJ1aWxkIEEgUmV1c2FibGUgQ3VzdG9tIEhvb2sgRm9yIElucHV0cyBBbmQgRXJyb3IgSGFuZGxpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9XCJKdW5lIDE4IDIwMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWc9e2FydGljbGU0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb3JtIFZhbGlkYXRpb24gSW4gUmVhY3RqczogQnVpbGQgQSBSZXVzYWJsZSBDdXN0b20gSG9vayBGb3IgSW5wdXRzIEFuZCBFcnJvciBIYW5kbGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIkp1bmUgMTggMjAyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICA8Lz5cclxuICAgICAgICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlczsiXSwibmFtZXMiOlsiQW5pbWF0ZWRUZXh0IiwiSGVhZCIsIkxpbmsiLCJJbWFnZSIsIkxheW91dCIsIlJlYWN0IiwidXNlUmVmIiwibW90aW9uIiwidXNlTW90aW9uVmFsdWUiLCJhcnRpY2xlMSIsImFydGljbGUyIiwiYXJ0aWNsZTMiLCJhcnRpY2xlNCIsImFydGljbGU1IiwiRnJhbWVySW1hZ2UiLCJNb3ZpbmdJbWciLCJ0aXRsZSIsImltZyIsImxpbmsiLCJ4IiwieSIsImltZ1JlZiIsImhhbmRsZU1vdmUiLCJldmVudCIsImN1cnJlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXQiLCJwYWdlWCIsImhhbmRsZU1vdmVMZWF2ZSIsImhyZWYiLCJ0YXJnZXQiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VMZWF2ZSIsImgyIiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInNyYyIsInJlZiIsImFsdCIsIkFydGljbGUiLCJkYXRlIiwibGkiLCJzcGFuIiwiRmVhdHVyZWRBcnRpY2xlIiwidGltZSIsInN1bW1hcnkiLCJkaXYiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJwIiwiQXJ0aWNsZXMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwidGV4dCIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});