/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Font */\n\n/* Reset */\n*, *::after, *::before {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Quicksand', sans-serif;\n}\n\nbody {\n    background-color: whitesmoke;\n    height: 100vh;\n    max-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n/* Form */\n.form-wrapper {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.5);\n}\n\n.form-container {\n    width: 30vw;\n    background-color: white;\n    padding: 24px 32px;\n}\n\n.project-form {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.project-form > * {\n    flex: 1 100%;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n.project-form label {\n    font-size: 16px;\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n\n.project-form input, .project-form textarea {\n    font-size: 14px;\n    padding: 4px;\n}\n\n.project-form legend {\n    text-align: center;\n    font-family: 'Roboto Condensed', sans-serif;\n    font-weight: 700;\n    font-size: 32px;\n}\n\n.project-form span {\n    margin-top: 16px;\n    text-align: center;\n}\n\n.project-submit {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 18px;\n    font-weight: 600;\n    color: white;\n    border: 0;\n    padding: 6px 12px;\n    border-radius: 6px;\n    background-color: rgb(255,36,0);\n    cursor: pointer;\n}\n\n/* Header */\n.header-container {\n    background-color: rgb(255,36,0);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 12px 48px;\n}\n\n.header-title {\n    color: white;\n    font-size: 36px;\n    font-weight: 700;\n}\n\n.nav-list {\n    display: flex;\n    gap: 24px;\n}\n\n.nav-list > * {\n    color: white;\n    font-weight: 400;\n    font-size: 24px;\n    list-style-type: none;\n}\n\n/* Mid-content */\n.mid-content {\n    display: flex;\n    flex: 1;\n}\n\n.side-bar {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    padding: 12px;\n    flex: 1 25vw;\n    background-color: rgb(52,52,52);\n}\n\n.main-content {\n    flex: 1 75vw;\n}\n\n/* Side bar */\n.side-bar-header {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 8vh;\n    padding: 8px;\n    border-radius: 20px;\n}\n\n.create-project-button {\n    background: white;\n    border-radius: 50%;\n    height: 64px;\n    width: 64px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.create-project-button img {\n    cursor: pointer;\n    height: 48px;\n    width: 48px;\n}\n/* Main content */\n\n    /* Main content header */\n    .header-content {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        border-bottom: 0.25px solid black;\n        padding: 12px 24px;\n        margin: 0 24px;\n    }\n\n    .main-title {\n        font-size: 48px;\n        font-family: 'Roboto Condensed', sans-serf;\n    }\n    \n    .header-right {\n        display: flex;\n        align-items: center;\n        width: 48px;\n    }\n\n    .create-task-button img {\n        padding: 4px;\n        width: 48x;\n        height: 48px;\n        cursor: pointer;\n    }\n\n    .expand {\n        cursor: pointer;\n    }\n\n    .drop-icon {\n        margin-top: 6px;\n        width: 24px;\n        height: 24px;\n        cursor: pointer;\n    }\n\n    /* Content box */\n    .content-box {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 24px 8px;\n    }\n\n    /* Project Box */\n    .project-box {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-between;\n        background-color: white;\n        margin-bottom: 8px;\n        border-radius: 15px;\n        border: 0.25px solid gainsboro;\n        padding: 12px 24px;\n        transition: height 400ms ease-out;\n    }\n\n    .project-content {\n        display: flex;\n        align-items: center;\n        gap: 16px;\n    }\n\n    .project-header {\n        flex: 1 100%;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .unchecked-circle {\n        display: block;\n        border: 1px solid black;\n        border-radius: 50%;\n        width: 20px;\n        height: 20px;\n        cursor: pointer;\n    }\n\n    .project-title {\n        font-size: 24px;\n        font-family: 'Roboto Condensed';\n        font-weight: 500;\n    }\n\n    .project-desc {\n        flex: 1 100%;\n        margin-top: 4px;\n        padding-top: 8px;\n        border-top: 0.25px solid black;\n    }\n\n    /* Task box */\n    .task-box {\n        margin: 0 24px;\n        padding: 12px 24px;\n        background-color: white;\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        font-size: 22px;\n        gap: 16px;\n        border-bottom: 0.25px solid black;  \n    }\n\n    .task-header {\n        display: flex;\n        flex: 1 100%;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .task-header span {\n        display: flex;\n        align-items: center;\n    }\n\n    .task-title {\n        font-weight: 500;\n        margin-left: 16px;\n    }\n\n    .task-desc {\n        flex: 1 100%;\n        margin-top: 4px;\n        margin-bottom: 8px;\n        padding: 8px 16px;\n        background-color: whitesmoke;\n        border: 0.5px dashed black;\n        cursor: pointer;\n    }\n\n    input[type='text'] {\n        width: 100%;\n    }", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["\n/* Font */\n@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');\n\n/* Reset */\n*, *::after, *::before {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Quicksand', sans-serif;\n}\n\nbody {\n    background-color: whitesmoke;\n    height: 100vh;\n    max-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n/* Form */\n.form-wrapper {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.5);\n}\n\n.form-container {\n    width: 30vw;\n    background-color: white;\n    padding: 24px 32px;\n}\n\n.project-form {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.project-form > * {\n    flex: 1 100%;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n.project-form label {\n    font-size: 16px;\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n\n.project-form input, .project-form textarea {\n    font-size: 14px;\n    padding: 4px;\n}\n\n.project-form legend {\n    text-align: center;\n    font-family: 'Roboto Condensed', sans-serif;\n    font-weight: 700;\n    font-size: 32px;\n}\n\n.project-form span {\n    margin-top: 16px;\n    text-align: center;\n}\n\n.project-submit {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 18px;\n    font-weight: 600;\n    color: white;\n    border: 0;\n    padding: 6px 12px;\n    border-radius: 6px;\n    background-color: rgb(255,36,0);\n    cursor: pointer;\n}\n\n/* Header */\n.header-container {\n    background-color: rgb(255,36,0);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 12px 48px;\n}\n\n.header-title {\n    color: white;\n    font-size: 36px;\n    font-weight: 700;\n}\n\n.nav-list {\n    display: flex;\n    gap: 24px;\n}\n\n.nav-list > * {\n    color: white;\n    font-weight: 400;\n    font-size: 24px;\n    list-style-type: none;\n}\n\n/* Mid-content */\n.mid-content {\n    display: flex;\n    flex: 1;\n}\n\n.side-bar {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    padding: 12px;\n    flex: 1 25vw;\n    background-color: rgb(52,52,52);\n}\n\n.main-content {\n    flex: 1 75vw;\n}\n\n/* Side bar */\n.side-bar-header {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 8vh;\n    padding: 8px;\n    border-radius: 20px;\n}\n\n.create-project-button {\n    background: white;\n    border-radius: 50%;\n    height: 64px;\n    width: 64px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.create-project-button img {\n    cursor: pointer;\n    height: 48px;\n    width: 48px;\n}\n/* Main content */\n\n    /* Main content header */\n    .header-content {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        border-bottom: 0.25px solid black;\n        padding: 12px 24px;\n        margin: 0 24px;\n    }\n\n    .main-title {\n        font-size: 48px;\n        font-family: 'Roboto Condensed', sans-serf;\n    }\n    \n    .header-right {\n        display: flex;\n        align-items: center;\n        width: 48px;\n    }\n\n    .create-task-button img {\n        padding: 4px;\n        width: 48x;\n        height: 48px;\n        cursor: pointer;\n    }\n\n    .expand {\n        cursor: pointer;\n    }\n\n    .drop-icon {\n        margin-top: 6px;\n        width: 24px;\n        height: 24px;\n        cursor: pointer;\n    }\n\n    /* Content box */\n    .content-box {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 24px 8px;\n    }\n\n    /* Project Box */\n    .project-box {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-between;\n        background-color: white;\n        margin-bottom: 8px;\n        border-radius: 15px;\n        border: 0.25px solid gainsboro;\n        padding: 12px 24px;\n        transition: height 400ms ease-out;\n    }\n\n    .project-content {\n        display: flex;\n        align-items: center;\n        gap: 16px;\n    }\n\n    .project-header {\n        flex: 1 100%;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .unchecked-circle {\n        display: block;\n        border: 1px solid black;\n        border-radius: 50%;\n        width: 20px;\n        height: 20px;\n        cursor: pointer;\n    }\n\n    .project-title {\n        font-size: 24px;\n        font-family: 'Roboto Condensed';\n        font-weight: 500;\n    }\n\n    .project-desc {\n        flex: 1 100%;\n        margin-top: 4px;\n        padding-top: 8px;\n        border-top: 0.25px solid black;\n    }\n\n    /* Task box */\n    .task-box {\n        margin: 0 24px;\n        padding: 12px 24px;\n        background-color: white;\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        font-size: 22px;\n        gap: 16px;\n        border-bottom: 0.25px solid black;  \n    }\n\n    .task-header {\n        display: flex;\n        flex: 1 100%;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .task-header span {\n        display: flex;\n        align-items: center;\n    }\n\n    .task-title {\n        font-weight: 500;\n        margin-left: 16px;\n    }\n\n    .task-desc {\n        flex: 1 100%;\n        margin-top: 4px;\n        margin-bottom: 8px;\n        padding: 8px 16px;\n        background-color: whitesmoke;\n        border: 0.5px dashed black;\n        cursor: pointer;\n    }\n\n    input[type='text'] {\n        width: 100%;\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task),
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
class Project {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tasks = [];
    }
}

