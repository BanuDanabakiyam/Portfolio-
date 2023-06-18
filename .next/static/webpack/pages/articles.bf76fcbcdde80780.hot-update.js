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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/articles/pagination component in reactjs.jpg */ \"./public/images/articles/pagination component in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_loading_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/articles/create loading in reactjs.jpg */ \"./public/images/articles/create loading in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/articles/create modal component in react using react portals.png */ \"./public/images/articles/create modal component in react using react portals.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion)((next_image__WEBPACK_IMPORTED_MODULE_4___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    function handleMove(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n        y.set(-10);\n    }\n    function handleMoveLeave(event) {\n        imgRef.current.style.display = \"none\";\n        x.set(0);\n        y.set(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMove,\n        onMouseLeave: handleMoveLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"capitalize text-xl font-semibold hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                style: {\n                    x: x,\n                    y: y\n                },\n                src: img,\n                ref: imgRef,\n                alt: \"title\",\n                className: \"z-1w-96 h-auto hidden absolute rounded-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { img , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light   text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4   \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                title: title,\n                img: img,\n                link: link\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold pl-4\",\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { img , title , time , summary , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2rem] bg-dark\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"w-full inline-block cursor-pointer overflow-hidden rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: title,\n                    className: \"w-full h-auto \",\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: link,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"capitalize text-2xl font-bold my-2 mt-4 hover:underline\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mb-2\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold\",\n                children: time\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst Articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CodeBucks | Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 85,\n                        columnNumber: 14\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 86,\n                        columnNumber: 14\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 84,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full mb-16 flex flex-col items-center justify-center overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Words Can Change The World!\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 90,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.    Follow this step-by-step guide to integrate Pagination component in your ReactJS project\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.    Follow this step-by-step guide to integrate Pagination component in your ReactJS project\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_loading_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 91,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-4xl w-full text-center my-16 mt-32\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 110,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 111,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 89,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 88,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c4 = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n$RefreshReg$(_c4, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0M7Z0JBQUtyQixXQUFVOzBCQUNiLDRFQUFDN0IsMERBQU1BO29CQUFDNkIsV0FBVTs7c0NBQ2QsOERBQUNqQyxnRUFBWUE7NEJBQUN1RCxNQUFLOzRCQUE4QnRCLFdBQVU7Ozs7OztzQ0FDM0QsOERBQUN1Qjs0QkFBR3ZCLFdBQVU7OzhDQUNWLDhEQUFDUTtvQ0FDRDNCLE9BQU07b0NBQ042QixTQUFRO29DQUVSRCxNQUFLO29DQUNMMUIsTUFBSztvQ0FDTEQsS0FBS04sbUdBQVFBOzs7Ozs7OENBRWIsOERBQUNnQztvQ0FDRDNCLE9BQU07b0NBQ042QixTQUFRO29DQUVSRCxNQUFLO29DQUNMMUIsTUFBSztvQ0FDTEQsS0FBS0wsNkZBQVFBOzs7Ozs7Ozs7Ozs7c0NBSWpCLDhEQUFDc0I7NEJBQUdDLFdBQVU7c0NBQW9EOzs7Ozs7c0NBQ2xFLDhEQUFDdUI7OzhDQUNHLDhEQUFDbkI7b0NBQ0R2QixPQUFNO29DQUNOd0IsTUFBSztvQ0FDTHRCLE1BQUs7b0NBQ0xELEtBQUtKLHVIQUFRQTs7Ozs7OzhDQUliLDhEQUFDMEI7b0NBQ0R2QixPQUFNO29DQUNOd0IsTUFBSztvQ0FDTHRCLE1BQUs7b0NBQ0xELEtBQUtKLHVIQUFRQTs7Ozs7OzhDQUliLDhEQUFDMEI7b0NBQ0R2QixPQUFNO29DQUNOd0IsTUFBSztvQ0FDTHRCLE1BQUs7b0NBQ0xELEtBQUtKLHVIQUFRQTs7Ozs7OzhDQUliLDhEQUFDMEI7b0NBQ0R2QixPQUFNO29DQUNOd0IsTUFBSztvQ0FDTHRCLE1BQUs7b0NBQ0xELEtBQUtKLHVIQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNqQztNQXBFTXVDO0FBcUVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hcnRpY2xlcy5qcz9mNWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRlZFRleHQgZnJvbSBcIkAvY29tcG9uZW50cy9BbmltYXRlZFRleHRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uLHVzZU1vdGlvblZhbHVlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IGFydGljbGUxIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvcGFnaW5hdGlvbiBjb21wb25lbnQgaW4gcmVhY3Rqcy5qcGcnO1xyXG5pbXBvcnQgYXJ0aWNsZTIgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvY3JlYXRlIGxvYWRpbmcgaW4gcmVhY3Rqcy5qcGdcIjtcclxuaW1wb3J0IGFydGljbGUzIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2NyZWF0ZSBtb2RhbCBjb21wb25lbnQgaW4gcmVhY3QgdXNpbmcgcmVhY3QgcG9ydGFscy5wbmdcIjtcclxuXHJcbmNvbnN0IEZyYW1lckltYWdlID0gbW90aW9uKEltYWdlKTtcclxuXHJcblxyXG5jb25zdCBNb3ZpbmdJbWcgPSAoe3RpdGxlLGltZyxsaW5rfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHggPXVzZU1vdGlvblZhbHVlKDApO1xyXG4gICAgY29uc3QgeSA9IHVzZU1vdGlvblZhbHVlKDApO1xyXG4gICAgY29uc3QgaW1nUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlTW92ZShldmVudCl7XHJcbiAgICAgICAgaW1nUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCJcclxuICAgICAgICB4LnNldChldmVudC5wYWdlWCk7XHJcbiAgICAgICAgeS5zZXQoLTEwKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdmVMZWF2ZShldmVudCl7XHJcbiAgICAgICAgaW1nUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgeC5zZXQoMCk7XHJcbiAgICAgICAgeS5zZXQoMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdmV9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3ZlTGVhdmV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxGcmFtZXJJbWFnZSBcclxuICAgICAgICAgICAgc3R5bGU9e3t4OngseTp5fX1cclxuICAgICAgICAgICAgc3JjPXtpbWd9IHJlZj17aW1nUmVmfSBhbHQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInotMXctOTYgaC1hdXRvIGhpZGRlbiBhYnNvbHV0ZSByb3VuZGVkLWxnXCI+PC9GcmFtZXJJbWFnZT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBBcnRpY2xlID0gKHtpbWcsdGl0bGUsZGF0ZSxsaW5rfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgcC00IHB5LTYgbXktNCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1saWdodFxyXG4gICAgICAgIHRleHQtZGFyayBmaXJzdDptdC0wIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgYm9yZGVyLXItNCBib3JkZXItYi00XHJcbiAgICAgICAgXCI+XHJcbiAgICAgICAgICAgIDxNb3ZpbmdJbWcgdGl0bGU9e3RpdGxlfSBpbWc9e2ltZ30gbGluaz17bGlua30+PC9Nb3ZpbmdJbWc+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1zZW1pYm9sZCBwbC00XCI+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBGZWF0dXJlZEFydGljbGUgPSAoe2ltZywgdGl0bGUsIHRpbWUsIHN1bW1hcnksIGxpbmt9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbC1zcGFuLTEgdy1mdWxsIHAtNCBiZy1saWdodCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1kYXJrIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCAtcmlnaHQtMyAtei0xMCB3LVsxMDElXSBoLVsxMDMlXSByb3VuZGVkLWJyLTN4bCByb3VuZGVkLVsycmVtXSBiZy1kYXJrXCIvPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGlubGluZS1ibG9jayBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8RnJhbWVySW1hZ2Ugc3JjPXtpbWd9IGFsdD17dGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gXCJcclxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17e3NjYWxlOjEuMDV9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246MC4yfX1cclxuICAgICAgICA+PC9GcmFtZXJJbWFnZT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHRleHQtMnhsIGZvbnQtYm9sZCBteS0yIG10LTQgaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWItMlwiPntzdW1tYXJ5fTwvcD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1zZW1pYm9sZFwiPnt0aW1lfTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgPHRpdGxlPkNvZGVCdWNrcyB8IEFydGljbGVzIFBhZ2U8L3RpdGxlPlxyXG4gICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImFueSBkZXNjcmlwdGlvblwiPjwvbWV0YT5cclxuICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwicHQtMTZcIj5cclxuICAgICAgICAgICAgICAgIDxBbmltYXRlZFRleHQgdGV4dD1cIldvcmRzIENhbiBDaGFuZ2UgVGhlIFdvcmxkIVwiIGNsYXNzTmFtZT1cIm1iLTE2XCIvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQnVpbGQgQSBDdXN0b20gUGFnaW5hdGlvbiBDb21wb25lbnQgSW4gUmVhY3RqcyBGcm9tIFNjcmF0Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnk9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBjdXN0b20gcGFnaW5hdGlvbiBjb21wb25lbnQgaW4gUmVhY3RKUyBmcm9tIHNjcmF0Y2guIFxyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvdyB0aGlzIHN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnRlZ3JhdGUgUGFnaW5hdGlvbiBjb21wb25lbnQgaW4geW91ciBSZWFjdEpTIHByb2plY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU9XCI5IG1pbiByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMX1cclxuICAgICAgICAgICAgICAgICAgICAgPjwvRmVhdHVyZWRBcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZEFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkJ1aWxkIEEgQ3VzdG9tIFBhZ2luYXRpb24gQ29tcG9uZW50IEluIFJlYWN0anMgRnJvbSBTY3JhdGNoXCJcclxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5PVwiTGVhcm4gaG93IHRvIGJ1aWxkIGEgY3VzdG9tIHBhZ2luYXRpb24gY29tcG9uZW50IGluIFJlYWN0SlMgZnJvbSBzY3JhdGNoLiBcclxuICAgICAgICAgICAgICAgICAgICBGb2xsb3cgdGhpcyBzdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gaW50ZWdyYXRlIFBhZ2luYXRpb24gY29tcG9uZW50IGluIHlvdXIgUmVhY3RKUyBwcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICB0aW1lPVwiOSBtaW4gcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvRmVhdHVyZWRBcnRpY2xlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIHctZnVsbCB0ZXh0LWNlbnRlciBteS0xNiBtdC0zMlwiPkFsbCBBcnRpY2xlczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvcm0gVmFsaWRhdGlvbiBJbiBSZWFjdGpzOiBCdWlsZCBBIFJldXNhYmxlIEN1c3RvbSBIb29rIEZvciBJbnB1dHMgQW5kIEVycm9yIEhhbmRsaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPVwiSnVuZSAxOCAyMDIzXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlM31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9ybSBWYWxpZGF0aW9uIEluIFJlYWN0anM6IEJ1aWxkIEEgUmV1c2FibGUgQ3VzdG9tIEhvb2sgRm9yIElucHV0cyBBbmQgRXJyb3IgSGFuZGxpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9XCJKdW5lIDE4IDIwMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWc9e2FydGljbGUzfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb3JtIFZhbGlkYXRpb24gSW4gUmVhY3RqczogQnVpbGQgQSBSZXVzYWJsZSBDdXN0b20gSG9vayBGb3IgSW5wdXRzIEFuZCBFcnJvciBIYW5kbGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIkp1bmUgMTggMjAyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvcm0gVmFsaWRhdGlvbiBJbiBSZWFjdGpzOiBCdWlsZCBBIFJldXNhYmxlIEN1c3RvbSBIb29rIEZvciBJbnB1dHMgQW5kIEVycm9yIEhhbmRsaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPVwiSnVuZSAxOCAyMDIzXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlM31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICA8L21haW4+XHJcbiAgICAgICAgIDwvPlxyXG4gICAgICAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzOyJdLCJuYW1lcyI6WyJBbmltYXRlZFRleHQiLCJIZWFkIiwiTGluayIsIkltYWdlIiwiTGF5b3V0IiwiUmVhY3QiLCJ1c2VSZWYiLCJtb3Rpb24iLCJ1c2VNb3Rpb25WYWx1ZSIsImFydGljbGUxIiwiYXJ0aWNsZTIiLCJhcnRpY2xlMyIsIkZyYW1lckltYWdlIiwiTW92aW5nSW1nIiwidGl0bGUiLCJpbWciLCJsaW5rIiwieCIsInkiLCJpbWdSZWYiLCJoYW5kbGVNb3ZlIiwiZXZlbnQiLCJjdXJyZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0IiwicGFnZVgiLCJoYW5kbGVNb3ZlTGVhdmUiLCJocmVmIiwidGFyZ2V0Iiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlTGVhdmUiLCJoMiIsImNsYXNzTmFtZSIsInNyYyIsInJlZiIsImFsdCIsIkFydGljbGUiLCJkYXRlIiwibGkiLCJzcGFuIiwiRmVhdHVyZWRBcnRpY2xlIiwidGltZSIsInN1bW1hcnkiLCJkaXYiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJwIiwiQXJ0aWNsZXMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwidGV4dCIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});