/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectController\": () => (/* binding */ projectController),\n/* harmony export */   \"taskController\": () => (/* binding */ taskController)\n/* harmony export */ });\nfunction sizer(description) {\n  const descStyle = description.style;\n  if (description.style.display === 'none') {\n    descStyle.display = 'block';\n  } else {\n    descStyle.display = 'none';\n  }\n}\n\nfunction setStatus(isDone, element, callback) {\n  if (callback && element) {\n    const status = callback();\n    const box = element;\n    if (status === false) {\n      box.className = 'unfinished';\n    } else {\n      box.className = 'finished';\n    }\n  }\n  if (isDone === false) {\n    return 'unfinished';\n  }\n  return 'finished';\n}\n\nconst taskController = (function controller() {\n  const container = [...document.getElementsByClassName('task-mainbox')][0];\n  function reset() {\n    container.textContent = '';\n  }\n  function create(task) {\n    const taskStatus = document.createElement('button');\n    const taskBox = document.createElement('div');\n    const taskHeader = document.createElement('div');\n    const taskSizer = document.createElement('button');\n    const taskTitle = document.createElement('div');\n    const taskDescription = document.createElement('div');\n\n    taskStatus.className = setStatus(task.isDone);\n    taskBox.className = 'task-container';\n    taskBox.dataset.id = task.id;\n    taskHeader.className = 'task-header';\n    taskTitle.className = 'task-title';\n    taskSizer.className = 'task-sizer';\n    taskDescription.className = 'task-desc';\n    taskDescription.style.display = 'none';\n\n    taskSizer.textContent = 'TBA';\n    taskTitle.textContent = task.title;\n    taskDescription.textContent = task.description;\n    [taskStatus, taskTitle, taskSizer].forEach((obj) => taskHeader.appendChild(obj));\n    [taskHeader, taskDescription].forEach((obj) => taskBox.appendChild(obj));\n\n    taskStatus.addEventListener('click', (box) => {\n      box.stopPropagation();\n      // Retains context\n      setStatus(taskStatus, taskStatus, () => task.setDone());\n    });\n    taskSizer.addEventListener('click', () => {\n      sizer(taskDescription);\n    });\n    return taskBox;\n  }\n  function load(tasks, utility) {\n    reset();\n    const taskBoxes = tasks.map((task) => create(task, utility.deleteTask));\n    taskBoxes.forEach((box) => container.appendChild(box));\n  }\n\n  return { load };\n}());\n\nconst projectController = (function controller() {\n  function create(project) {\n    const projectStatus = document.createElement('button');\n    const projectBox = document.createElement('div');\n    const projectHeader = document.createElement('div');\n    const projectSizer = document.createElement('button');\n    const projectTitle = document.createElement('div');\n    const projectDescription = document.createElement('div');\n\n    projectStatus.className = setStatus(project.isDone);\n    projectBox.className = 'project-container';\n    projectBox.dataset.id = project.id;\n    projectHeader.className = 'project-header';\n    projectTitle.className = 'project-title';\n    projectSizer.className = 'project-sizer';\n    projectDescription.className = 'project-desc';\n    projectDescription.style.display = 'none';\n\n    projectSizer.textContent = 'TBA';\n    projectTitle.textContent = project.title;\n    projectDescription.textContent = project.description;\n    [projectStatus, projectTitle, projectSizer].forEach((obj) => projectHeader.appendChild(obj));\n    [projectHeader, projectDescription].forEach((obj) => projectBox.appendChild(obj));\n\n    projectStatus.addEventListener('click', (box) => {\n      box.stopPropagation();\n      // Retains context\n      setStatus(projectStatus, projectStatus, () => project.setDone());\n    });\n    projectSizer.addEventListener('click', () => {\n      sizer(projectDescription);\n    });\n    projectBox.addEventListener('click', () => {\n      taskController.load(project.tasks, {\n        deleteTask: project.deleteTask,\n        addTask: project.addTask,\n      });\n    });\n    return projectBox;\n  }\n\n  function load(projects) {\n    const projectsContainer = [...document.getElementsByClassName('project-sidebar')][0];\n    const projectBoxes = projects.map((project) => create(project));\n    projectBoxes.forEach((box) => projectsContainer.appendChild(box));\n  }\n\n  return { load };\n}());\n\n\n\n\n//# sourceURL=webpack://trail/./src/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/pageload.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;