/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZndDO0FBQ0U7QUFDVDs7QUFFakMsa0JBQWtCLDRDQUFPOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsMkNBQVM7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFdBQVc7QUFDckQsZ0RBQWdELFdBQVc7QUFDM0Q7QUFDQTs7QUFFQSwyQkFBMkIsMkNBQVM7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTs7QUFFYixTQUFTO0FBQ1Q7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5REFBeUQsWUFBWSxHQUFHLFVBQVU7O0FBRWxGLGlDQUFpQyxZQUFZO0FBQzdDLGlDQUFpQyxZQUFZLFFBQVEsVUFBVTtBQUMvRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlDQUFpQywwQ0FBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQSx5REFBeUQsWUFBWSxHQUFHLFVBQVU7QUFDbEYsbURBQW1ELFlBQVksUUFBUSxVQUFVO0FBQ2pGOztBQUVBO0FBQ0E7O0FBRUEsaUNBQWlDLDJDQUFTO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQSxRQUFRLG1EQUFjO0FBQ3RCO0FBQ0EsWUFBWTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFpbC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdHJhaWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJhaWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyYWlsL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdHJhaWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyYWlsL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RyYWlsLy4vc3JjL3BhZ2Vsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBsaXN0ID0gW107XG4gICAgbGV0IHggPSAwO1xuICAgIGxldCB5ID0gMDtcbiAgICBmdW5jdGlvbiBnZXRJZCh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIHggKz0gMVxuICAgICAgICAgICAgcmV0dXJuICt4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIHkgKz0gMVxuICAgICAgICAgICAgcmV0dXJuICt5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChnZXRJZCgncHJvamVjdCcpLCB0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBsaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGFzayh0YXNrLCBwcm9qZWN0SUQpIHtcbiAgICAgICAgdGFzay5pZCA9IGdldElkKCd0YXNrJyk7XG4gICAgICAgIHByb2plY3QubGlzdFtwcm9qZWN0SURdWyd0YXNrcyddLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5mb3JFYWNoKChmb28pID0+IHtcbiAgICAgICAgICAgIGlmIChmb28uaWQgPT09IHRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5zcGxpY2UoZm9vLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4geyBsaXN0LCBjcmVhdGUsIGFkZFRhc2ssIHJlbW92ZSB9O1xufSkoKTtcblxuY29uc3QgdGFzayA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGUodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZX07XG59KSgpXG5cbmV4cG9ydCB7IHRhc2ssIHByb2plY3QgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgYXJyb3dEb3duIGZyb20gJy4vYXJyb3dkb3duLnBuZyc7XG5pbXBvcnQgY29sbGFwc2VJY29uIGZyb20gJy4vY29sbGFwc2UucG5nJztcbmltcG9ydCB7cHJvamVjdH0gZnJvbSAnLi9hcHAuanMnO1xuXG5sZXQgbWFpblByb2plY3QgPSBwcm9qZWN0O1xuXG4vL0xvYWQgdGhlIHByb2plY3QgYW5kIHByb2plY3QncyB0YXNrXG5mdW5jdGlvbiBtYWluTG9hZChwcm9qZWN0cykge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3Qtc2lkZWJhcicpWzBdLnRleHRDb250ZW50PSAnJztcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmxvYWQocHJvamVjdClcbiAgICB9KVxuICAgIGlmIChwcm9qZWN0c1twcm9qZWN0Q29udHJvbGxlci5jdXJyZW50Vmlld10pIHtcbiAgICAgICAgdGFza0xvYWRlci5sb2FkKHByb2plY3RzW3Byb2plY3RDb250cm9sbGVyLmN1cnJlbnRWaWV3XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza0xvYWRlci5yZXNldCgpO1xuICAgIH1cblxufVxuXG4vL0dlbmVyYXRlIHByb2plY3QncyBlbGVtZW50IGFuZCBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgcHJvamVjdCdzIHZpZXdcbmxldCBwcm9qZWN0Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgY3VycmVudFZpZXcgPSAnMCc7XG4gICAgZnVuY3Rpb24gY2hhbmdlVmlldyhuZXdWaWV3KSB7XG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmN1cnJlbnQgPSBuZXdWaWV3O1xuICAgIH07IFxuICAgIGZ1bmN0aW9uIGxvYWQocHJvamVjdCkge1xuICAgICAgICBsZXQgcHJvamVjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB1bmNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxldCBkcm9wV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGV0IGRyb3BJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgXG4gICAgICAgIHByb2plY3RCb3guY2xhc3NMaXN0LmFkZChgcHJvamVjdC0ke3Byb2plY3RbJ2lkJ119YCk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkZXInKTtcbiAgICAgICAgcHJvamVjdEJveC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJveCcpO1xuICAgICAgICB1bmNoZWNrZWQuY2xhc3NMaXN0LmFkZCgndW5jaGVja2VkLWNpcmNsZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qZWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRlbnQnKTtcbiAgICAgICAgZHJvcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICAgICAgZHJvcEljb24uY2xhc3NMaXN0LmFkZCgnZHJvcC1pY29uJyk7XG5cbiAgICAgICAgZHJvcEljb24uc3JjID0gYXJyb3dEb3duO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Wyd0aXRsZSddO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0LXNpZGViYXInKVswXS5hcHBlbmRDaGlsZChwcm9qZWN0Qm94KTtcblxuICAgICAgICBkcm9wV3JhcHBlci5hcHBlbmRDaGlsZChkcm9wSWNvbik7XG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHVuY2hlY2tlZCk7XG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQpXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZHJvcFdyYXBwZXIpO1xuICAgICAgICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICAgICAgICB1bmNoZWNrZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY2hlY2tDb250cm9sbGVyLmNoZWNrKHByb2plY3QsIG1haW5Qcm9qZWN0Lmxpc3QpXG4gICAgICAgICAgICBtYWluTG9hZChtYWluUHJvamVjdC5saXN0KTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdEJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0YXNrTG9hZGVyLmxvYWQocHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5jaGFuZ2VWaWV3KHByb2plY3RbJ2lkJ10pO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRyb3BXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGJveENvbnRyb2xsZXIuaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgaWQ6IHByb2plY3RbJ2lkJ10sXG4gICAgICAgICAgICAgICAgaWNvbjogZHJvcEljb24sXG4gICAgICAgICAgICAgICAgZWw6IGRyb3BXcmFwcGVyLFxuICAgICAgICAgICAgICAgIGRlc2M6IHByb2plY3RbJ2Rlc2NyaXB0aW9uJ10sXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Byb2plY3QnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4ge2xvYWQsIGN1cnJlbnRWaWV3LCBjaGFuZ2VWaWV3fTtcbn0pKClcblxubGV0IHRhc2tMb2FkZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stbWFpbmJveCcpWzBdLnRleHRDb250ZW50ID0gJyc7ICAgIFxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkKHByb2plY3QpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJvamVjdFtcInRhc2tzXCJdLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICAgICAgbGV0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBsZXQgdW5jaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbGV0IGRyb3BXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbGV0IGRyb3BJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tbJ3RpdGxlJ107XG4gICAgICAgICAgICB0YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICAgICAgdW5jaGVja2VkLmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZC1jaXJjbGUnKTtcbiAgICAgICAgICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZCgndGFzay1ib3gnKTtcbiAgICAgICAgICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZChgdGFzay0ke3Rhc2tbJ2lkJ119YCk7XG4gICAgICAgICAgICB0YXNrQm94LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBgJHt0YXNrWydpZCddfWApO1xuICAgICAgICAgICAgZHJvcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICAgICAgICAgIGRyb3BJY29uLmNsYXNzTGlzdC5hZGQoJ2Ryb3AtaWNvbicpO1xuXG4gICAgICAgICAgICBkcm9wSWNvbi5zcmMgPSBhcnJvd0Rvd247XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stbWFpbmJveCcpWzBdLmFwcGVuZENoaWxkKHRhc2tCb3gpO1xuXG4gICAgICAgICAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpXG4gICAgICAgICAgICB0YXNrSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbiAgICAgICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHVuY2hlY2tlZCk7XG4gICAgICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICAgICAgZHJvcFdyYXBwZXIuYXBwZW5kQ2hpbGQoZHJvcEljb24pO1xuICAgICAgICAgICAgdGFza0hlYWRlci5hcHBlbmRDaGlsZChkcm9wV3JhcHBlcik7XG4gICAgICAgICAgICB1bmNoZWNrZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNoZWNrQ29udHJvbGxlci5jaGVjayh0YXNrLCBwcm9qZWN0LnRhc2tzKVxuICAgICAgICAgICAgICAgIG1haW5Mb2FkKG1haW5Qcm9qZWN0Lmxpc3QpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkcm9wV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgYm94Q29udHJvbGxlci5oYW5kbGVyKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRhc2tbJ2lkJ10sXG4gICAgICAgICAgICAgICAgICAgIGljb246IGRyb3BJY29uLFxuICAgICAgICAgICAgICAgICAgICBlbDogZHJvcFdyYXBwZXIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IHRhc2tbJ2Rlc2NyaXB0aW9uJ10sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0YXNrJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2xvYWQsIHJlc2V0fTsgIFxufSkoKVxuXG5sZXQgZm9ybUxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS13cmFwcGVyJylbMF0udGV4dENvbnRlbnQgPSAwO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0td3JhcHBlcicpWzBdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZSh0eXBlKSB7XG4gICAgICAgIGxldCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgICAgICBsZXQgYnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG5cbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVyJyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1XcmFwcGVyKTtcbiAgICAgICAgZm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcilcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsZWdlbmQpO1xuICAgICAgICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ2NyZWF0ZSc7XG5cbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxldCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXN1Ym1pdCcpO1xuICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSAnVHJhY2sgUHJvamVjdCc7XG4gICAgICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyb3dzJywgJzUnKTtcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCBUaXRsZSc7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnUHJvamVjdCBEZXNjcmlwdGlvbic7XG5cbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBfZGVmYXVsdEF0dHJpYnV0ZShpbnB1dFRpdGxlLCAncHJvamVjdC10aXRsZScsICdSZWFkIGEgYm9vayAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSA0MCknLCAndGV4dCcpO1xuICAgICAgICAgICAgX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXREZXNjcmlwdGlvbiwgJ3Byb2plY3QtZGVzY3JpcHRpb24nLCAnTXVzdCBjb21wbGV0ZSAzIGNoYXB0ZXJzIG9mIEFTSU9BRiBhbmQgYmUgYWJsZSB0byByZWNhbGwgdGhlIHBsb3QgKE1pbiBsZW5ndGggPSAzLCBNYXggbGVuZ3RoID0gMjAwKScsICdub25lJyk7XG4gICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0YXNrJykge1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1Rhc2sgTmFtZSc7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnVGFzayBEZXNjcmlwdGlvbic7ICBcblxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIF9kZWZhdWx0QXR0cmlidXRlKGlucHV0VGl0bGUsICdwcm9qZWN0LXRpdGxlJywgJ1JlYWQgNSBwYWdlcyAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSA0MCknLCAndGV4dCcpO1xuICAgICAgICAgICAgX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXREZXNjcmlwdGlvbiwgJ3Byb2plY3QtZGVzY3JpcHRpb24nLCAnSXRcXCdsbCB0YWtlIDUgYSBmZXcgaG91cnMgdG8gY29tcGxldGUsIG5vIGRpc3RyYWN0aW9uLiAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSAyMDApJywgJ25vbmUnKVxuICAgICAgICAgfVxuXG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bldyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9kZWZhdWx0QXR0cmlidXRlKGlucHV0LCBpZCwgcGxhY2Vob2xkZXIsIHR5cGUpIHtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMycpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpXG4gICAgICAgIGlmICh0eXBlLm5vZGVOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICcyMDAnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICc0MCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICByZXR1cm4ge2dlbmVyYXRlLCByZXNldH1cbn0pKClcblxubGV0IGJveENvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gaGFuZGxlcihib3gpIHtcbiAgICAgICAgaWYgKGJveFsnZWwnXS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlJykpIHtcbiAgICAgICAgICAgIF9jb2xsYXBzZShib3gpO1xuICAgICAgICB9IGVsc2UgaWYgKGJveFsnZWwnXS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZCcpKSB7XG4gICAgICAgICAgICBfZXhwYW5kKGJveCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY29sbGFwc2UoYm94KSB7XG4gICAgICAgIGxldCBib3hEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGV0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JveFsndHlwZSddfS0ke2JveFsnaWQnXX1gKVswXTtcblxuICAgICAgICBib3hEZXNjLmNsYXNzTGlzdC5hZGQoYCR7Ym94Wyd0eXBlJ119LWRlc2NgKTtcbiAgICAgICAgYm94RGVzYy5jbGFzc0xpc3QuYWRkKGAke2JveFsndHlwZSddfS1kZXNjLSR7Ym94WydpZCddfWApXG4gICAgICAgIGJveERlc2MudGV4dENvbnRlbnQgPSBib3hbJ2Rlc2MnXTtcblxuICAgICAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYm94RGVzYyk7XG5cbiAgICAgICAgYm94WydlbCddLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpXG4gICAgICAgIGJveFsnZWwnXS5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZScpXG5cbiAgICAgICAgX2ljb25DaGFuZ2UoYm94WydpY29uJ10sIGNvbGxhcHNlSWNvbilcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gX2V4cGFuZChib3gpIHtcbiAgICAgICAgbGV0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JveFsndHlwZSddfS0ke2JveFsnaWQnXX1gKVswXTtcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JveFsndHlwZSddfS1kZXNjLSR7Ym94WydpZCddfWApWzBdO1xuICAgICAgICBib3hDb250YWluZXIucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcblxuICAgICAgICBib3hbJ2VsJ10uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgICAgICBib3hbJ2VsJ10uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kJylcblxuICAgICAgICBfaWNvbkNoYW5nZShib3hbJ2ljb24nXSwgYXJyb3dEb3duKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pY29uQ2hhbmdlKGljb24sIHR5cGUpIHtcbiAgICAgICAgaWNvbi5zcmMgPSB0eXBlO1xuICAgIH1cbiAgICByZXR1cm4ge2hhbmRsZXJ9XG59KSgpXG5cbmNvbnN0IGNoZWNrQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBjaGVjayh0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICBwcm9qZWN0LnJlbW92ZSh0YXJnZXQsIHBhcmVudCk7XG4gICAgfVxuICAgIHJldHVybiB7Y2hlY2t9O1xufSkoKVxuXG5leHBvcnQge21haW5Mb2FkLCBmb3JtTG9hZGVyLCB0YXNrTG9hZGVyLCBwcm9qZWN0Q29udHJvbGxlcn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9