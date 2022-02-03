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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Font */\n\n/* Reset */\n*, *::after, *::before {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Quicksand', sans-serif;\n}\n\nbody {\n    background-color: whitesmoke;\n    height: 100vh;\n    max-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n/* Form */\n.form-wrapper {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.5);\n}\n\n.form-container {\n    width: 30vw;\n    background-color: white;\n    padding: 24px 32px;\n}\n\n.project-form {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.project-form > * {\n    flex: 1 100%;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n.project-form label {\n    font-size: 16px;\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n\n.project-form input, .project-form textarea {\n    font-size: 14px;\n    padding: 4px;\n}\n\n.project-form legend {\n    text-align: center;\n    font-family: 'Roboto Condensed', sans-serif;\n    font-weight: 700;\n    font-size: 32px;\n}\n\n.project-form span {\n    margin-top: 16px;\n    text-align: center;\n}\n\n.project-submit {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 18px;\n    font-weight: 600;\n    color: white;\n    border: 0;\n    padding: 6px 12px;\n    border-radius: 6px;\n    background-color: rgb(255,36,0);\n    cursor: pointer;\n}\n\n/* Header */\n.header-container {\n    background-color: rgb(255,36,0);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 12px 48px;\n}\n\n.header-title {\n    color: white;\n    font-size: 36px;\n    font-weight: 700;\n}\n\n.nav-list {\n    display: flex;\n    gap: 24px;\n}\n\n.nav-list > * {\n    color: white;\n    font-weight: 400;\n    font-size: 24px;\n    list-style-type: none;\n}\n\n/* Mid-content */\n.mid-content {\n    display: flex;\n    flex: 1;\n}\n\n.side-bar {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    padding: 12px;\n    flex: 1 25vw;\n    background-color: rgb(52,52,52);\n}\n\n.main-content {\n    flex: 1 75vw;\n}\n\n/* Side bar */\n.side-bar-header {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 8vh;\n    padding: 8px;\n    border-radius: 20px;\n}\n\n.create-project-button {\n    background: white;\n    border-radius: 50%;\n    height: 64px;\n    width: 64px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.create-project-button img {\n    cursor: pointer;\n    height: 48px;\n    width: 48px;\n}\n/* Main content */\n\n    /* Main content header */\n    .header-content {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        border-bottom: 0.25px solid black;\n        padding: 12px 24px;\n        margin: 0 24px;\n    }\n\n    .main-title {\n        font-size: 48px;\n        font-family: 'Roboto Condensed', sans-serf;\n    }\n    \n    .header-right {\n        display: flex;\n        align-items: center;\n        width: 48px;\n    }\n\n    .create-task-button img {\n        padding: 4px;\n        width: 48x;\n        height: 48px;\n        cursor: pointer;\n    }\n\n    .drop-icon {\n        margin-top: 6px;\n        width: 24px;\n        height: 24px;\n    }\n\n    /* Content box */\n    .content-box {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 24px 8px;\n    }\n\n    /* Project Box */\n    .project-box {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-between;\n        background-color: white;\n        margin-bottom: 8px;\n        border-radius: 15px;\n        border: 0.25px solid gainsboro;\n        padding: 12px 24px;\n    }\n\n    .project-content {\n        display: flex;\n        align-items: center;\n        gap: 16px;\n    }\n\n    .project-header {\n        flex: 1 100%;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .unchecked-circle {\n        display: block;\n        border: 1px solid black;\n        border-radius: 50%;\n        width: 20px;\n        height: 20px;\n        cursor: pointer;\n    }\n\n    .project-title {\n        font-size: 24px;\n        font-family: 'Roboto Condensed';\n        font-weight: 500;\n    }\n\n    .project-desc {\n        flex: 1 100%;\n        margin-top: 4px;\n        padding-top: 8px;\n        border-top: 0.25px solid black;\n    }\n\n    /* Task box */\n    .task-box {\n        margin: 0 24px;\n        padding: 12px 24px;\n        background-color: white;\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        font-size: 22px;\n        gap: 16px;\n        border-bottom: 0.25px solid black;  \n    }\n\n    .task-header {\n        display: flex;\n        flex: 1 100%;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .task-header span {\n        display: flex;\n        align-items: center;\n    }\n\n    .task-title {\n        font-weight: 500;\n        margin-left: 16px;\n    }\n\n    .task-desc {\n        flex: 1 100%;\n        margin-top: 4px;\n        margin-bottom: 8px;\n        padding: 8px 16px;\n        background-color: whitesmoke;\n        border: 0.5px dashed black;\n    }", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["\n/* Font */\n@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');\n\n/* Reset */\n*, *::after, *::before {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Quicksand', sans-serif;\n}\n\nbody {\n    background-color: whitesmoke;\n    height: 100vh;\n    max-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n/* Form */\n.form-wrapper {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.5);\n}\n\n.form-container {\n    width: 30vw;\n    background-color: white;\n    padding: 24px 32px;\n}\n\n.project-form {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.project-form > * {\n    flex: 1 100%;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n.project-form label {\n    font-size: 16px;\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n\n.project-form input, .project-form textarea {\n    font-size: 14px;\n    padding: 4px;\n}\n\n.project-form legend {\n    text-align: center;\n    font-family: 'Roboto Condensed', sans-serif;\n    font-weight: 700;\n    font-size: 32px;\n}\n\n.project-form span {\n    margin-top: 16px;\n    text-align: center;\n}\n\n.project-submit {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 18px;\n    font-weight: 600;\n    color: white;\n    border: 0;\n    padding: 6px 12px;\n    border-radius: 6px;\n    background-color: rgb(255,36,0);\n    cursor: pointer;\n}\n\n/* Header */\n.header-container {\n    background-color: rgb(255,36,0);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 12px 48px;\n}\n\n.header-title {\n    color: white;\n    font-size: 36px;\n    font-weight: 700;\n}\n\n.nav-list {\n    display: flex;\n    gap: 24px;\n}\n\n.nav-list > * {\n    color: white;\n    font-weight: 400;\n    font-size: 24px;\n    list-style-type: none;\n}\n\n/* Mid-content */\n.mid-content {\n    display: flex;\n    flex: 1;\n}\n\n.side-bar {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    padding: 12px;\n    flex: 1 25vw;\n    background-color: rgb(52,52,52);\n}\n\n.main-content {\n    flex: 1 75vw;\n}\n\n/* Side bar */\n.side-bar-header {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 8vh;\n    padding: 8px;\n    border-radius: 20px;\n}\n\n.create-project-button {\n    background: white;\n    border-radius: 50%;\n    height: 64px;\n    width: 64px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.create-project-button img {\n    cursor: pointer;\n    height: 48px;\n    width: 48px;\n}\n/* Main content */\n\n    /* Main content header */\n    .header-content {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        border-bottom: 0.25px solid black;\n        padding: 12px 24px;\n        margin: 0 24px;\n    }\n\n    .main-title {\n        font-size: 48px;\n        font-family: 'Roboto Condensed', sans-serf;\n    }\n    \n    .header-right {\n        display: flex;\n        align-items: center;\n        width: 48px;\n    }\n\n    .create-task-button img {\n        padding: 4px;\n        width: 48x;\n        height: 48px;\n        cursor: pointer;\n    }\n\n    .drop-icon {\n        margin-top: 6px;\n        width: 24px;\n        height: 24px;\n    }\n\n    /* Content box */\n    .content-box {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 24px 8px;\n    }\n\n    /* Project Box */\n    .project-box {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-between;\n        background-color: white;\n        margin-bottom: 8px;\n        border-radius: 15px;\n        border: 0.25px solid gainsboro;\n        padding: 12px 24px;\n    }\n\n    .project-content {\n        display: flex;\n        align-items: center;\n        gap: 16px;\n    }\n\n    .project-header {\n        flex: 1 100%;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .unchecked-circle {\n        display: block;\n        border: 1px solid black;\n        border-radius: 50%;\n        width: 20px;\n        height: 20px;\n        cursor: pointer;\n    }\n\n    .project-title {\n        font-size: 24px;\n        font-family: 'Roboto Condensed';\n        font-weight: 500;\n    }\n\n    .project-desc {\n        flex: 1 100%;\n        margin-top: 4px;\n        padding-top: 8px;\n        border-top: 0.25px solid black;\n    }\n\n    /* Task box */\n    .task-box {\n        margin: 0 24px;\n        padding: 12px 24px;\n        background-color: white;\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        font-size: 22px;\n        gap: 16px;\n        border-bottom: 0.25px solid black;  \n    }\n\n    .task-header {\n        display: flex;\n        flex: 1 100%;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .task-header span {\n        display: flex;\n        align-items: center;\n    }\n\n    .task-title {\n        font-weight: 500;\n        margin-left: 16px;\n    }\n\n    .task-desc {\n        flex: 1 100%;\n        margin-top: 4px;\n        margin-bottom: 8px;\n        padding: 8px 16px;\n        background-color: whitesmoke;\n        border: 0.5px dashed black;\n    }"],"sourceRoot":""}]);
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
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

const project = (function() {
    const list = [];
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
        project.list[projectID]['tasks'].push(task);
    }

    function remove(target, parent) {
        parent.forEach((foo) => {
            if (foo.id === target.id) {
                parent.splice(foo, 1);
            }
        })
    }

    return { list, create, addTask, remove };
})();

