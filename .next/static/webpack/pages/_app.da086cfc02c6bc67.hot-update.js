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

/***/ "./src/components/hooks/useThemeSwitcher.js":
/*!**************************************************!*\
  !*** ./src/components/hooks/useThemeSwitcher.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useThemerSwitcher = ()=>{\n    _s();\n    const preferDarkQuery = \"(prefer-color-scheme: dark)\";\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const mediaQuery = window.matchMedia(preferDarkQuery);\n        const userPref = window.localStorage.getItem(\"theme\");\n        const handleChange = ()=>{\n            if (userPref) {\n                let check = userPref === \"dark\" ? \"dark\" : \"light\";\n                setMode(check);\n                if (check === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                } else {\n                    document.documentElement.classList.remove(\"dark\");\n                }\n            } else {\n                let check = mediaQuery.matches ? \"dark\" : \"light\";\n                setMode(check);\n                if (check === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                } else {\n                    document.documentElement.classList.remove(\"dark\");\n                }\n            }\n        };\n        h;\n        mediaQuery.addEventListener(\"change\", handleChange);\n        return ()=>mediaQuery.removeEventListener(\"change\", handleChange);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (mode === \"dark\") {\n            window.localStorage.setItem(\"theme\", \"dark\");\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            window.localStorage.setItem(\"theme\", \"dark\");\n            document.documentElement.classList.remove(\"dark\");\n        }\n    }, [\n        mode\n    ]);\n    return [\n        mode,\n        setMode\n    ];\n};\n_s(useThemerSwitcher, \"ImorwBueLsHEOImKuw/vqku/JqU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useThemerSwitcher);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VUaGVtZVN3aXRjaGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBbUQ7QUFDbkQsTUFBTUcsb0JBQW9CLElBQU07O0lBQzVCLE1BQU1DLGtCQUFrQjtJQUN4QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakNELGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNTSxhQUFhQyxPQUFPQyxVQUFVLENBQUNMO1FBQ3JDLE1BQU1NLFdBQVdGLE9BQU9HLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBRTdDLE1BQU1DLGVBQWUsSUFBTTtZQUN2QixJQUFHSCxVQUFTO2dCQUNSLElBQUlJLFFBQVFKLGFBQWEsU0FBUyxTQUFTLE9BQU87Z0JBQ2xESixRQUFRUTtnQkFDUixJQUFHQSxVQUFVLFFBQU87b0JBQ2hCQyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO2dCQUMzQyxPQUFLO29CQUNESCxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO2dCQUM5QyxDQUFDO1lBQ0wsT0FBSztnQkFDRCxJQUFJTCxRQUFRUCxXQUFXYSxPQUFPLEdBQUcsU0FBUyxPQUFPO2dCQUNqRGQsUUFBUVE7Z0JBQ1IsSUFBR0EsVUFBVSxRQUFPO29CQUNoQkMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztnQkFDM0MsT0FBSztvQkFDREgsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztnQkFDOUMsQ0FBQztZQUNMLENBQUM7UUFDTDtRQUNBRTtRQUNBZCxXQUFXZSxnQkFBZ0IsQ0FBQyxVQUFVVDtRQUN0QyxPQUFNLElBQU1OLFdBQVdnQixtQkFBbUIsQ0FBQyxVQUFVVjtJQUN6RCxHQUFFLEVBQUU7SUFFSlosZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUdJLFNBQVMsUUFBTztZQUNmRyxPQUFPRyxZQUFZLENBQUNhLE9BQU8sQ0FBQyxTQUFRO1lBQ3BDVCxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQzNDLE9BQUs7WUFDRFYsT0FBT0csWUFBWSxDQUFDYSxPQUFPLENBQUMsU0FBUTtZQUNwQ1QsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztRQUM5QyxDQUFDO0lBQ0wsR0FBRTtRQUFDZDtLQUFLO0lBQ1IsT0FBTTtRQUFDQTtRQUFNQztLQUFRO0FBRXpCO0dBMUNNSDtBQTJDTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvb2tzL3VzZVRoZW1lU3dpdGNoZXIuanM/NzY0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCB1c2VUaGVtZXJTd2l0Y2hlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByZWZlckRhcmtRdWVyeSA9IFwiKHByZWZlci1jb2xvci1zY2hlbWU6IGRhcmspXCI7XHJcbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKHByZWZlckRhcmtRdWVyeSk7XHJcbiAgICAgICAgY29uc3QgdXNlclByZWYgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih1c2VyUHJlZil7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSB1c2VyUHJlZiA9PT0gXCJkYXJrXCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIjtcclxuICAgICAgICAgICAgICAgIHNldE1vZGUoY2hlY2spO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hlY2sgPT09IFwiZGFya1wiKXtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gbWVkaWFRdWVyeS5tYXRjaGVzID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICBzZXRNb2RlKGNoZWNrKTtcclxuICAgICAgICAgICAgICAgIGlmKGNoZWNrID09PSBcImRhcmtcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhcclxuICAgICAgICBtZWRpYVF1ZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlQ2hhbmdlKVxyXG4gICAgICAgIHJldHVybigpID0+IG1lZGlhUXVlcnkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVDaGFuZ2UpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYobW9kZSA9PT0gXCJkYXJrXCIpe1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLFwiZGFya1wiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLFwiZGFya1wiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW21vZGVdKVxyXG4gICAgcmV0dXJuW21vZGUsIHNldE1vZGVdXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZVRoZW1lclN3aXRjaGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVGhlbWVyU3dpdGNoZXIiLCJwcmVmZXJEYXJrUXVlcnkiLCJtb2RlIiwic2V0TW9kZSIsIm1lZGlhUXVlcnkiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwidXNlclByZWYiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY2hlY2siLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm1hdGNoZXMiLCJoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/hooks/useThemeSwitcher.js\n"));

/***/ })

});