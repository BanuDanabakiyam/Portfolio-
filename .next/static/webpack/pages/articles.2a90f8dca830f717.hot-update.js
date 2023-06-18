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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/articles/pagination component in reactjs.jpg */ \"./public/images/articles/pagination component in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_loading_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/articles/create loading in reactjs.jpg */ \"./public/images/articles/create loading in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/articles/create modal component in react using react portals.png */ \"./public/images/articles/create modal component in react using react portals.png\");\n/* harmony import */ var _public_images_articles_form_Validation_in_reactjs_using_custom_react_Hook_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/images/articles/form Validation in reactjs using custom react Hook.png */ \"./public/images/articles/form Validation in reactjs using custom react Hook.png\");\n/* harmony import */ var _public_images_articles_smooth_scrolling_in_reactjs_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/images/articles/smooth scrolling in reactjs.png */ \"./public/images/articles/smooth scrolling in reactjs.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion)((next_image__WEBPACK_IMPORTED_MODULE_4___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    function handleMove(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n        y.set(-10);\n    }\n    function handleMoveLeave(event) {\n        imgRef.current.style.display = \"none\";\n        x.set(0);\n        y.set(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMove,\n        onMouseLeave: handleMoveLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"capitalize text-xl font-semibold hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                style: {\n                    x: x,\n                    y: y\n                },\n                initial: {\n                    opacity: 0\n                },\n                whileInView: {\n                    opacity: 1,\n                    transition: {\n                        duration: 0.2\n                    }\n                },\n                src: img,\n                ref: imgRef,\n                alt: \"title\",\n                className: \"z-10 w-96 h-auto hidden absolute rounded-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { img , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion.li, {\n        initial: {\n            y: 200\n        },\n        whileInView: {\n            y: 0\n        },\n        className: \"relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light   text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4   \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                title: title,\n                img: img,\n                link: link\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold pl-4\",\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { img , title , time , summary , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2rem] bg-dark\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"w-full inline-block cursor-pointer overflow-hidden rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: title,\n                    className: \"w-full h-auto \",\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: link,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"capitalize text-2xl font-bold my-2 mt-4 hover:underline\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 79,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mb-2\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold\",\n                children: time\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst Articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CodeBucks | Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 92,\n                        columnNumber: 14\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 93,\n                        columnNumber: 14\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 91,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full mb-16 flex flex-col items-center justify-center overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Words Can Change The World!\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 97,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.    Follow this step-by-step guide to integrate Pagination component in your ReactJS project\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.    Follow this step-by-step guide to integrate Pagination component in your ReactJS project\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_loading_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 98,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-4xl w-full text-center my-16 mt-32\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 117,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_form_Validation_in_reactjs_using_custom_react_Hook_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_smooth_scrolling_in_reactjs_png__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 118,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 95,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c4 = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n$RefreshReg$(_c4, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tIFwiQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sdXNlTW90aW9uVmFsdWUgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgYXJ0aWNsZTEgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9wYWdpbmF0aW9uIGNvbXBvbmVudCBpbiByZWFjdGpzLmpwZyc7XHJcbmltcG9ydCBhcnRpY2xlMiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9jcmVhdGUgbG9hZGluZyBpbiByZWFjdGpzLmpwZ1wiO1xyXG5pbXBvcnQgYXJ0aWNsZTMgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvY3JlYXRlIG1vZGFsIGNvbXBvbmVudCBpbiByZWFjdCB1c2luZyByZWFjdCBwb3J0YWxzLnBuZ1wiO1xyXG5pbXBvcnQgYXJ0aWNsZTQgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvZm9ybSBWYWxpZGF0aW9uIGluIHJlYWN0anMgdXNpbmcgY3VzdG9tIHJlYWN0IEhvb2sucG5nXCI7XHJcbmltcG9ydCBhcnRpY2xlNSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9zbW9vdGggc2Nyb2xsaW5nIGluIHJlYWN0anMucG5nXCI7XHJcblxyXG5jb25zdCBGcmFtZXJJbWFnZSA9IG1vdGlvbihJbWFnZSk7XHJcblxyXG5cclxuY29uc3QgTW92aW5nSW1nID0gKHt0aXRsZSxpbWcsbGlua30pID0+IHtcclxuXHJcbiAgICBjb25zdCB4ID11c2VNb3Rpb25WYWx1ZSgwKTtcclxuICAgIGNvbnN0IHkgPSB1c2VNb3Rpb25WYWx1ZSgwKTtcclxuICAgIGNvbnN0IGltZ1JlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQpe1xyXG4gICAgICAgIGltZ1JlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgeC5zZXQoZXZlbnQucGFnZVgpO1xyXG4gICAgICAgIHkuc2V0KC0xMCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3ZlTGVhdmUoZXZlbnQpe1xyXG4gICAgICAgIGltZ1JlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIHguc2V0KDApO1xyXG4gICAgICAgIHkuc2V0KDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3ZlfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW92ZUxlYXZlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgdGV4dC14bCBmb250LXNlbWlib2xkIGhvdmVyOnVuZGVybGluZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8RnJhbWVySW1hZ2UgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7eDp4LHk6eX19XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OjB9fVxyXG4gICAgICAgICAgICB3aGlsZUluVmlldz17e29wYWNpdHk6MSwgdHJhbnNpdGlvbjp7ZHVyYXRpb246MC4yfX19XHJcbiAgICAgICAgICAgIHNyYz17aW1nfSByZWY9e2ltZ1JlZn0gYWx0PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ6LTEwIHctOTYgaC1hdXRvIGhpZGRlbiBhYnNvbHV0ZSByb3VuZGVkLWxnXCI+PC9GcmFtZXJJbWFnZT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBBcnRpY2xlID0gKHtpbWcsdGl0bGUsZGF0ZSxsaW5rfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxtb3Rpb24ubGlcclxuICAgICAgICBpbml0aWFsPXt7eToyMDB9fVxyXG4gICAgICAgIHdoaWxlSW5WaWV3PXt7eTowLH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHAtNCBweS02IG15LTQgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctbGlnaHRcclxuICAgICAgICB0ZXh0LWRhcmsgZmlyc3Q6bXQtMCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1kYXJrIGJvcmRlci1yLTQgYm9yZGVyLWItNFxyXG4gICAgICAgIFwiPlxyXG4gICAgICAgICAgICA8TW92aW5nSW1nIHRpdGxlPXt0aXRsZX0gaW1nPXtpbWd9IGxpbms9e2xpbmt9PjwvTW92aW5nSW1nPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGQgcGwtNFwiPntkYXRlfTwvc3Bhbj5cclxuICAgICAgICA8L21vdGlvbi5saT5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IEZlYXR1cmVkQXJ0aWNsZSA9ICh7aW1nLCB0aXRsZSwgdGltZSwgc3VtbWFyeSwgbGlua30pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmVsYXRpdmUgY29sLXNwYW4tMSB3LWZ1bGwgcC00IGJnLWxpZ2h0IGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgcm91bmRlZC0yeGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIC1yaWdodC0zIC16LTEwIHctWzEwMSVdIGgtWzEwMyVdIHJvdW5kZWQtYnItM3hsIHJvdW5kZWQtWzJyZW1dIGJnLWRhcmtcIi8+XHJcbiAgICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaW5saW5lLWJsb2NrIGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGcmFtZXJJbWFnZSBzcmM9e2ltZ30gYWx0PXt0aXRsZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBcIlxyXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7c2NhbGU6MS4wNX19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjowLjJ9fVxyXG4gICAgICAgID48L0ZyYW1lckltYWdlPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgdGV4dC0yeGwgZm9udC1ib2xkIG15LTIgbXQtNCBob3Zlcjp1bmRlcmxpbmVcIj57dGl0bGV9PC9oMj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtYi0yXCI+e3N1bW1hcnl9PC9wPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LXNlbWlib2xkXCI+e3RpbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3QgQXJ0aWNsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICA8dGl0bGU+Q29kZUJ1Y2tzIHwgQXJ0aWNsZXMgUGFnZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiYW55IGRlc2NyaXB0aW9uXCI+PC9tZXRhPlxyXG4gICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInctZnVsbCBtYi0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJwdC0xNlwiPlxyXG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PVwiV29yZHMgQ2FuIENoYW5nZSBUaGUgV29ybGQhXCIgY2xhc3NOYW1lPVwibWItMTZcIi8+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCdWlsZCBBIEN1c3RvbSBQYWdpbmF0aW9uIENvbXBvbmVudCBJbiBSZWFjdGpzIEZyb20gU2NyYXRjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3VtbWFyeT1cIkxlYXJuIGhvdyB0byBidWlsZCBhIGN1c3RvbSBwYWdpbmF0aW9uIGNvbXBvbmVudCBpbiBSZWFjdEpTIGZyb20gc2NyYXRjaC4gXHJcbiAgICAgICAgICAgICAgICAgICAgRm9sbG93IHRoaXMgc3RlcC1ieS1zdGVwIGd1aWRlIHRvIGludGVncmF0ZSBQYWdpbmF0aW9uIGNvbXBvbmVudCBpbiB5b3VyIFJlYWN0SlMgcHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZT1cIjkgbWluIHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWc9e2FydGljbGUxfVxyXG4gICAgICAgICAgICAgICAgICAgICA+PC9GZWF0dXJlZEFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQnVpbGQgQSBDdXN0b20gUGFnaW5hdGlvbiBDb21wb25lbnQgSW4gUmVhY3RqcyBGcm9tIFNjcmF0Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnk9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBjdXN0b20gcGFnaW5hdGlvbiBjb21wb25lbnQgaW4gUmVhY3RKUyBmcm9tIHNjcmF0Y2guIFxyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvdyB0aGlzIHN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnRlZ3JhdGUgUGFnaW5hdGlvbiBjb21wb25lbnQgaW4geW91ciBSZWFjdEpTIHByb2plY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU9XCI5IG1pbiByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMn1cclxuICAgICAgICAgICAgICAgICAgICA+PC9GZWF0dXJlZEFydGljbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC00eGwgdy1mdWxsIHRleHQtY2VudGVyIG15LTE2IG10LTMyXCI+QWxsIEFydGljbGVzPC9oMj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9ybSBWYWxpZGF0aW9uIEluIFJlYWN0anM6IEJ1aWxkIEEgUmV1c2FibGUgQ3VzdG9tIEhvb2sgRm9yIElucHV0cyBBbmQgRXJyb3IgSGFuZGxpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9XCJKdW5lIDE4IDIwMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWc9e2FydGljbGUzfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb3JtIFZhbGlkYXRpb24gSW4gUmVhY3RqczogQnVpbGQgQSBSZXVzYWJsZSBDdXN0b20gSG9vayBGb3IgSW5wdXRzIEFuZCBFcnJvciBIYW5kbGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIkp1bmUgMTggMjAyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvcm0gVmFsaWRhdGlvbiBJbiBSZWFjdGpzOiBCdWlsZCBBIFJldXNhYmxlIEN1c3RvbSBIb29rIEZvciBJbnB1dHMgQW5kIEVycm9yIEhhbmRsaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPVwiSnVuZSAxOCAyMDIzXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlNX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICA8L21haW4+XHJcbiAgICAgICAgIDwvPlxyXG4gICAgICAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzOyJdLCJuYW1lcyI6WyJBbmltYXRlZFRleHQiLCJIZWFkIiwiTGluayIsIkltYWdlIiwiTGF5b3V0IiwiUmVhY3QiLCJ1c2VSZWYiLCJtb3Rpb24iLCJ1c2VNb3Rpb25WYWx1ZSIsImFydGljbGUxIiwiYXJ0aWNsZTIiLCJhcnRpY2xlMyIsImFydGljbGU0IiwiYXJ0aWNsZTUiLCJGcmFtZXJJbWFnZSIsIk1vdmluZ0ltZyIsInRpdGxlIiwiaW1nIiwibGluayIsIngiLCJ5IiwiaW1nUmVmIiwiaGFuZGxlTW92ZSIsImV2ZW50IiwiY3VycmVudCIsInN0eWxlIiwiZGlzcGxheSIsInNldCIsInBhZ2VYIiwiaGFuZGxlTW92ZUxlYXZlIiwiaHJlZiIsInRhcmdldCIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZUxlYXZlIiwiaDIiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsIndoaWxlSW5WaWV3IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3JjIiwicmVmIiwiYWx0IiwiQXJ0aWNsZSIsImRhdGUiLCJsaSIsInNwYW4iLCJGZWF0dXJlZEFydGljbGUiLCJ0aW1lIiwic3VtbWFyeSIsImRpdiIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInAiLCJBcnRpY2xlcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJ0ZXh0IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});