class Task {
    constructor(title, description, parentID) {
        this.title = title;
        this.description = description;
        this.parentID = parseInt(parentID);
    }
}

const project = (function() {
    const list = [];
    function getList(lists) {
        lists.forEach((listed) => {
            list.push(listed);
        })
    }
    let x = 0;
    let y = 0;
    function getId(type) {
        if (type === 'project') {
            x += 1
            return +x;
        }
        if (type === 'task') {
            y += 1
            return +y;
        }
    }
    function create(title, description) {
        let newProject = new Project(getId('project'), title, description);
        list.push(newProject);
    }

    function addTask(task, projectID) {
        task.id = getId('task');
        project.list.forEach((proj) => {
            console.log(proj.id);
            console.log(projectID);
            if (proj.id == projectID) {
                proj.tasks.push(task);
                console.log(proj.tasks)
            }
        })
    }

    function remove(target, parent) {
        parent.forEach((foo) => {
            if (foo.id === target.id) {
                parent.splice(foo, 1);
            }
        })
    }

    return { list, create, addTask, remove, getList };
})();

const task = (function() {
    function create(title, description, parentID) {
        let newTask = new Task(title, description, parentID);
        console.log(newTask);
        return newTask
    }

    return {create};
})()



/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainLoad": () => (/* binding */ mainLoad),
/* harmony export */   "formLoader": () => (/* binding */ formLoader),
/* harmony export */   "taskLoader": () => (/* binding */ taskLoader),
/* harmony export */   "projectController": () => (/* binding */ projectController)
/* harmony export */ });
/* harmony import */ var _arrowdown_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrowdown.png */ "./src/arrowdown.png");
/* harmony import */ var _collapse_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse.png */ "./src/collapse.png");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/app.js");




let mainProject = _app_js__WEBPACK_IMPORTED_MODULE_2__.project;

//Generate project's element and keep track of current project's view
let projectController = (function() {
    let currentView = '1';
    function changeView(newView) {
        projectController.currentView = newView;
    }; 
    function projectCheck(currentView) {
        _app_js__WEBPACK_IMPORTED_MODULE_2__.project.list.forEach((proj) => {
            if (proj.id == currentView) {
                return true;
            }
        })
    }
    function load(project) {
        let projectBox = document.createElement('div');
        let projectContent = document.createElement('span');
        let projectHeader = document.createElement('div');
        let unchecked = document.createElement('span');
        let dropWrapper = document.createElement('a');
        let dropIcon = new Image();
        let projectTitle = document.createElement('span');
    
        projectBox.classList.add(`project-${project['id']}`);
        projectHeader.classList.add('project-header');
        projectBox.classList.add('project-box');
        unchecked.classList.add('unchecked-circle');
        projectTitle.classList.add('project-title');
        projectContent.classList.add('project-content');
        dropWrapper.classList.add('collapse');
        dropIcon.classList.add('drop-icon');

        dropIcon.src = _arrowdown_png__WEBPACK_IMPORTED_MODULE_0__;
        projectTitle.textContent = project['title'];
    
        document.getElementsByClassName('project-sidebar')[0].appendChild(projectBox);

        dropWrapper.appendChild(dropIcon);
        projectContent.appendChild(unchecked);
        projectContent.appendChild(projectTitle);
        projectHeader.appendChild(projectContent)
        projectHeader.appendChild(dropWrapper);
        projectBox.appendChild(projectHeader);
        unchecked.addEventListener('click', (e) => {
            checkController.check(project, mainProject.list)
            mainLoad(mainProject.list);
            e.stopPropagation()
        })
        projectBox.addEventListener('click', (e) => {
            taskLoader.load(project);
            projectController.changeView(project.id);
            e.stopPropagation()
        })

        dropWrapper.addEventListener('click', (e) => {
            boxController.handler({
                id: project['id'],
                icon: dropIcon,
                el: dropWrapper,
                desc: project['description'],
                type: 'project',
            })
            e.stopPropagation()
        })
    }
    

    return {load, currentView, changeView, projectCheck};
})()

