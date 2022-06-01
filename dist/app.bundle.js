/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/* \n(The MIT License)\nCopyright (c) 2014-2021 Halász Ádám <adam@aimform.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, networkInterfaces, mac, os; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports[\"default\"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n\n//# sourceURL=webpack://trail/./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n\n\nfunction mainLoad(projectList) {\n  _pageload__WEBPACK_IMPORTED_MODULE_0__.projectController.load(projectList.projects);\n  _pageload__WEBPACK_IMPORTED_MODULE_0__.formController.addFormEvent('project', projectList.addProject.bind(projectList));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainLoad);\n\n\n//# sourceURL=webpack://trail/./src/app.js?");

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoxObject\": () => (/* binding */ BoxObject),\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Task(title, description) {\n  function setDone() {\n    this.isDone = !this.isDone;\n    return this.isDone;\n  }\n  return {\n    id: uniqid__WEBPACK_IMPORTED_MODULE_0___default()(),\n    type: 'task',\n    title,\n    description,\n    isDone: false,\n    setDone,\n  };\n}\n\nfunction Project(title, description) {\n  function addTask(task) {\n    this.tasks = [...this.tasks, task];\n    return this.tasks;\n  }\n\n  function deleteTask(taskId) {\n    this.tasks = this.tasks.filter((task) => task.id !== taskId);\n  }\n\n  function setDone() {\n    this.isDone = !this.isDone;\n    return this.isDone;\n  }\n  return {\n    id: uniqid__WEBPACK_IMPORTED_MODULE_0___default()(),\n    type: 'project',\n    title,\n    description,\n    tasks: [],\n    isDone: false,\n    addTask,\n    deleteTask,\n    setDone,\n  };\n}\n\nfunction ProjectList(id, projects) {\n  function addProject(project) {\n    this.projects = [...this.projects, project];\n    return this.projects;\n  }\n\n  function deleteProject(project) {\n    this.projects = this.projects.filter((obj) => obj.id !== project.id);\n    return this.projects;\n  }\n  if (!id && !projects) {\n    return {\n      id: uniqid__WEBPACK_IMPORTED_MODULE_0___default()(),\n      projects: [],\n      addProject,\n      deleteProject,\n    };\n  }\n  return {\n    id,\n    projects,\n    addProject,\n    deleteProject,\n  };\n}\n\nfunction BoxObject(type, title, description) {\n  if (type === 'task') {\n    return Task(title, description);\n  }\n  if (type === 'project') {\n    return Project(title, description);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://trail/./src/object.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectController\": () => (/* binding */ projectController),\n/* harmony export */   \"taskController\": () => (/* binding */ taskController),\n/* harmony export */   \"formController\": () => (/* binding */ formController)\n/* harmony export */ });\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ \"./src/object.js\");\n\n\nfunction sizer(description) {\n  const descStyle = description.style;\n  if (description.style.display === 'none') {\n    descStyle.display = 'block';\n  } else {\n    descStyle.display = 'none';\n  }\n}\n\nfunction setStatus(isDone, element, callback) {\n  if (callback && element) {\n    const status = callback();\n    const box = element;\n    if (status === false) {\n      box.className = 'unfinished';\n    } else {\n      box.className = 'finished';\n    }\n  }\n  if (isDone === false) {\n    return 'unfinished';\n  }\n  return 'finished';\n}\n\nconst taskController = (function controller() {\n  const container = [...document.getElementsByClassName('task-mainbox')][0];\n  function reset() {\n    container.textContent = '';\n    document.getElementsByClassName('header-right')[0].textContent = '';\n  }\n\n  function loadButton() {\n    const btn = document.createElement('button');\n    btn.className = 'create-task-button';\n    btn.textContent = 'Create Task';\n\n    document.getElementsByClassName('header-right')[0].appendChild(btn);\n  }\n  function create(task) {\n    const taskStatus = document.createElement('button');\n    const taskBox = document.createElement('div');\n    const taskHeader = document.createElement('div');\n    const taskSizer = document.createElement('button');\n    const taskTitle = document.createElement('div');\n    const taskDescription = document.createElement('div');\n\n    taskStatus.className = setStatus(task.isDone);\n    taskBox.className = 'task-container';\n    taskBox.dataset.id = task.id;\n    taskHeader.className = 'task-header';\n    taskTitle.className = 'task-title';\n    taskSizer.className = 'task-sizer';\n    taskDescription.className = 'task-desc';\n    taskDescription.style.display = 'none';\n\n    taskSizer.textContent = 'TBA';\n    taskTitle.textContent = task.title;\n    taskDescription.textContent = task.description;\n    [taskStatus, taskTitle, taskSizer].forEach((obj) => taskHeader.appendChild(obj));\n    [taskHeader, taskDescription].forEach((obj) => taskBox.appendChild(obj));\n\n    taskStatus.addEventListener('click', (box) => {\n      box.stopPropagation();\n      // Retains context\n      setStatus(taskStatus, taskStatus, () => task.setDone());\n    });\n    taskSizer.addEventListener('click', () => {\n      sizer(taskDescription);\n    });\n    return taskBox;\n  }\n  function load(tasks, utility) {\n    reset();\n    loadButton();\n    formController.addFormEvent('task', utility);\n    const taskBoxes = tasks.map((task) => create(task, utility.deleteTask));\n    taskBoxes.forEach((box) => container.appendChild(box));\n  }\n\n  return { load };\n}());\n\nconst projectController = (function controller() {\n  function reset() {\n    document.getElementsByClassName('project-sidebar')[0].textContent = '';\n  }\n\n  function create(project) {\n    const projectStatus = document.createElement('button');\n    const projectBox = document.createElement('div');\n    const projectHeader = document.createElement('div');\n    const projectSizer = document.createElement('button');\n    const projectTitle = document.createElement('div');\n    const projectDescription = document.createElement('div');\n\n    projectStatus.className = setStatus(project.isDone);\n    projectBox.className = 'project-container';\n    projectBox.dataset.id = project.id;\n    projectHeader.className = 'project-header';\n    projectTitle.className = 'project-title';\n    projectSizer.className = 'project-sizer';\n    projectDescription.className = 'project-desc';\n    projectDescription.style.display = 'none';\n\n    projectSizer.textContent = 'TBA';\n    projectTitle.textContent = project.title;\n    projectDescription.textContent = project.description;\n    [projectStatus, projectTitle, projectSizer].forEach((obj) => projectHeader.appendChild(obj));\n    [projectHeader, projectDescription].forEach((obj) => projectBox.appendChild(obj));\n\n    projectStatus.addEventListener('click', () => {\n      // Retains context\n      setStatus(projectStatus, projectStatus, () => project.setDone());\n    });\n    projectSizer.addEventListener('click', () => {\n      sizer(projectDescription);\n    });\n    projectBox.addEventListener('click', () => {\n      taskController.load(project.tasks, {\n        deleteTask: project.deleteTask.bind(project),\n        addTask: project.addTask.bind(project),\n      });\n    });\n    return projectBox;\n  }\n\n  function load(projects) {\n    reset();\n    const projectsContainer = [...document.getElementsByClassName('project-sidebar')][0];\n    const projectBoxes = projects.map((project) => create(project));\n    projectBoxes.forEach((box) => projectsContainer.appendChild(box));\n  }\n\n  return { load };\n}());\n\nconst formController = (function controller() {\n  function reset(formWrapper, formContainer) {\n    document.body.removeChild(formWrapper);\n    formWrapper.removeChild(formContainer);\n  }\n\n  function loadFormContent(type, callback, resetter, container, wrapper) {\n    const labelTitle = document.createElement('label');\n    const inputTitle = document.createElement('input');\n    const labelDesc = document.createElement('label');\n    const inputDesc = document.createElement('textarea');\n    const submitBtn = document.createElement('button');\n\n    labelTitle.className = 'label-title';\n    inputTitle.className = 'input-title';\n    labelDesc.className = 'label-desc';\n    inputDesc.className = 'input-desc';\n    submitBtn.className = 'submit-btn';\n    submitBtn.setAttribute('type', 'button');\n    inputDesc.setAttribute('rows', 5);\n\n    labelTitle.textContent = 'Title';\n    inputTitle.placeholder = 'Give a title';\n    labelDesc.textContent = 'Description';\n    inputDesc.placeholder = 'Write a brief description';\n    submitBtn.textContent = 'submit';\n\n    if (type === 'project') {\n      submitBtn.addEventListener('click', () => {\n        const newList = callback((0,_object__WEBPACK_IMPORTED_MODULE_0__.BoxObject)(type, inputTitle.value, inputDesc.value));\n        resetter(newList);\n        reset(wrapper, container);\n      });\n    }\n\n    if (type === 'task') {\n      submitBtn.addEventListener('click', () => {\n        const newList = callback.addTask((0,_object__WEBPACK_IMPORTED_MODULE_0__.BoxObject)(type, inputTitle.value, inputDesc.value));\n        resetter(newList, callback);\n        reset(wrapper, container);\n      });\n    }\n    [labelTitle, inputTitle, labelDesc, inputDesc, submitBtn].forEach((obj) => {\n      container.appendChild(obj);\n    });\n  }\n  // Accepts both Task and Project adder callback function\n  function loadForm(type, callback, resetter) {\n    const formWrapper = document.createElement('div');\n    const formContainer = document.createElement('form');\n    const formHeader = document.createElement('h1');\n\n    formWrapper.className = 'form-wrapper';\n    formContainer.className = 'form-container';\n    formHeader.className = 'form-header';\n\n    formHeader.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Form`;\n    formWrapper.appendChild(formContainer);\n    formContainer.appendChild(formHeader);\n    loadFormContent(type, callback, resetter, formContainer, formWrapper);\n\n    document.body.appendChild(formWrapper);\n  }\n\n  function addFormEvent(type, callback) {\n    if (type === 'project') {\n      const btn = document.getElementsByClassName('create-project-button')[0];\n      btn.addEventListener('click', () => {\n        loadForm(type, callback, projectController.load);\n      });\n    }\n    if (type === 'task') {\n      const btn = document.getElementsByClassName('create-task-button')[0];\n      btn.addEventListener('click', () => {\n        loadForm(type, callback, taskController.load);\n      });\n    }\n  }\n  return { addFormEvent };\n}());\n\n\n\n\n//# sourceURL=webpack://trail/./src/pageload.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;