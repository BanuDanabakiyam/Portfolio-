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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/articles/pagination component in reactjs.jpg */ \"./public/images/articles/pagination component in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_loading_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/articles/create loading in reactjs.jpg */ \"./public/images/articles/create loading in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/articles/create modal component in react using react portals.png */ \"./public/images/articles/create modal component in react using react portals.png\");\n/* harmony import */ var _public_images_articles_form_Validation_in_reactjs_using_custom_react_Hook_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/images/articles/form Validation in reactjs using custom react Hook.png */ \"./public/images/articles/form Validation in reactjs using custom react Hook.png\");\n/* harmony import */ var _public_images_articles_smooth_scrolling_in_reactjs_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/images/articles/smooth scrolling in reactjs.png */ \"./public/images/articles/smooth scrolling in reactjs.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion)((next_image__WEBPACK_IMPORTED_MODULE_4___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    function handleMove(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n        y.set(-10);\n    }\n    function handleMoveLeave(event) {\n        imgRef.current.style.display = \"none\";\n        x.set(0);\n        y.set(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMove,\n        onMouseLeave: handleMoveLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"capitalize text-xl font-semibold hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                style: {\n                    x: x,\n                    y: y\n                },\n                initial: {\n                    opacity: 0\n                },\n                whileInView: {\n                    opacity: 1,\n                    transition: {\n                        duration: 0.2\n                    }\n                },\n                src: img,\n                ref: imgRef,\n                alt: \"title\",\n                className: \"z-10 w-96 h-auto hidden absolute rounded-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_12__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { img , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion.li, {\n        initial: {\n            y: 200\n        },\n        whileInView: {\n            y: 0,\n            tran\n        },\n        className: \"relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light   text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4   \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                title: title,\n                img: img,\n                link: link\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold pl-4\",\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { img , title , time , summary , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2rem] bg-dark\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"w-full inline-block cursor-pointer overflow-hidden rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: title,\n                    className: \"w-full h-auto \",\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: link,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"capitalize text-2xl font-bold my-2 mt-4 hover:underline\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 79,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mb-2\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold\",\n                children: time\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst Articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CodeBucks | Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 92,\n                        columnNumber: 14\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                        lineNumber: 93,\n                        columnNumber: 14\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 91,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full mb-16 flex flex-col items-center justify-center overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Words Can Change The World!\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 97,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.    Follow this step-by-step guide to integrate Pagination component in your ReactJS project\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.    Follow this step-by-step guide to integrate Pagination component in your ReactJS project\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_loading_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 98,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-4xl w-full text-center my-16 mt-32\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 117,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_form_Validation_in_reactjs_using_custom_react_Hook_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                    date: \"June 18 2023\",\n                                    link: \"/\",\n                                    img: _public_images_articles_smooth_scrolling_in_reactjs_png__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                            lineNumber: 118,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\welcome\\\\Desktop\\\\Projects\\\\Pro-Portfolio\\\\Portfolio-\\\\src\\\\pages\\\\articles.js\",\n                lineNumber: 95,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c4 = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n$RefreshReg$(_c4, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZjVjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gXCJAL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbix1c2VNb3Rpb25WYWx1ZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBhcnRpY2xlMSBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL3BhZ2luYXRpb24gY29tcG9uZW50IGluIHJlYWN0anMuanBnJztcclxuaW1wb3J0IGFydGljbGUyIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2NyZWF0ZSBsb2FkaW5nIGluIHJlYWN0anMuanBnXCI7XHJcbmltcG9ydCBhcnRpY2xlMyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9jcmVhdGUgbW9kYWwgY29tcG9uZW50IGluIHJlYWN0IHVzaW5nIHJlYWN0IHBvcnRhbHMucG5nXCI7XHJcbmltcG9ydCBhcnRpY2xlNCBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9mb3JtIFZhbGlkYXRpb24gaW4gcmVhY3RqcyB1c2luZyBjdXN0b20gcmVhY3QgSG9vay5wbmdcIjtcclxuaW1wb3J0IGFydGljbGU1IGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL3Ntb290aCBzY3JvbGxpbmcgaW4gcmVhY3Rqcy5wbmdcIjtcclxuXHJcbmNvbnN0IEZyYW1lckltYWdlID0gbW90aW9uKEltYWdlKTtcclxuXHJcblxyXG5jb25zdCBNb3ZpbmdJbWcgPSAoe3RpdGxlLGltZyxsaW5rfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHggPXVzZU1vdGlvblZhbHVlKDApO1xyXG4gICAgY29uc3QgeSA9IHVzZU1vdGlvblZhbHVlKDApO1xyXG4gICAgY29uc3QgaW1nUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlTW92ZShldmVudCl7XHJcbiAgICAgICAgaW1nUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCJcclxuICAgICAgICB4LnNldChldmVudC5wYWdlWCk7XHJcbiAgICAgICAgeS5zZXQoLTEwKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdmVMZWF2ZShldmVudCl7XHJcbiAgICAgICAgaW1nUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgeC5zZXQoMCk7XHJcbiAgICAgICAgeS5zZXQoMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdmV9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3ZlTGVhdmV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxGcmFtZXJJbWFnZSBcclxuICAgICAgICAgICAgc3R5bGU9e3t4OngseTp5fX1cclxuICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6MH19XHJcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7b3BhY2l0eToxLCB0cmFuc2l0aW9uOntkdXJhdGlvbjowLjJ9fX1cclxuICAgICAgICAgICAgc3JjPXtpbWd9IHJlZj17aW1nUmVmfSBhbHQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInotMTAgdy05NiBoLWF1dG8gaGlkZGVuIGFic29sdXRlIHJvdW5kZWQtbGdcIj48L0ZyYW1lckltYWdlPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGUgPSAoe2ltZyx0aXRsZSxkYXRlLGxpbmt9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG1vdGlvbi5saVxyXG4gICAgICAgIGluaXRpYWw9e3t5OjIwMH19XHJcbiAgICAgICAgd2hpbGVJblZpZXc9e3t5OjAsIHRyYW59fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBwLTQgcHktNiBteS00IHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLWxpZ2h0XHJcbiAgICAgICAgdGV4dC1kYXJrIGZpcnN0Om10LTAgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayBib3JkZXItci00IGJvcmRlci1iLTRcclxuICAgICAgICBcIj5cclxuICAgICAgICAgICAgPE1vdmluZ0ltZyB0aXRsZT17dGl0bGV9IGltZz17aW1nfSBsaW5rPXtsaW5rfT48L01vdmluZ0ltZz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LXNlbWlib2xkIHBsLTRcIj57ZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgPC9tb3Rpb24ubGk+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBGZWF0dXJlZEFydGljbGUgPSAoe2ltZywgdGl0bGUsIHRpbWUsIHN1bW1hcnksIGxpbmt9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbC1zcGFuLTEgdy1mdWxsIHAtNCBiZy1saWdodCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1kYXJrIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCAtcmlnaHQtMyAtei0xMCB3LVsxMDElXSBoLVsxMDMlXSByb3VuZGVkLWJyLTN4bCByb3VuZGVkLVsycmVtXSBiZy1kYXJrXCIvPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGlubGluZS1ibG9jayBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8RnJhbWVySW1hZ2Ugc3JjPXtpbWd9IGFsdD17dGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gXCJcclxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17e3NjYWxlOjEuMDV9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246MC4yfX1cclxuICAgICAgICA+PC9GcmFtZXJJbWFnZT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHRleHQtMnhsIGZvbnQtYm9sZCBteS0yIG10LTQgaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWItMlwiPntzdW1tYXJ5fTwvcD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1zZW1pYm9sZFwiPnt0aW1lfTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgPHRpdGxlPkNvZGVCdWNrcyB8IEFydGljbGVzIFBhZ2U8L3RpdGxlPlxyXG4gICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImFueSBkZXNjcmlwdGlvblwiPjwvbWV0YT5cclxuICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwicHQtMTZcIj5cclxuICAgICAgICAgICAgICAgIDxBbmltYXRlZFRleHQgdGV4dD1cIldvcmRzIENhbiBDaGFuZ2UgVGhlIFdvcmxkIVwiIGNsYXNzTmFtZT1cIm1iLTE2XCIvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQnVpbGQgQSBDdXN0b20gUGFnaW5hdGlvbiBDb21wb25lbnQgSW4gUmVhY3RqcyBGcm9tIFNjcmF0Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnk9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBjdXN0b20gcGFnaW5hdGlvbiBjb21wb25lbnQgaW4gUmVhY3RKUyBmcm9tIHNjcmF0Y2guIFxyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvdyB0aGlzIHN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnRlZ3JhdGUgUGFnaW5hdGlvbiBjb21wb25lbnQgaW4geW91ciBSZWFjdEpTIHByb2plY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU9XCI5IG1pbiByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMX1cclxuICAgICAgICAgICAgICAgICAgICAgPjwvRmVhdHVyZWRBcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZEFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkJ1aWxkIEEgQ3VzdG9tIFBhZ2luYXRpb24gQ29tcG9uZW50IEluIFJlYWN0anMgRnJvbSBTY3JhdGNoXCJcclxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5PVwiTGVhcm4gaG93IHRvIGJ1aWxkIGEgY3VzdG9tIHBhZ2luYXRpb24gY29tcG9uZW50IGluIFJlYWN0SlMgZnJvbSBzY3JhdGNoLiBcclxuICAgICAgICAgICAgICAgICAgICBGb2xsb3cgdGhpcyBzdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gaW50ZWdyYXRlIFBhZ2luYXRpb24gY29tcG9uZW50IGluIHlvdXIgUmVhY3RKUyBwcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICB0aW1lPVwiOSBtaW4gcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvRmVhdHVyZWRBcnRpY2xlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIHctZnVsbCB0ZXh0LWNlbnRlciBteS0xNiBtdC0zMlwiPkFsbCBBcnRpY2xlczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvcm0gVmFsaWRhdGlvbiBJbiBSZWFjdGpzOiBCdWlsZCBBIFJldXNhYmxlIEN1c3RvbSBIb29rIEZvciBJbnB1dHMgQW5kIEVycm9yIEhhbmRsaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPVwiSnVuZSAxOCAyMDIzXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlM31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9ybSBWYWxpZGF0aW9uIEluIFJlYWN0anM6IEJ1aWxkIEEgUmV1c2FibGUgQ3VzdG9tIEhvb2sgRm9yIElucHV0cyBBbmQgRXJyb3IgSGFuZGxpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9XCJKdW5lIDE4IDIwMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWc9e2FydGljbGU0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb3JtIFZhbGlkYXRpb24gSW4gUmVhY3RqczogQnVpbGQgQSBSZXVzYWJsZSBDdXN0b20gSG9vayBGb3IgSW5wdXRzIEFuZCBFcnJvciBIYW5kbGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIkp1bmUgMTggMjAyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICA8Lz5cclxuICAgICAgICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlczsiXSwibmFtZXMiOlsiQW5pbWF0ZWRUZXh0IiwiSGVhZCIsIkxpbmsiLCJJbWFnZSIsIkxheW91dCIsIlJlYWN0IiwidXNlUmVmIiwibW90aW9uIiwidXNlTW90aW9uVmFsdWUiLCJhcnRpY2xlMSIsImFydGljbGUyIiwiYXJ0aWNsZTMiLCJhcnRpY2xlNCIsImFydGljbGU1IiwiRnJhbWVySW1hZ2UiLCJNb3ZpbmdJbWciLCJ0aXRsZSIsImltZyIsImxpbmsiLCJ4IiwieSIsImltZ1JlZiIsImhhbmRsZU1vdmUiLCJldmVudCIsImN1cnJlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXQiLCJwYWdlWCIsImhhbmRsZU1vdmVMZWF2ZSIsImhyZWYiLCJ0YXJnZXQiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VMZWF2ZSIsImgyIiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInNyYyIsInJlZiIsImFsdCIsIkFydGljbGUiLCJkYXRlIiwibGkiLCJ0cmFuIiwic3BhbiIsIkZlYXR1cmVkQXJ0aWNsZSIsInRpbWUiLCJzdW1tYXJ5IiwiZGl2Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwicCIsIkFydGljbGVzIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWFpbiIsInRleHQiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});