let taskLoader = (function() {
    function reset() {
        document.getElementsByClassName('task-mainbox')[0].textContent = '';    
    }
    function load(project) {
        reset();
        project["tasks"].forEach((task) => {
            let taskBox = document.createElement('div');
            let taskHeader = document.createElement('div');
            let taskContent = document.createElement('span');
            let unchecked = document.createElement('span');
            let dropWrapper = document.createElement('a');
            let dropIcon = new Image();
            let taskTitle = document.createElement('div');

            taskTitle.textContent = task['title'];
            taskHeader.classList.add('task-header');
            taskTitle.classList.add('task-title');
            unchecked.classList.add('unchecked-circle');
            taskBox.classList.add('task-box');
            taskBox.classList.add(`task-${task['id']}`);
            taskBox.setAttribute('data-key', `${task['id']}`);
            dropWrapper.classList.add('collapse');
            dropIcon.classList.add('drop-icon');

            dropIcon.src = _arrowdown_png__WEBPACK_IMPORTED_MODULE_0__;
            document.getElementsByClassName('task-mainbox')[0].appendChild(taskBox);

            taskBox.appendChild(taskHeader)
            taskHeader.appendChild(taskContent);
            taskContent.appendChild(unchecked);
            taskContent.appendChild(taskTitle);
            dropWrapper.appendChild(dropIcon);
            taskHeader.appendChild(dropWrapper);
            unchecked.addEventListener('click', (e) => {
                checkController.check(task, project.tasks)
                mainLoad(mainProject.list);
                e.stopPropagation()
            })
            dropWrapper.addEventListener('click', (e) => {
                boxController.handler({
                    id: task['id'],
                    icon: dropIcon,
                    el: dropWrapper,
                    desc: task['description'],
                    parentID: project.id,
                    type: 'task',
                })
                e.stopPropagation()
            })

        })
    }

    return {load, reset};  
})()

let formLoader = (function() {
    function reset() {
        document.getElementsByClassName('form-wrapper')[0].textContent = 0;
        document.body.removeChild(document.getElementsByClassName('form-wrapper')[0]);
    }

    function generate(type) {
        let formWrapper = document.createElement('div');
        let formContainer = document.createElement('div');
        let form = document.createElement('form');
        let legend = document.createElement('legend');
        let btnWrapper = document.createElement('span')
        let btn = document.createElement('btn');

        formWrapper.classList.add('form-wrapper');
        formContainer.classList.add('form-container');

        document.body.appendChild(formWrapper);
        formWrapper.appendChild(formContainer)
        formContainer.appendChild(form);
        form.appendChild(legend);
        btnWrapper.appendChild(btn);

        btn.textContent = 'create';

        let projectTitle = document.createElement('label');
        let inputTitle = document.createElement('input');
        let projectDescription = document.createElement('label');
        let inputDescription = document.createElement('textarea')

        form.classList.add('project-form');
        btn.classList.add('project-submit');
        legend.textContent = 'Track Project';
        projectTitle.setAttribute('for', 'project-title');
        inputDescription.setAttribute('rows', '5');

        form.appendChild(projectTitle);
        form.appendChild(inputTitle);
        form.appendChild(projectDescription);
        form.appendChild(inputDescription);

        if (type === 'project') {
            projectTitle.textContent = 'Project Title';
            projectDescription.textContent = 'Project Description';

            projectDescription.setAttribute('for', 'project-description');
            _defaultAttribute(inputTitle, 'project-title', 'Read a book (Min length = 3, Max length = 40)', 'text');
            _defaultAttribute(inputDescription, 'project-description', 'Must complete 3 chapters of ASIOAF and be able to recall the plot (Min length = 3, Max length = 200)', 'none');
         } else if (type === 'task') {
            projectTitle.textContent = 'Task Name';
            projectDescription.textContent = 'Task Description';  

            projectDescription.setAttribute('for', 'project-description');
            _defaultAttribute(inputTitle, 'project-title', 'Read 5 pages (Min length = 3, Max length = 40)', 'text');
            _defaultAttribute(inputDescription, 'project-description', 'It\'ll take 5 a few hours to complete, no distraction. (Min length = 3, Max length = 200)', 'none')
         }

         form.appendChild(btnWrapper);
    }

    function _defaultAttribute(input, id, placeholder, type) {
        input.setAttribute('id', id);
        input.setAttribute('min', '3');
        input.setAttribute('placeholder', placeholder)
        if (type.nodeName === 'TEXTAREA') {
            input.setAttribute('max', '200')
            return
        } else {
            input.setAttribute('max', '40');
            input.setAttribute('type', type);
        }   
    }

    return {generate, reset}
})()

let boxController = (function() {
    function handler(box) {
        if (box['el'].classList.contains('collapse')) {
            _collapse(box);
        } else if (box['el'].classList.contains('expand')) {
            _expand(box);
        }
    }
    function edit(box, desc) {
        let boxInput = document.createElement('input');
        boxInput.setAttribute('type', 'text');
        boxInput.value = desc.textContent;
        boxInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' || e.keyCode === 13) {
                desc.textContent = boxInput.value;
                if (box.type === 'project') {
                    mainProject.list.forEach((item) => {
                        if (item.id === box.id) {
                            item.description = boxInput.value;
                        }
                    })
                } else if (box.type === 'task') {
                    mainProject.list.forEach((item) => {
                        if (item.id === box.parentID) {
                            item.tasks.forEach((task) => {
                                if (task.id === box.id) {
                                    task.description = boxInput.value;
                                }
                            })
                        }
                    })
                }
            }
        })
        desc.textContent = '';
        desc.appendChild(boxInput);
    }
    function _collapse(box) {
        let boxDesc = document.createElement('div');
        
        let boxContainer = document.querySelectorAll(`.${box['type']}-${box['id']}`)[0];

        boxDesc.classList.add(`${box['type']}-desc`);
        boxDesc.classList.add(`${box['type']}-desc-${box['id']}`)
        boxDesc.textContent = box['desc'];

        boxContainer.appendChild(boxDesc);

        box['el'].classList.add('expand')
        box['el'].classList.remove('collapse')

        boxDesc.addEventListener('click',(desc) => {
            edit(box, desc.target);
        })
        _iconChange(box['icon'], _collapse_png__WEBPACK_IMPORTED_MODULE_1__)
    }
    
    function _expand(box) {
        let boxContainer = document.querySelectorAll(`.${box['type']}-${box['id']}`)[0];
        let target = document.querySelectorAll(`.${box['type']}-desc-${box['id']}`)[0];
        boxContainer.removeChild(target);

        box['el'].classList.add('collapse')
        box['el'].classList.remove('expand')

        _iconChange(box['icon'], _arrowdown_png__WEBPACK_IMPORTED_MODULE_0__)
    }

    function _iconChange(icon, type) {
        icon.src = type;
    }
    return {handler}
})()