const task = (function() {
    function create(title, description) {
        let newTask = new Task(title, description);
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

//Load the project and project's task
function mainLoad(projects) {
    document.getElementsByClassName('project-sidebar')[0].textContent= '';
    projects.forEach((project) => {
        projectController.load(project)
    })
    if (projects[projectController.currentView]) {
        taskLoader.load(projects[projectController.currentView]);
    } else {
        taskLoader.reset();
    }

}

//Generate project's element and keep track of current project's view
let projectController = (function() {
    let currentView = '0';
    function changeView(newView) {
        projectController.current = newView;
    }; 
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
            projectController.changeView(project['id']);
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
    

    return {load, currentView, changeView};
})()

let taskLoader = (function() {
    function reset() {
        document.getElementsByClassName('task-mainbox')[0].textContent = '';    
    }
    function load(project) {
        reset();
        project["tasks"].forEach((task) => {
            console.log(task);
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

    function _collapse(box) {
        let boxDesc = document.createElement('div');

        let boxContainer = document.querySelectorAll(`.${box['type']}-${box['id']}`)[0];

        boxDesc.classList.add(`${box['type']}-desc`);
        boxDesc.classList.add(`${box['type']}-desc-${box['id']}`)
        boxDesc.textContent = box['desc'];

        boxContainer.appendChild(boxDesc);

        box['el'].classList.add('expand')
        box['el'].classList.remove('collapse')

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
                _app_js__WEBPACK_IMPORTED_MODULE_1__.project.addTask(_app_js__WEBPACK_IMPORTED_MODULE_1__.task.create(...interfaceController.event(type)), _pageload_js__WEBPACK_IMPORTED_MODULE_2__.projectController.currentView)
                _pageload_js__WEBPACK_IMPORTED_MODULE_2__.taskLoader.load(_app_js__WEBPACK_IMPORTED_MODULE_1__.project.list[_pageload_js__WEBPACK_IMPORTED_MODULE_2__.projectController.currentView]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxhQUFhLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9B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WTtBQUNaLENBQUM7O0FBRUQ7QUFDQSx1REFBUSxDQUFDLGlEQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFpbC8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly90cmFpbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdHJhaWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90cmFpbC8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3RyYWlsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RyYWlsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90cmFpbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90cmFpbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90cmFpbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RyYWlsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdHJhaWwvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RyYWlsLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3RyYWlsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyYWlsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RyYWlsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RyYWlsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJhaWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90cmFpbC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyogRm9udCAqL1xcblxcbi8qIFJlc2V0ICovXFxuKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogRm9ybSAqL1xcbi5mb3JtLXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjRweCAzMnB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtID4gKiB7XFxuICAgIGZsZXg6IDEgMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnByb2plY3QtZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gaW5wdXQsIC5wcm9qZWN0LWZvcm0gdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSBsZWdlbmQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSBzcGFuIHtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1zdWJtaXQge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDM2LDApO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwzNiwwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMnB4IDQ4cHg7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4ubmF2LWxpc3QgPiAqIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLyogTWlkLWNvbnRlbnQgKi9cXG4ubWlkLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGZsZXg6IDEgMjV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLDUyLDUyKTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGZsZXg6IDEgNzV2dztcXG59XFxuXFxuLyogU2lkZSBiYXIgKi9cXG4uc2lkZS1iYXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idXR0b24gaW1nIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIHdpZHRoOiA0OHB4O1xcbn1cXG4vKiBNYWluIGNvbnRlbnQgKi9cXG5cXG4gICAgLyogTWFpbiBjb250ZW50IGhlYWRlciAqL1xcbiAgICAuaGVhZGVyLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjI1cHggc29saWQgYmxhY2s7XFxuICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxuICAgICAgICBtYXJnaW46IDAgMjRweDtcXG4gICAgfVxcblxcbiAgICAubWFpbi10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmY7XFxuICAgIH1cXG4gICAgXFxuICAgIC5oZWFkZXItcmlnaHQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogNDhweDtcXG4gICAgfVxcblxcbiAgICAuY3JlYXRlLXRhc2stYnV0dG9uIGltZyB7XFxuICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgICB3aWR0aDogNDh4O1xcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5kcm9wLWljb24ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgLyogQ29udGVudCBib3ggKi9cXG4gICAgLmNvbnRlbnQtYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBwYWRkaW5nOiAyNHB4IDhweDtcXG4gICAgfVxcblxcbiAgICAvKiBQcm9qZWN0IEJveCAqL1xcbiAgICAucHJvamVjdC1ib3gge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBib3JkZXI6IDAuMjVweCBzb2xpZCBnYWluc2Jvcm87XFxuICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTZweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1oZWFkZXIge1xcbiAgICAgICAgZmxleDogMSAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgLnVuY2hlY2tlZC1jaXJjbGUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCc7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRlc2Mge1xcbiAgICAgICAgZmxleDogMSAxMDAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcXG4gICAgICAgIGJvcmRlci10b3A6IDAuMjVweCBzb2xpZCBibGFjaztcXG4gICAgfVxcblxcbiAgICAvKiBUYXNrIGJveCAqL1xcbiAgICAudGFzay1ib3gge1xcbiAgICAgICAgbWFyZ2luOiAwIDI0cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgZ2FwOiAxNnB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4yNXB4IHNvbGlkIGJsYWNrOyAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2staGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4OiAxIDEwMCU7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWhlYWRlciBzcGFuIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcXG4gICAgfVxcblxcbiAgICAudGFzay1kZXNjIHtcXG4gICAgICAgIGZsZXg6IDEgMTAwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgIGJvcmRlcjogMC41cHggZGFzaGVkIGJsYWNrO1xcbiAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQSxTQUFTOztBQUdULFVBQVU7QUFDVjtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBLFNBQVM7QUFDVDtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFr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SUFFQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQiw0QkFBNEI7UUFDNUIsMEJBQTBCO0lBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi8qIEZvbnQgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBSZXNldCAqL1xcbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIEZvcm0gKi9cXG4uZm9ybS13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDI0cHggMzJweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSA+ICoge1xcbiAgICBmbGV4OiAxIDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIGlucHV0LCAucHJvamVjdC1mb3JtIHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gbGVnZW5kIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gc3BhbiB7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3Qtc3VibWl0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogNnB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwzNiwwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMzYsMCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTJweCA0OHB4O1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG59XFxuXFxuLm5hdi1saXN0ID4gKiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi8qIE1pZC1jb250ZW50ICovXFxuLm1pZC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnNpZGUtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBmbGV4OiAxIDI1dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1Miw1Miw1Mik7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBmbGV4OiAxIDc1dnc7XFxufVxcblxcbi8qIFNpZGUgYmFyICovXFxuLnNpZGUtYmFyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnV0dG9uIGltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICB3aWR0aDogNDhweDtcXG59XFxuLyogTWFpbiBjb250ZW50ICovXFxuXFxuICAgIC8qIE1haW4gY29udGVudCBoZWFkZXIgKi9cXG4gICAgLmhlYWRlci1jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4yNXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xcbiAgICAgICAgbWFyZ2luOiAwIDI0cHg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJmO1xcbiAgICB9XFxuICAgIFxcbiAgICAuaGVhZGVyLXJpZ2h0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDQ4cHg7XFxuICAgIH1cXG5cXG4gICAgLmNyZWF0ZS10YXNrLWJ1dHRvbiBpbWcge1xcbiAgICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgICAgd2lkdGg6IDQ4eDtcXG4gICAgICAgIGhlaWdodDogNDhweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAuZHJvcC1pY29uIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB9XFxuXFxuICAgIC8qIENvbnRlbnQgYm94ICovXFxuICAgIC5jb250ZW50LWJveCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgcGFkZGluZzogMjRweCA4cHg7XFxuICAgIH1cXG5cXG4gICAgLyogUHJvamVjdCBCb3ggKi9cXG4gICAgLnByb2plY3QtYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cHggc29saWQgZ2FpbnNib3JvO1xcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtaGVhZGVyIHtcXG4gICAgICAgIGZsZXg6IDEgMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgIC51bmNoZWNrZWQtY2lyY2xlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kZXNjIHtcXG4gICAgICAgIGZsZXg6IDEgMTAwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICAgICAgICBib3JkZXItdG9wOiAwLjI1cHggc29saWQgYmxhY2s7XFxuICAgIH1cXG5cXG4gICAgLyogVGFzayBib3ggKi9cXG4gICAgLnRhc2stYm94IHtcXG4gICAgICAgIG1hcmdpbjogMCAyNHB4O1xcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuMjVweCBzb2xpZCBibGFjazsgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrLWhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleDogMSAxMDAlO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAudGFzay1oZWFkZXIgc3BhbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAudGFzay10aXRsZSB7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLnRhc2stZGVzYyB7XFxuICAgICAgICBmbGV4OiAxIDEwMCU7XFxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICBib3JkZXI6IDAuNXB4IGRhc2hlZCBibGFjaztcXG4gICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBsaXN0ID0gW107XG4gICAgbGV0IHggPSAwO1xuICAgIGxldCB5ID0gMDtcbiAgICBmdW5jdGlvbiBnZXRJZCh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIHggKz0gMVxuICAgICAgICAgICAgcmV0dXJuICt4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIHkgKz0gMVxuICAgICAgICAgICAgcmV0dXJuICt5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChnZXRJZCgncHJvamVjdCcpLCB0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBsaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGFzayh0YXNrLCBwcm9qZWN0SUQpIHtcbiAgICAgICAgdGFzay5pZCA9IGdldElkKCd0YXNrJyk7XG4gICAgICAgIHByb2plY3QubGlzdFtwcm9qZWN0SURdWyd0YXNrcyddLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5mb3JFYWNoKChmb28pID0+IHtcbiAgICAgICAgICAgIGlmIChmb28uaWQgPT09IHRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5zcGxpY2UoZm9vLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4geyBsaXN0LCBjcmVhdGUsIGFkZFRhc2ssIHJlbW92ZSB9O1xufSkoKTtcblxuY29uc3QgdGFzayA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGUodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZX07XG59KSgpXG5cbmV4cG9ydCB7IHRhc2ssIHByb2plY3QgfTsiLCJpbXBvcnQgYXJyb3dEb3duIGZyb20gJy4vYXJyb3dkb3duLnBuZyc7XG5pbXBvcnQgY29sbGFwc2VJY29uIGZyb20gJy4vY29sbGFwc2UucG5nJztcbmltcG9ydCB7cHJvamVjdH0gZnJvbSAnLi9hcHAuanMnO1xuXG5sZXQgbWFpblByb2plY3QgPSBwcm9qZWN0O1xuXG4vL0xvYWQgdGhlIHByb2plY3QgYW5kIHByb2plY3QncyB0YXNrXG5mdW5jdGlvbiBtYWluTG9hZChwcm9qZWN0cykge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3Qtc2lkZWJhcicpWzBdLnRleHRDb250ZW50PSAnJztcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmxvYWQocHJvamVjdClcbiAgICB9KVxuICAgIGlmIChwcm9qZWN0c1twcm9qZWN0Q29udHJvbGxlci5jdXJyZW50Vmlld10pIHtcbiAgICAgICAgdGFza0xvYWRlci5sb2FkKHByb2plY3RzW3Byb2plY3RDb250cm9sbGVyLmN1cnJlbnRWaWV3XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza0xvYWRlci5yZXNldCgpO1xuICAgIH1cblxufVxuXG4vL0dlbmVyYXRlIHByb2plY3QncyBlbGVtZW50IGFuZCBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgcHJvamVjdCdzIHZpZXdcbmxldCBwcm9qZWN0Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgY3VycmVudFZpZXcgPSAnMCc7XG4gICAgZnVuY3Rpb24gY2hhbmdlVmlldyhuZXdWaWV3KSB7XG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmN1cnJlbnQgPSBuZXdWaWV3O1xuICAgIH07IFxuICAgIGZ1bmN0aW9uIGxvYWQocHJvamVjdCkge1xuICAgICAgICBsZXQgcHJvamVjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB1bmNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxldCBkcm9wV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGV0IGRyb3BJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgXG4gICAgICAgIHByb2plY3RCb3guY2xhc3NMaXN0LmFkZChgcHJvamVjdC0ke3Byb2plY3RbJ2lkJ119YCk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkZXInKTtcbiAgICAgICAgcHJvamVjdEJveC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJveCcpO1xuICAgICAgICB1bmNoZWNrZWQuY2xhc3NMaXN0LmFkZCgndW5jaGVja2VkLWNpcmNsZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qZWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRlbnQnKTtcbiAgICAgICAgZHJvcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICAgICAgZHJvcEljb24uY2xhc3NMaXN0LmFkZCgnZHJvcC1pY29uJyk7XG5cbiAgICAgICAgZHJvcEljb24uc3JjID0gYXJyb3dEb3duO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Wyd0aXRsZSddO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0LXNpZGViYXInKVswXS5hcHBlbmRDaGlsZChwcm9qZWN0Qm94KTtcblxuICAgICAgICBkcm9wV3JhcHBlci5hcHBlbmRDaGlsZChkcm9wSWNvbik7XG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHVuY2hlY2tlZCk7XG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQpXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZHJvcFdyYXBwZXIpO1xuICAgICAgICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICAgICAgICB1bmNoZWNrZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY2hlY2tDb250cm9sbGVyLmNoZWNrKHByb2plY3QsIG1haW5Qcm9qZWN0Lmxpc3QpXG4gICAgICAgICAgICBtYWluTG9hZChtYWluUHJvamVjdC5saXN0KTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdEJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0YXNrTG9hZGVyLmxvYWQocHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5jaGFuZ2VWaWV3KHByb2plY3RbJ2lkJ10pO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRyb3BXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGJveENvbnRyb2xsZXIuaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgaWQ6IHByb2plY3RbJ2lkJ10sXG4gICAgICAgICAgICAgICAgaWNvbjogZHJvcEljb24sXG4gICAgICAgICAgICAgICAgZWw6IGRyb3BXcmFwcGVyLFxuICAgICAgICAgICAgICAgIGRlc2M6IHByb2plY3RbJ2Rlc2NyaXB0aW9uJ10sXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Byb2plY3QnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4ge2xvYWQsIGN1cnJlbnRWaWV3LCBjaGFuZ2VWaWV3fTtcbn0pKClcblxubGV0IHRhc2tMb2FkZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stbWFpbmJveCcpWzBdLnRleHRDb250ZW50ID0gJyc7ICAgIFxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkKHByb2plY3QpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJvamVjdFtcInRhc2tzXCJdLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICAgICAgbGV0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBsZXQgdW5jaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbGV0IGRyb3BXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbGV0IGRyb3BJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tbJ3RpdGxlJ107XG4gICAgICAgICAgICB0YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICAgICAgdW5jaGVja2VkLmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZC1jaXJjbGUnKTtcbiAgICAgICAgICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZCgndGFzay1ib3gnKTtcbiAgICAgICAgICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZChgdGFzay0ke3Rhc2tbJ2lkJ119YCk7XG4gICAgICAgICAgICB0YXNrQm94LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBgJHt0YXNrWydpZCddfWApO1xuICAgICAgICAgICAgZHJvcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICAgICAgICAgIGRyb3BJY29uLmNsYXNzTGlzdC5hZGQoJ2Ryb3AtaWNvbicpO1xuXG4gICAgICAgICAgICBkcm9wSWNvbi5zcmMgPSBhcnJvd0Rvd247XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stbWFpbmJveCcpWzBdLmFwcGVuZENoaWxkKHRhc2tCb3gpO1xuXG4gICAgICAgICAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpXG4gICAgICAgICAgICB0YXNrSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbiAgICAgICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHVuY2hlY2tlZCk7XG4gICAgICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICAgICAgZHJvcFdyYXBwZXIuYXBwZW5kQ2hpbGQoZHJvcEljb24pO1xuICAgICAgICAgICAgdGFza0hlYWRlci5hcHBlbmRDaGlsZChkcm9wV3JhcHBlcik7XG4gICAgICAgICAgICB1bmNoZWNrZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNoZWNrQ29udHJvbGxlci5jaGVjayh0YXNrLCBwcm9qZWN0LnRhc2tzKVxuICAgICAgICAgICAgICAgIG1haW5Mb2FkKG1haW5Qcm9qZWN0Lmxpc3QpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkcm9wV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgYm94Q29udHJvbGxlci5oYW5kbGVyKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRhc2tbJ2lkJ10sXG4gICAgICAgICAgICAgICAgICAgIGljb246IGRyb3BJY29uLFxuICAgICAgICAgICAgICAgICAgICBlbDogZHJvcFdyYXBwZXIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IHRhc2tbJ2Rlc2NyaXB0aW9uJ10sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0YXNrJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2xvYWQsIHJlc2V0fTsgIFxufSkoKVxuXG5sZXQgZm9ybUxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS13cmFwcGVyJylbMF0udGV4dENvbnRlbnQgPSAwO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0td3JhcHBlcicpWzBdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZSh0eXBlKSB7XG4gICAgICAgIGxldCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgICAgICBsZXQgYnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG5cbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVyJyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1XcmFwcGVyKTtcbiAgICAgICAgZm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcilcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsZWdlbmQpO1xuICAgICAgICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ2NyZWF0ZSc7XG5cbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxldCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXN1Ym1pdCcpO1xuICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSAnVHJhY2sgUHJvamVjdCc7XG4gICAgICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyb3dzJywgJzUnKTtcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCBUaXRsZSc7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnUHJvamVjdCBEZXNjcmlwdGlvbic7XG5cbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBfZGVmYXVsdEF0dHJpYnV0ZShpbnB1dFRpdGxlLCAncHJvamVjdC10aXRsZScsICdSZWFkIGEgYm9vayAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSA0MCknLCAndGV4dCcpO1xuICAgICAgICAgICAgX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXREZXNjcmlwdGlvbiwgJ3Byb2plY3QtZGVzY3JpcHRpb24nLCAnTXVzdCBjb21wbGV0ZSAzIGNoYXB0ZXJzIG9mIEFTSU9BRiBhbmQgYmUgYWJsZSB0byByZWNhbGwgdGhlIHBsb3QgKE1pbiBsZW5ndGggPSAzLCBNYXggbGVuZ3RoID0gMjAwKScsICdub25lJyk7XG4gICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0YXNrJykge1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1Rhc2sgTmFtZSc7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnVGFzayBEZXNjcmlwdGlvbic7ICBcblxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIF9kZWZhdWx0QXR0cmlidXRlKGlucHV0VGl0bGUsICdwcm9qZWN0LXRpdGxlJywgJ1JlYWQgNSBwYWdlcyAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSA0MCknLCAndGV4dCcpO1xuICAgICAgICAgICAgX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXREZXNjcmlwdGlvbiwgJ3Byb2plY3QtZGVzY3JpcHRpb24nLCAnSXRcXCdsbCB0YWtlIDUgYSBmZXcgaG91cnMgdG8gY29tcGxldGUsIG5vIGRpc3RyYWN0aW9uLiAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSAyMDApJywgJ25vbmUnKVxuICAgICAgICAgfVxuXG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bldyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9kZWZhdWx0QXR0cmlidXRlKGlucHV0LCBpZCwgcGxhY2Vob2xkZXIsIHR5cGUpIHtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMycpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpXG4gICAgICAgIGlmICh0eXBlLm5vZGVOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICcyMDAnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICc0MCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICByZXR1cm4ge2dlbmVyYXRlLCByZXNldH1cbn0pKClcblxubGV0IGJveENvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gaGFuZGxlcihib3gpIHtcbiAgICAgICAgaWYgKGJveFsnZWwnXS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlJykpIHtcbiAgICAgICAgICAgIF9jb2xsYXBzZShib3gpO1xuICAgICAgICB9IGVsc2UgaWYgKGJveFsnZWwnXS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZCcpKSB7XG4gICAgICAgICAgICBfZXhwYW5kKGJveCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY29sbGFwc2UoYm94KSB7XG4gICAgICAgIGxldCBib3hEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGV0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JveFsndHlwZSddfS0ke2JveFsnaWQnXX1gKVswXTtcblxuICAgICAgICBib3hEZXNjLmNsYXNzTGlzdC5hZGQoYCR7Ym94Wyd0eXBlJ119LWRlc2NgKTtcbiAgICAgICAgYm94RGVzYy5jbGFzc0xpc3QuYWRkKGAke2JveFsndHlwZSddfS1kZXNjLSR7Ym94WydpZCddfWApXG4gICAgICAgIGJveERlc2MudGV4dENvbnRlbnQgPSBib3hbJ2Rlc2MnXTtcblxuICAgICAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYm94RGVzYyk7XG5cbiAgICAgICAgYm94WydlbCddLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpXG4gICAgICAgIGJveFsnZWwnXS5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZScpXG5cbiAgICAgICAgX2ljb25DaGFuZ2UoYm94WydpY29uJ10sIGNvbGxhcHNlSWNvbilcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gX2V4cGFuZChib3gpIHtcbiAgICAgICAgbGV0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JveFsndHlwZSddfS0ke2JveFsnaWQnXX1gKVswXTtcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JveFsndHlwZSddfS1kZXNjLSR7Ym94WydpZCddfWApWzBdO1xuICAgICAgICBib3hDb250YWluZXIucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcblxuICAgICAgICBib3hbJ2VsJ10uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgICAgICBib3hbJ2VsJ10uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kJylcblxuICAgICAgICBfaWNvbkNoYW5nZShib3hbJ2ljb24nXSwgYXJyb3dEb3duKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pY29uQ2hhbmdlKGljb24sIHR5cGUpIHtcbiAgICAgICAgaWNvbi5zcmMgPSB0eXBlO1xuICAgIH1cbiAgICByZXR1cm4ge2hhbmRsZXJ9XG59KSgpXG5cbmNvbnN0IGNoZWNrQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBjaGVjayh0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICBwcm9qZWN0LnJlbW92ZSh0YXJnZXQsIHBhcmVudCk7XG4gICAgfVxuICAgIHJldHVybiB7Y2hlY2t9O1xufSkoKVxuXG5leHBvcnQge21haW5Mb2FkLCBmb3JtTG9hZGVyLCB0YXNrTG9hZGVyLCBwcm9qZWN0Q29udHJvbGxlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vbWFpbi5jc3MnO1xuaW1wb3J0IHsgdGFzaywgcHJvamVjdCB9IGZyb20gJy4vYXBwLmpzJztcbmltcG9ydCB7IG1haW5Mb2FkLCBmb3JtTG9hZGVyLCB0YXNrTG9hZGVyLCBwcm9qZWN0Q29udHJvbGxlcn0gZnJvbSAnLi9wYWdlbG9hZC5qcyc7XG5pbXBvcnQgY3JlYXRlUHJvamVjdEljb24gZnJvbSAnLi9jcmVhdGVQcm9qZWN0SWNvbi5wbmcnO1xuaW1wb3J0IGNyZWF0ZVRhc2tJY29uIGZyb20gJy4vY3JlYXRlLWJ1dHRvbi5wbmcnO1xuXG4vLyBDcmVhdGUgYnV0dG9ucyBhbmQgYWRkIGV2ZW50cyBmb3IgY3JlYXRpbmcgZm9ybXNcbmxldCBidXR0b24gPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlKHR5cGVzKSB7XG4gICAgICAgIHR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBjcmVhdGUtJHt0eXBlfS1idXR0b25gKVswXTtcbiAgICAgICAgICAgIF9hc3NpZ24odHlwZSwgYnRuKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGNyZWF0ZS0ke3R5cGV9LWJ1dHRvbmApWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xsZXIuY3JlYXRlKGAke3R5cGV9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICBmdW5jdGlvbiBfYXNzaWduKHR5cGUsIGJ0bikge1xuICAgICAgICBsZXQgY3JlYXRlQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5zcmMgPSBjcmVhdGVQcm9qZWN0SWNvbjtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdCcpO1xuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5zcmMgPSBjcmVhdGVUYXNrSWNvbjtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtdGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24pO1xuICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtjcmVhdGV9O1xufSkoKVxuXG4vL0hhbmRsZSB0aGUgY3JlYXRpb24gb2YgZm9ybSBhbmQgZ2l2ZSBpdCBmdW5jdGlvbmFsaXR5XG5sZXQgZm9ybUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlKHR5cGUpIHtcbiAgICAgICAgaWYoX2Rpc2FibGVkQ2hlY2sodHlwZSkpIHtcbiAgICAgICAgICAgIGZvcm1Mb2FkZXIuZ2VuZXJhdGUodHlwZSk7XG4gICAgICAgICAgICBfZXZlbnRBZGRlcih0eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBfZXZlbnRBZGRlcih0eXBlKSB7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0LXN1Ym1pdCcpWzBdO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5jcmVhdGUoLi4uaW50ZXJmYWNlQ29udHJvbGxlci5ldmVudCh0eXBlKSk7XG4gICAgICAgICAgICAgICAgbWFpbkxvYWQocHJvamVjdC5saXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2suY3JlYXRlKC4uLmludGVyZmFjZUNvbnRyb2xsZXIuZXZlbnQodHlwZSkpLCBwcm9qZWN0Q29udHJvbGxlci5jdXJyZW50VmlldylcbiAgICAgICAgICAgICAgICB0YXNrTG9hZGVyLmxvYWQocHJvamVjdC5saXN0W3Byb2plY3RDb250cm9sbGVyLmN1cnJlbnRWaWV3XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3JtTG9hZGVyLnJlc2V0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kaXNhYmxlZENoZWNrKHR5cGUpIHtcbiAgICAgICAgaWYgKChwcm9qZWN0Lmxpc3QpLmxlbmd0aCA9PT0gMCAmJiB0eXBlID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7Y3JlYXRlfVxufSkoKTtcblxuXG4vL1JlY2VpdmUgaW5wdXRzIGZyb20gaW5wdXQgYm94ZXNcbmxldCBpbnRlcmZhY2VDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGV2ZW50KHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgbGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIFtpbnB1dFRpdGxlLnZhbHVlLCBpbnB1dERlc2NyaXB0aW9uLnZhbHVlXTtcbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Rhc2snICkge1xuICAgICAgICAgICAgbGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIFtpbnB1dFRpdGxlLnZhbHVlLCBpbnB1dERlc2NyaXB0aW9uLnZhbHVlXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge2V2ZW50fTsgXG59KSgpXG5cbmJ1dHRvbi5jcmVhdGUoWydwcm9qZWN0JywgJ3Rhc2snXSlcbm1haW5Mb2FkKHByb2plY3QubGlzdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9