const checkController = (function() {
    function check(target, parent) {
        _app_js__WEBPACK_IMPORTED_MODULE_2__.project.remove(target, parent);
    }
    return {check};
})()

//Load the project and project's task
function mainLoad(projects) {
    document.getElementsByClassName('project-sidebar')[0].textContent= '';
    projects.forEach((project) => {
        projectController.load(project)
    })
    console.log(_app_js__WEBPACK_IMPORTED_MODULE_2__.project.list)
    if (projectController.projectCheck()) {
        taskLoader.load(projectCheck());
    } else {
        taskLoader.reset();
    }
    localStorage.setItem('project', JSON.stringify(_app_js__WEBPACK_IMPORTED_MODULE_2__.project.list));
}



/***/ }),

/***/ "./src/arrowdown.png":
/*!***************************!*\
  !*** ./src/arrowdown.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "931b0e687b1ed91db328.png";

/***/ }),

/***/ "./src/collapse.png":
/*!**************************!*\
  !*** ./src/collapse.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf81d2b140e03b3f0b8b.png";

/***/ }),

/***/ "./src/create-button.png":
/*!*******************************!*\
  !*** ./src/create-button.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b8150ce9982386adb15.png";

/***/ }),

/***/ "./src/createProjectIcon.png":
/*!***********************************!*\
  !*** ./src/createProjectIcon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b5732e3c5c8d640360d.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageload.js */ "./src/pageload.js");
/* harmony import */ var _createProjectIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProjectIcon.png */ "./src/createProjectIcon.png");
/* harmony import */ var _create_button_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-button.png */ "./src/create-button.png");






if (localStorage.getItem('project')) {
    _app_js__WEBPACK_IMPORTED_MODULE_1__.project.getList(JSON.parse(localStorage.project));
    (0,_pageload_js__WEBPACK_IMPORTED_MODULE_2__.mainLoad)(_app_js__WEBPACK_IMPORTED_MODULE_1__.project.list);
  }



// Create buttons and add events for creating forms
let button = (function() {
    function create(types) {
        types.forEach((type) => {
            let btn = document.getElementsByClassName(`create-${type}-button`)[0];
            _assign(type, btn);
            document.getElementsByClassName(`create-${type}-button`)[0].addEventListener('click',(button) => {
                formController.create(`${type}`);
            });
        })
    function _assign(type, btn) {
        let createButton = new Image();
        if (type === 'project') {
            createButton.src = _createProjectIcon_png__WEBPACK_IMPORTED_MODULE_3__;
            createButton.classList.add('create-project');
        } else if ( type === 'task') {
            createButton.src = _create_button_png__WEBPACK_IMPORTED_MODULE_4__;
            createButton.classList.add('create-task');
        }
        btn.appendChild(createButton);
    }
    }
    return {create};
})()

//Handle the creation of form and give it functionality
let formController = (function() {
    function create(type) {
        if(_disabledCheck(type)) {
            _pageload_js__WEBPACK_IMPORTED_MODULE_2__.formLoader.generate(type);
            _eventAdder(type);
        }
    }
    function _eventAdder(type) {
        let btn = document.getElementsByClassName('project-submit')[0];
        btn.addEventListener('click', () => {
            if (type === 'project') {
                _app_js__WEBPACK_IMPORTED_MODULE_1__.project.create(...interfaceController.event(type));
                (0,_pageload_js__WEBPACK_IMPORTED_MODULE_2__.mainLoad)(_app_js__WEBPACK_IMPORTED_MODULE_1__.project.list);
            } else if (type === 'task') {
                _app_js__WEBPACK_IMPORTED_MODULE_1__.project.addTask(_app_js__WEBPACK_IMPORTED_MODULE_1__.task.create(...interfaceController.event(type), _pageload_js__WEBPACK_IMPORTED_MODULE_2__.projectController.currentView), _pageload_js__WEBPACK_IMPORTED_MODULE_2__.projectController.currentView)
                _app_js__WEBPACK_IMPORTED_MODULE_1__.project.list.forEach((proj) => {
                    if (proj.id == _pageload_js__WEBPACK_IMPORTED_MODULE_2__.projectController.currentView) {
                        _pageload_js__WEBPACK_IMPORTED_MODULE_2__.taskLoader.load(proj);
                    }
                })
            }
            _pageload_js__WEBPACK_IMPORTED_MODULE_2__.formLoader.reset();
        })
    }
    function _disabledCheck(type) {
        if (_app_js__WEBPACK_IMPORTED_MODULE_1__.project.list.length === 0 && type === 'task') {
            return false;
        } else {
            return true;
        }
    }
    return {create}
})();


//Receive inputs from input boxes
let interfaceController = (function() {
    function event(type) {
        if (type === 'project') {
            let inputTitle = document.getElementById('project-title');
            let inputDescription = document.getElementById('project-description');
            return [inputTitle.value, inputDescription.value];
        } else if ( type === 'task' ) {
            let inputTitle = document.getElementById('project-title');
            let inputDescription = document.getElementById('project-description');
            return [inputTitle.value, inputDescription.value];
        }
    }
    return {event}; 
})()

button.create(['project', 'task'])
;(0,_pageload_js__WEBPACK_IMPORTED_MODULE_2__.mainLoad)(_app_js__WEBPACK_IMPORTED_MODULE_1__.project.list);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkVBQTJFLFdBQVcsVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLGFBQWEsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFB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QWdFLEtBQUs7QUFDckU7QUFDQSxzREFBc0QsS0FBSztBQUMzRCx5Q0FBeUMsS0FBSztBQUM5QyxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtREFBaUI7QUFDaEQ7QUFDQSxVQUFVO0FBQ1YsK0JBQStCLCtDQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFjO0FBQzlCLGdCQUFnQixzREFBUSxDQUFDLGlEQUFZO0FBQ3JDLGNBQWM7QUFDZCxnQkFBZ0Isb0RBQWUsQ0FBQyxnREFBVyxxQ0FBcUMsdUVBQTZCLEdBQUcsdUVBQTZCO0FBQzdJLGdCQUFnQix5REFBb0I7QUFDcEMsbUNBQW1DLHVFQUE2QjtBQUNoRSx3QkFBd0IseURBQWU7QUFDdkM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxZQUFZLDBEQUFnQjtBQUM1QixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVksd0RBQXFCO0FBQ2pDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQSx1REFBUSxDQUFDLGlEQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFpbC8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly90cmFpbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdHJhaWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90cmFpbC8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3RyYWlsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RyYWlsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90cmFpbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90cmFpbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90cmFpbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RyYWlsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdHJhaWwvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RyYWlsLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3RyYWlsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyYWlsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RyYWlsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RyYWlsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJhaWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90cmFpbC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyogRm9udCAqL1xcblxcbi8qIFJlc2V0ICovXFxuKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogRm9ybSAqL1xcbi5mb3JtLXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjRweCAzMnB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtID4gKiB7XFxuICAgIGZsZXg6IDEgMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnByb2plY3QtZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gaW5wdXQsIC5wcm9qZWN0LWZvcm0gdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSBsZWdlbmQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSBzcGFuIHtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1zdWJtaXQge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDM2LDApO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwzNiwwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMnB4IDQ4cHg7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4ubmF2LWxpc3QgPiAqIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLyogTWlkLWNvbnRlbnQgKi9cXG4ubWlkLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGZsZXg6IDEgMjV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLDUyLDUyKTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGZsZXg6IDEgNzV2dztcXG59XFxuXFxuLyogU2lkZSBiYXIgKi9cXG4uc2lkZS1iYXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idXR0b24gaW1nIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIHdpZHRoOiA0OHB4O1xcbn1cXG4vKiBNYWluIGNvbnRlbnQgKi9cXG5cXG4gICAgLyogTWFpbiBjb250ZW50IGhlYWRlciAqL1xcbiAgICAuaGVhZGVyLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjI1cHggc29saWQgYmxhY2s7XFxuICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxuICAgICAgICBtYXJnaW46IDAgMjRweDtcXG4gICAgfVxcblxcbiAgICAubWFpbi10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmY7XFxuICAgIH1cXG4gICAgXFxuICAgIC5oZWFkZXItcmlnaHQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogNDhweDtcXG4gICAgfVxcblxcbiAgICAuY3JlYXRlLXRhc2stYnV0dG9uIGltZyB7XFxuICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgICB3aWR0aDogNDh4O1xcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5leHBhbmQge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5kcm9wLWljb24ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLyogQ29udGVudCBib3ggKi9cXG4gICAgLmNvbnRlbnQtYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBwYWRkaW5nOiAyNHB4IDhweDtcXG4gICAgfVxcblxcbiAgICAvKiBQcm9qZWN0IEJveCAqL1xcbiAgICAucHJvamVjdC1ib3gge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBib3JkZXI6IDAuMjVweCBzb2xpZCBnYWluc2Jvcm87XFxuICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNDAwbXMgZWFzZS1vdXQ7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTZweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1oZWFkZXIge1xcbiAgICAgICAgZmxleDogMSAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgLnVuY2hlY2tlZC1jaXJjbGUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCc7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRlc2Mge1xcbiAgICAgICAgZmxleDogMSAxMDAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcXG4gICAgICAgIGJvcmRlci10b3A6IDAuMjVweCBzb2xpZCBibGFjaztcXG4gICAgfVxcblxcbiAgICAvKiBUYXNrIGJveCAqL1xcbiAgICAudGFzay1ib3gge1xcbiAgICAgICAgbWFyZ2luOiAwIDI0cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgZ2FwOiAxNnB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4yNXB4IHNvbGlkIGJsYWNrOyAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2staGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4OiAxIDEwMCU7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWhlYWRlciBzcGFuIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcXG4gICAgfVxcblxcbiAgICAudGFzay1kZXNjIHtcXG4gICAgICAgIGZsZXg6IDEgMTAwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgIGJvcmRlcjogMC41cHggZGFzaGVkIGJsYWNrO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0EsU0FBUzs7QUFHVCxVQUFVO0FBQ1Y7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25C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O0lBRUE7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztJQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi8qIEZvbnQgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBSZXNldCAqL1xcbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIEZvcm0gKi9cXG4uZm9ybS13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDI0cHggMzJweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSA+ICoge1xcbiAgICBmbGV4OiAxIDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIGlucHV0LCAucHJvamVjdC1mb3JtIHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gbGVnZW5kIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gc3BhbiB7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3Qtc3VibWl0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogNnB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwzNiwwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMzYsMCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTJweCA0OHB4O1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG59XFxuXFxuLm5hdi1saXN0ID4gKiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi8qIE1pZC1jb250ZW50ICovXFxuLm1pZC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnNpZGUtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBmbGV4OiAxIDI1dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1Miw1Miw1Mik7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBmbGV4OiAxIDc1dnc7XFxufVxcblxcbi8qIFNpZGUgYmFyICovXFxuLnNpZGUtYmFyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnV0dG9uIGltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICB3aWR0aDogNDhweDtcXG59XFxuLyogTWFpbiBjb250ZW50ICovXFxuXFxuICAgIC8qIE1haW4gY29udGVudCBoZWFkZXIgKi9cXG4gICAgLmhlYWRlci1jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4yNXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xcbiAgICAgICAgbWFyZ2luOiAwIDI0cHg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJmO1xcbiAgICB9XFxuICAgIFxcbiAgICAuaGVhZGVyLXJpZ2h0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDQ4cHg7XFxuICAgIH1cXG5cXG4gICAgLmNyZWF0ZS10YXNrLWJ1dHRvbiBpbWcge1xcbiAgICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgICAgd2lkdGg6IDQ4eDtcXG4gICAgICAgIGhlaWdodDogNDhweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAuZXhwYW5kIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAuZHJvcC1pY29uIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC8qIENvbnRlbnQgYm94ICovXFxuICAgIC5jb250ZW50LWJveCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgcGFkZGluZzogMjRweCA4cHg7XFxuICAgIH1cXG5cXG4gICAgLyogUHJvamVjdCBCb3ggKi9cXG4gICAgLnByb2plY3QtYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cHggc29saWQgZ2FpbnNib3JvO1xcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDQwMG1zIGVhc2Utb3V0O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtaGVhZGVyIHtcXG4gICAgICAgIGZsZXg6IDEgMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgIC51bmNoZWNrZWQtY2lyY2xlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kZXNjIHtcXG4gICAgICAgIGZsZXg6IDEgMTAwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICAgICAgICBib3JkZXItdG9wOiAwLjI1cHggc29saWQgYmxhY2s7XFxuICAgIH1cXG5cXG4gICAgLyogVGFzayBib3ggKi9cXG4gICAgLnRhc2stYm94IHtcXG4gICAgICAgIG1hcmdpbjogMCAyNHB4O1xcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuMjVweCBzb2xpZCBibGFjazsgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrLWhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleDogMSAxMDAlO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAudGFzay1oZWFkZXIgc3BhbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAudGFzay10aXRsZSB7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLnRhc2stZGVzYyB7XFxuICAgICAgICBmbGV4OiAxIDEwMCU7XFxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICBib3JkZXI6IDAuNXB4IGRhc2hlZCBibGFjaztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG59XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcGFyZW50SUQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucGFyZW50SUQgPSBwYXJzZUludChwYXJlbnRJRCk7XG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICBmdW5jdGlvbiBnZXRMaXN0KGxpc3RzKSB7XG4gICAgICAgIGxpc3RzLmZvckVhY2goKGxpc3RlZCkgPT4ge1xuICAgICAgICAgICAgbGlzdC5wdXNoKGxpc3RlZCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeSA9IDA7XG4gICAgZnVuY3Rpb24gZ2V0SWQodHlwZSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICB4ICs9IDFcbiAgICAgICAgICAgIHJldHVybiAreDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICB5ICs9IDFcbiAgICAgICAgICAgIHJldHVybiAreTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGUodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoZ2V0SWQoJ3Byb2plY3QnKSwgdGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgbGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRhc2sodGFzaywgcHJvamVjdElEKSB7XG4gICAgICAgIHRhc2suaWQgPSBnZXRJZCgndGFzaycpO1xuICAgICAgICBwcm9qZWN0Lmxpc3QuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvai5pZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SUQpO1xuICAgICAgICAgICAgaWYgKHByb2ouaWQgPT0gcHJvamVjdElEKSB7XG4gICAgICAgICAgICAgICAgcHJvai50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2oudGFza3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5mb3JFYWNoKChmb28pID0+IHtcbiAgICAgICAgICAgIGlmIChmb28uaWQgPT09IHRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5zcGxpY2UoZm9vLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4geyBsaXN0LCBjcmVhdGUsIGFkZFRhc2ssIHJlbW92ZSwgZ2V0TGlzdCB9O1xufSkoKTtcblxuY29uc3QgdGFzayA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBwYXJlbnRJRCkge1xuICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgcGFyZW50SUQpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKTtcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZX07XG59KSgpXG5cbmV4cG9ydCB7IHRhc2ssIHByb2plY3QgfTsiLCJpbXBvcnQgYXJyb3dEb3duIGZyb20gJy4vYXJyb3dkb3duLnBuZyc7XG5pbXBvcnQgY29sbGFwc2VJY29uIGZyb20gJy4vY29sbGFwc2UucG5nJztcbmltcG9ydCB7cHJvamVjdH0gZnJvbSAnLi9hcHAuanMnO1xuXG5sZXQgbWFpblByb2plY3QgPSBwcm9qZWN0O1xuXG4vL0dlbmVyYXRlIHByb2plY3QncyBlbGVtZW50IGFuZCBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgcHJvamVjdCdzIHZpZXdcbmxldCBwcm9qZWN0Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgY3VycmVudFZpZXcgPSAnMSc7XG4gICAgZnVuY3Rpb24gY2hhbmdlVmlldyhuZXdWaWV3KSB7XG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmN1cnJlbnRWaWV3ID0gbmV3VmlldztcbiAgICB9OyBcbiAgICBmdW5jdGlvbiBwcm9qZWN0Q2hlY2soY3VycmVudFZpZXcpIHtcbiAgICAgICAgcHJvamVjdC5saXN0LmZvckVhY2goKHByb2opID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qLmlkID09IGN1cnJlbnRWaWV3KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWQocHJvamVjdCkge1xuICAgICAgICBsZXQgcHJvamVjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB1bmNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxldCBkcm9wV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGV0IGRyb3BJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgXG4gICAgICAgIHByb2plY3RCb3guY2xhc3NMaXN0LmFkZChgcHJvamVjdC0ke3Byb2plY3RbJ2lkJ119YCk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkZXInKTtcbiAgICAgICAgcHJvamVjdEJveC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJveCcpO1xuICAgICAgICB1bmNoZWNrZWQuY2xhc3NMaXN0LmFkZCgndW5jaGVja2VkLWNpcmNsZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qZWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRlbnQnKTtcbiAgICAgICAgZHJvcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICAgICAgZHJvcEljb24uY2xhc3NMaXN0LmFkZCgnZHJvcC1pY29uJyk7XG5cbiAgICAgICAgZHJvcEljb24uc3JjID0gYXJyb3dEb3duO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Wyd0aXRsZSddO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0LXNpZGViYXInKVswXS5hcHBlbmRDaGlsZChwcm9qZWN0Qm94KTtcblxuICAgICAgICBkcm9wV3JhcHBlci5hcHBlbmRDaGlsZChkcm9wSWNvbik7XG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHVuY2hlY2tlZCk7XG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQpXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZHJvcFdyYXBwZXIpO1xuICAgICAgICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICAgICAgICB1bmNoZWNrZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY2hlY2tDb250cm9sbGVyLmNoZWNrKHByb2plY3QsIG1haW5Qcm9qZWN0Lmxpc3QpXG4gICAgICAgICAgICBtYWluTG9hZChtYWluUHJvamVjdC5saXN0KTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdEJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0YXNrTG9hZGVyLmxvYWQocHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5jaGFuZ2VWaWV3KHByb2plY3QuaWQpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRyb3BXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGJveENvbnRyb2xsZXIuaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgaWQ6IHByb2plY3RbJ2lkJ10sXG4gICAgICAgICAgICAgICAgaWNvbjogZHJvcEljb24sXG4gICAgICAgICAgICAgICAgZWw6IGRyb3BXcmFwcGVyLFxuICAgICAgICAgICAgICAgIGRlc2M6IHByb2plY3RbJ2Rlc2NyaXB0aW9uJ10sXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Byb2plY3QnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4ge2xvYWQsIGN1cnJlbnRWaWV3LCBjaGFuZ2VWaWV3LCBwcm9qZWN0Q2hlY2t9O1xufSkoKVxuXG5sZXQgdGFza0xvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1tYWluYm94JylbMF0udGV4dENvbnRlbnQgPSAnJzsgICAgXG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWQocHJvamVjdCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcm9qZWN0W1widGFza3NcIl0uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgbGV0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBsZXQgdW5jaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbGV0IGRyb3BXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbGV0IGRyb3BJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tbJ3RpdGxlJ107XG4gICAgICAgICAgICB0YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICAgICAgdW5jaGVja2VkLmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZC1jaXJjbGUnKTtcbiAgICAgICAgICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZCgndGFzay1ib3gnKTtcbiAgICAgICAgICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZChgdGFzay0ke3Rhc2tbJ2lkJ119YCk7XG4gICAgICAgICAgICB0YXNrQm94LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBgJHt0YXNrWydpZCddfWApO1xuICAgICAgICAgICAgZHJvcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICAgICAgICAgIGRyb3BJY29uLmNsYXNzTGlzdC5hZGQoJ2Ryb3AtaWNvbicpO1xuXG4gICAgICAgICAgICBkcm9wSWNvbi5zcmMgPSBhcnJvd0Rvd247XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLW1haW5ib3gnKVswXS5hcHBlbmRDaGlsZCh0YXNrQm94KTtcblxuICAgICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrSGVhZGVyKVxuICAgICAgICAgICAgdGFza0hlYWRlci5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG4gICAgICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh1bmNoZWNrZWQpO1xuICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgICAgIGRyb3BXcmFwcGVyLmFwcGVuZENoaWxkKGRyb3BJY29uKTtcbiAgICAgICAgICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoZHJvcFdyYXBwZXIpO1xuICAgICAgICAgICAgdW5jaGVja2VkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjaGVja0NvbnRyb2xsZXIuY2hlY2sodGFzaywgcHJvamVjdC50YXNrcylcbiAgICAgICAgICAgICAgICBtYWluTG9hZChtYWluUHJvamVjdC5saXN0KTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZHJvcFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGJveENvbnRyb2xsZXIuaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0YXNrWydpZCddLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBkcm9wSWNvbixcbiAgICAgICAgICAgICAgICAgICAgZWw6IGRyb3BXcmFwcGVyLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiB0YXNrWydkZXNjcmlwdGlvbiddLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJRDogcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Rhc2snLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7bG9hZCwgcmVzZXR9OyAgXG59KSgpXG5cbmxldCBmb3JtTG9hZGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLXdyYXBwZXInKVswXS50ZXh0Q29udGVudCA9IDA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS13cmFwcGVyJylbMF0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlKHR5cGUpIHtcbiAgICAgICAgbGV0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBsZXQgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG4gICAgICAgIGxldCBidG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcblxuICAgICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmb3JtLXdyYXBwZXInKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybVdyYXBwZXIpO1xuICAgICAgICBmb3JtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKVxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gICAgICAgIGJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnY3JlYXRlJztcblxuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0nKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc3VibWl0Jyk7XG4gICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9ICdUcmFjayBQcm9qZWN0JztcbiAgICAgICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNScpO1xuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0IFRpdGxlJztcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdQcm9qZWN0IERlc2NyaXB0aW9uJztcblxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIF9kZWZhdWx0QXR0cmlidXRlKGlucHV0VGl0bGUsICdwcm9qZWN0LXRpdGxlJywgJ1JlYWQgYSBib29rIChNaW4gbGVuZ3RoID0gMywgTWF4IGxlbmd0aCA9IDQwKScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBfZGVmYXVsdEF0dHJpYnV0ZShpbnB1dERlc2NyaXB0aW9uLCAncHJvamVjdC1kZXNjcmlwdGlvbicsICdNdXN0IGNvbXBsZXRlIDMgY2hhcHRlcnMgb2YgQVNJT0FGIGFuZCBiZSBhYmxlIHRvIHJlY2FsbCB0aGUgcGxvdCAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSAyMDApJywgJ25vbmUnKTtcbiAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnVGFzayBOYW1lJztcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdUYXNrIERlc2NyaXB0aW9uJzsgIFxuXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXRUaXRsZSwgJ3Byb2plY3QtdGl0bGUnLCAnUmVhZCA1IHBhZ2VzIChNaW4gbGVuZ3RoID0gMywgTWF4IGxlbmd0aCA9IDQwKScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBfZGVmYXVsdEF0dHJpYnV0ZShpbnB1dERlc2NyaXB0aW9uLCAncHJvamVjdC1kZXNjcmlwdGlvbicsICdJdFxcJ2xsIHRha2UgNSBhIGZldyBob3VycyB0byBjb21wbGV0ZSwgbm8gZGlzdHJhY3Rpb24uIChNaW4gbGVuZ3RoID0gMywgTWF4IGxlbmd0aCA9IDIwMCknLCAnbm9uZScpXG4gICAgICAgICB9XG5cbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXQsIGlkLCBwbGFjZWhvbGRlciwgdHlwZSkge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsICczJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcilcbiAgICAgICAgaWYgKHR5cGUubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywgJzIwMCcpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywgJzQwJyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcbiAgICAgICAgfSAgIFxuICAgIH1cblxuICAgIHJldHVybiB7Z2VuZXJhdGUsIHJlc2V0fVxufSkoKVxuXG5sZXQgYm94Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBoYW5kbGVyKGJveCkge1xuICAgICAgICBpZiAoYm94WydlbCddLmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2UnKSkge1xuICAgICAgICAgICAgX2NvbGxhcHNlKGJveCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm94WydlbCddLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kJykpIHtcbiAgICAgICAgICAgIF9leHBhbmQoYm94KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBlZGl0KGJveCwgZGVzYykge1xuICAgICAgICBsZXQgYm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBib3hJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBib3hJbnB1dC52YWx1ZSA9IGRlc2MudGV4dENvbnRlbnQ7XG4gICAgICAgIGJveElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IGJveElucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChib3gudHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5Qcm9qZWN0Lmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGJveC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGVzY3JpcHRpb24gPSBib3hJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJveC50eXBlID09PSAndGFzaycpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpblByb2plY3QubGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYm94LnBhcmVudElEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmlkID09PSBib3guaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBib3hJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGRlc2MuYXBwZW5kQ2hpbGQoYm94SW5wdXQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY29sbGFwc2UoYm94KSB7XG4gICAgICAgIGxldCBib3hEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgYm94Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Ym94Wyd0eXBlJ119LSR7Ym94WydpZCddfWApWzBdO1xuXG4gICAgICAgIGJveERlc2MuY2xhc3NMaXN0LmFkZChgJHtib3hbJ3R5cGUnXX0tZGVzY2ApO1xuICAgICAgICBib3hEZXNjLmNsYXNzTGlzdC5hZGQoYCR7Ym94Wyd0eXBlJ119LWRlc2MtJHtib3hbJ2lkJ119YClcbiAgICAgICAgYm94RGVzYy50ZXh0Q29udGVudCA9IGJveFsnZGVzYyddO1xuXG4gICAgICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChib3hEZXNjKTtcblxuICAgICAgICBib3hbJ2VsJ10uY2xhc3NMaXN0LmFkZCgnZXhwYW5kJylcbiAgICAgICAgYm94WydlbCddLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlJylcblxuICAgICAgICBib3hEZXNjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZGVzYykgPT4ge1xuICAgICAgICAgICAgZWRpdChib3gsIGRlc2MudGFyZ2V0KTtcbiAgICAgICAgfSlcbiAgICAgICAgX2ljb25DaGFuZ2UoYm94WydpY29uJ10sIGNvbGxhcHNlSWNvbilcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gX2V4cGFuZChib3gpIHtcbiAgICAgICAgbGV0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JveFsndHlwZSddfS0ke2JveFsnaWQnXX1gKVswXTtcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JveFsndHlwZSddfS1kZXNjLSR7Ym94WydpZCddfWApWzBdO1xuICAgICAgICBib3hDb250YWluZXIucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcblxuICAgICAgICBib3hbJ2VsJ10uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgICAgICBib3hbJ2VsJ10uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kJylcblxuICAgICAgICBfaWNvbkNoYW5nZShib3hbJ2ljb24nXSwgYXJyb3dEb3duKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pY29uQ2hhbmdlKGljb24sIHR5cGUpIHtcbiAgICAgICAgaWNvbi5zcmMgPSB0eXBlO1xuICAgIH1cbiAgICByZXR1cm4ge2hhbmRsZXJ9XG59KSgpXG5cbmNvbnN0IGNoZWNrQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBjaGVjayh0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICBwcm9qZWN0LnJlbW92ZSh0YXJnZXQsIHBhcmVudCk7XG4gICAgfVxuICAgIHJldHVybiB7Y2hlY2t9O1xufSkoKVxuXG4vL0xvYWQgdGhlIHByb2plY3QgYW5kIHByb2plY3QncyB0YXNrXG5mdW5jdGlvbiBtYWluTG9hZChwcm9qZWN0cykge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3Qtc2lkZWJhcicpWzBdLnRleHRDb250ZW50PSAnJztcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmxvYWQocHJvamVjdClcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHByb2plY3QubGlzdClcbiAgICBpZiAocHJvamVjdENvbnRyb2xsZXIucHJvamVjdENoZWNrKCkpIHtcbiAgICAgICAgdGFza0xvYWRlci5sb2FkKHByb2plY3RDaGVjaygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrTG9hZGVyLnJlc2V0KCk7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdC5saXN0KSk7XG59XG5cbmV4cG9ydCB7bWFpbkxvYWQsIGZvcm1Mb2FkZXIsIHRhc2tMb2FkZXIsIHByb2plY3RDb250cm9sbGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgeyB0YXNrLCBwcm9qZWN0IH0gZnJvbSAnLi9hcHAuanMnO1xuaW1wb3J0IHsgbWFpbkxvYWQsIGZvcm1Mb2FkZXIsIHRhc2tMb2FkZXIsIHByb2plY3RDb250cm9sbGVyfSBmcm9tICcuL3BhZ2Vsb2FkLmpzJztcbmltcG9ydCBjcmVhdGVQcm9qZWN0SWNvbiBmcm9tICcuL2NyZWF0ZVByb2plY3RJY29uLnBuZyc7XG5pbXBvcnQgY3JlYXRlVGFza0ljb24gZnJvbSAnLi9jcmVhdGUtYnV0dG9uLnBuZyc7XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKSB7XG4gICAgcHJvamVjdC5nZXRMaXN0KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2plY3QpKTtcbiAgICBtYWluTG9hZChwcm9qZWN0Lmxpc3QpO1xuICB9XG5cblxuXG4vLyBDcmVhdGUgYnV0dG9ucyBhbmQgYWRkIGV2ZW50cyBmb3IgY3JlYXRpbmcgZm9ybXNcbmxldCBidXR0b24gPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlKHR5cGVzKSB7XG4gICAgICAgIHR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBjcmVhdGUtJHt0eXBlfS1idXR0b25gKVswXTtcbiAgICAgICAgICAgIF9hc3NpZ24odHlwZSwgYnRuKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGNyZWF0ZS0ke3R5cGV9LWJ1dHRvbmApWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xsZXIuY3JlYXRlKGAke3R5cGV9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICBmdW5jdGlvbiBfYXNzaWduKHR5cGUsIGJ0bikge1xuICAgICAgICBsZXQgY3JlYXRlQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5zcmMgPSBjcmVhdGVQcm9qZWN0SWNvbjtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdCcpO1xuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5zcmMgPSBjcmVhdGVUYXNrSWNvbjtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtdGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24pO1xuICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtjcmVhdGV9O1xufSkoKVxuXG4vL0hhbmRsZSB0aGUgY3JlYXRpb24gb2YgZm9ybSBhbmQgZ2l2ZSBpdCBmdW5jdGlvbmFsaXR5XG5sZXQgZm9ybUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlKHR5cGUpIHtcbiAgICAgICAgaWYoX2Rpc2FibGVkQ2hlY2sodHlwZSkpIHtcbiAgICAgICAgICAgIGZvcm1Mb2FkZXIuZ2VuZXJhdGUodHlwZSk7XG4gICAgICAgICAgICBfZXZlbnRBZGRlcih0eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBfZXZlbnRBZGRlcih0eXBlKSB7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0LXN1Ym1pdCcpWzBdO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5jcmVhdGUoLi4uaW50ZXJmYWNlQ29udHJvbGxlci5ldmVudCh0eXBlKSk7XG4gICAgICAgICAgICAgICAgbWFpbkxvYWQocHJvamVjdC5saXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2suY3JlYXRlKC4uLmludGVyZmFjZUNvbnRyb2xsZXIuZXZlbnQodHlwZSksIHByb2plY3RDb250cm9sbGVyLmN1cnJlbnRWaWV3KSwgcHJvamVjdENvbnRyb2xsZXIuY3VycmVudFZpZXcpXG4gICAgICAgICAgICAgICAgcHJvamVjdC5saXN0LmZvckVhY2goKHByb2opID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2ouaWQgPT0gcHJvamVjdENvbnRyb2xsZXIuY3VycmVudFZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMb2FkZXIubG9hZChwcm9qKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3JtTG9hZGVyLnJlc2V0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kaXNhYmxlZENoZWNrKHR5cGUpIHtcbiAgICAgICAgaWYgKChwcm9qZWN0Lmxpc3QpLmxlbmd0aCA9PT0gMCAmJiB0eXBlID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7Y3JlYXRlfVxufSkoKTtcblxuXG4vL1JlY2VpdmUgaW5wdXRzIGZyb20gaW5wdXQgYm94ZXNcbmxldCBpbnRlcmZhY2VDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGV2ZW50KHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgbGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIFtpbnB1dFRpdGxlLnZhbHVlLCBpbnB1dERlc2NyaXB0aW9uLnZhbHVlXTtcbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Rhc2snICkge1xuICAgICAgICAgICAgbGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIFtpbnB1dFRpdGxlLnZhbHVlLCBpbnB1dERlc2NyaXB0aW9uLnZhbHVlXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge2V2ZW50fTsgXG59KSgpXG5cbmJ1dHRvbi5jcmVhdGUoWydwcm9qZWN0JywgJ3Rhc2snXSlcbm1haW5Mb2FkKHByb2plY3QubGlzdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9