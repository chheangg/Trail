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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJhaWwvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyYWlsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJhaWwvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdHJhaWwvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxufVxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHBhcmVudElEKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnBhcmVudElEID0gcGFyc2VJbnQocGFyZW50SUQpO1xuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBsaXN0ID0gW107XG4gICAgZnVuY3Rpb24gZ2V0TGlzdChsaXN0cykge1xuICAgICAgICBsaXN0cy5mb3JFYWNoKChsaXN0ZWQpID0+IHtcbiAgICAgICAgICAgIGxpc3QucHVzaChsaXN0ZWQpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBsZXQgeCA9IDA7XG4gICAgbGV0IHkgPSAwO1xuICAgIGZ1bmN0aW9uIGdldElkKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgeCArPSAxXG4gICAgICAgICAgICByZXR1cm4gK3g7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICd0YXNrJykge1xuICAgICAgICAgICAgeSArPSAxXG4gICAgICAgICAgICByZXR1cm4gK3k7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGdldElkKCdwcm9qZWN0JyksIHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIGxpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUYXNrKHRhc2ssIHByb2plY3RJRCkge1xuICAgICAgICB0YXNrLmlkID0gZ2V0SWQoJ3Rhc2snKTtcbiAgICAgICAgcHJvamVjdC5saXN0LmZvckVhY2goKHByb2opID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2ouaWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdElEKTtcbiAgICAgICAgICAgIGlmIChwcm9qLmlkID09IHByb2plY3RJRCkge1xuICAgICAgICAgICAgICAgIHByb2oudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qLnRhc2tzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZSh0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuZm9yRWFjaCgoZm9vKSA9PiB7XG4gICAgICAgICAgICBpZiAoZm9vLmlkID09PSB0YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3BsaWNlKGZvbywgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbGlzdCwgY3JlYXRlLCBhZGRUYXNrLCByZW1vdmUsIGdldExpc3QgfTtcbn0pKCk7XG5cbmNvbnN0IHRhc2sgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlKHRpdGxlLCBkZXNjcmlwdGlvbiwgcGFyZW50SUQpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIHBhcmVudElEKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFzayk7XG4gICAgICAgIHJldHVybiBuZXdUYXNrXG4gICAgfVxuXG4gICAgcmV0dXJuIHtjcmVhdGV9O1xufSkoKVxuXG5leHBvcnQgeyB0YXNrLCBwcm9qZWN0IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGFycm93RG93biBmcm9tICcuL2Fycm93ZG93bi5wbmcnO1xuaW1wb3J0IGNvbGxhcHNlSWNvbiBmcm9tICcuL2NvbGxhcHNlLnBuZyc7XG5pbXBvcnQge3Byb2plY3R9IGZyb20gJy4vYXBwLmpzJztcblxubGV0IG1haW5Qcm9qZWN0ID0gcHJvamVjdDtcblxuLy9HZW5lcmF0ZSBwcm9qZWN0J3MgZWxlbWVudCBhbmQga2VlcCB0cmFjayBvZiBjdXJyZW50IHByb2plY3QncyB2aWV3XG5sZXQgcHJvamVjdENvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGN1cnJlbnRWaWV3ID0gJzEnO1xuICAgIGZ1bmN0aW9uIGNoYW5nZVZpZXcobmV3Vmlldykge1xuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5jdXJyZW50VmlldyA9IG5ld1ZpZXc7XG4gICAgfTsgXG4gICAgZnVuY3Rpb24gcHJvamVjdENoZWNrKGN1cnJlbnRWaWV3KSB7XG4gICAgICAgIHByb2plY3QubGlzdC5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvai5pZCA9PSBjdXJyZW50Vmlldykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkKHByb2plY3QpIHtcbiAgICAgICAgbGV0IHByb2plY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBsZXQgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdW5jaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBsZXQgZHJvcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxldCBkcm9wSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIFxuICAgICAgICBwcm9qZWN0Qm94LmNsYXNzTGlzdC5hZGQoYHByb2plY3QtJHtwcm9qZWN0WydpZCddfWApO1xuICAgICAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGVyJyk7XG4gICAgICAgIHByb2plY3RCb3guY2xhc3NMaXN0LmFkZCgncHJvamVjdC1ib3gnKTtcbiAgICAgICAgdW5jaGVja2VkLmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZC1jaXJjbGUnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgcHJvamVjdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250ZW50Jyk7XG4gICAgICAgIGRyb3BXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJyk7XG4gICAgICAgIGRyb3BJY29uLmNsYXNzTGlzdC5hZGQoJ2Ryb3AtaWNvbicpO1xuXG4gICAgICAgIGRyb3BJY29uLnNyYyA9IGFycm93RG93bjtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFsndGl0bGUnXTtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC1zaWRlYmFyJylbMF0uYXBwZW5kQ2hpbGQocHJvamVjdEJveCk7XG5cbiAgICAgICAgZHJvcFdyYXBwZXIuYXBwZW5kQ2hpbGQoZHJvcEljb24pO1xuICAgICAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZCh1bmNoZWNrZWQpO1xuICAgICAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KVxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGRyb3BXcmFwcGVyKTtcbiAgICAgICAgcHJvamVjdEJveC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICAgICAgdW5jaGVja2VkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNoZWNrQ29udHJvbGxlci5jaGVjayhwcm9qZWN0LCBtYWluUHJvamVjdC5saXN0KVxuICAgICAgICAgICAgbWFpbkxvYWQobWFpblByb2plY3QubGlzdCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGFza0xvYWRlci5sb2FkKHByb2plY3QpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuY2hhbmdlVmlldyhwcm9qZWN0LmlkKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcblxuICAgICAgICBkcm9wV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBib3hDb250cm9sbGVyLmhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIGlkOiBwcm9qZWN0WydpZCddLFxuICAgICAgICAgICAgICAgIGljb246IGRyb3BJY29uLFxuICAgICAgICAgICAgICAgIGVsOiBkcm9wV3JhcHBlcixcbiAgICAgICAgICAgICAgICBkZXNjOiBwcm9qZWN0WydkZXNjcmlwdGlvbiddLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwcm9qZWN0JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIHtsb2FkLCBjdXJyZW50VmlldywgY2hhbmdlVmlldywgcHJvamVjdENoZWNrfTtcbn0pKClcblxubGV0IHRhc2tMb2FkZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stbWFpbmJveCcpWzBdLnRleHRDb250ZW50ID0gJyc7ICAgIFxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkKHByb2plY3QpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJvamVjdFtcInRhc2tzXCJdLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGxldCB0YXNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgdGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbGV0IHVuY2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGxldCBkcm9wV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGxldCBkcm9wSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrWyd0aXRsZSddO1xuICAgICAgICAgICAgdGFza0hlYWRlci5jbGFzc0xpc3QuYWRkKCd0YXNrLWhlYWRlcicpO1xuICAgICAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgICAgIHVuY2hlY2tlZC5jbGFzc0xpc3QuYWRkKCd1bmNoZWNrZWQtY2lyY2xlJyk7XG4gICAgICAgICAgICB0YXNrQm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYm94Jyk7XG4gICAgICAgICAgICB0YXNrQm94LmNsYXNzTGlzdC5hZGQoYHRhc2stJHt0YXNrWydpZCddfWApO1xuICAgICAgICAgICAgdGFza0JveC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgYCR7dGFza1snaWQnXX1gKTtcbiAgICAgICAgICAgIGRyb3BXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJyk7XG4gICAgICAgICAgICBkcm9wSWNvbi5jbGFzc0xpc3QuYWRkKCdkcm9wLWljb24nKTtcblxuICAgICAgICAgICAgZHJvcEljb24uc3JjID0gYXJyb3dEb3duO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1tYWluYm94JylbMF0uYXBwZW5kQ2hpbGQodGFza0JveCk7XG5cbiAgICAgICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0hlYWRlcilcbiAgICAgICAgICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodW5jaGVja2VkKTtcbiAgICAgICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgICAgICAgICBkcm9wV3JhcHBlci5hcHBlbmRDaGlsZChkcm9wSWNvbik7XG4gICAgICAgICAgICB0YXNrSGVhZGVyLmFwcGVuZENoaWxkKGRyb3BXcmFwcGVyKTtcbiAgICAgICAgICAgIHVuY2hlY2tlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hlY2tDb250cm9sbGVyLmNoZWNrKHRhc2ssIHByb2plY3QudGFza3MpXG4gICAgICAgICAgICAgICAgbWFpbkxvYWQobWFpblByb2plY3QubGlzdCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRyb3BXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBib3hDb250cm9sbGVyLmhhbmRsZXIoe1xuICAgICAgICAgICAgICAgICAgICBpZDogdGFza1snaWQnXSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogZHJvcEljb24sXG4gICAgICAgICAgICAgICAgICAgIGVsOiBkcm9wV3JhcHBlcixcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogdGFza1snZGVzY3JpcHRpb24nXSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SUQ6IHByb2plY3QuaWQsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0YXNrJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2xvYWQsIHJlc2V0fTsgIFxufSkoKVxuXG5sZXQgZm9ybUxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS13cmFwcGVyJylbMF0udGV4dENvbnRlbnQgPSAwO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0td3JhcHBlcicpWzBdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZSh0eXBlKSB7XG4gICAgICAgIGxldCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgICAgICBsZXQgYnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG5cbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVyJyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1XcmFwcGVyKTtcbiAgICAgICAgZm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcilcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsZWdlbmQpO1xuICAgICAgICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ2NyZWF0ZSc7XG5cbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxldCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXN1Ym1pdCcpO1xuICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSAnVHJhY2sgUHJvamVjdCc7XG4gICAgICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyb3dzJywgJzUnKTtcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCBUaXRsZSc7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnUHJvamVjdCBEZXNjcmlwdGlvbic7XG5cbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBfZGVmYXVsdEF0dHJpYnV0ZShpbnB1dFRpdGxlLCAncHJvamVjdC10aXRsZScsICdSZWFkIGEgYm9vayAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSA0MCknLCAndGV4dCcpO1xuICAgICAgICAgICAgX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXREZXNjcmlwdGlvbiwgJ3Byb2plY3QtZGVzY3JpcHRpb24nLCAnTXVzdCBjb21wbGV0ZSAzIGNoYXB0ZXJzIG9mIEFTSU9BRiBhbmQgYmUgYWJsZSB0byByZWNhbGwgdGhlIHBsb3QgKE1pbiBsZW5ndGggPSAzLCBNYXggbGVuZ3RoID0gMjAwKScsICdub25lJyk7XG4gICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0YXNrJykge1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1Rhc2sgTmFtZSc7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnVGFzayBEZXNjcmlwdGlvbic7ICBcblxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIF9kZWZhdWx0QXR0cmlidXRlKGlucHV0VGl0bGUsICdwcm9qZWN0LXRpdGxlJywgJ1JlYWQgNSBwYWdlcyAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSA0MCknLCAndGV4dCcpO1xuICAgICAgICAgICAgX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXREZXNjcmlwdGlvbiwgJ3Byb2plY3QtZGVzY3JpcHRpb24nLCAnSXRcXCdsbCB0YWtlIDUgYSBmZXcgaG91cnMgdG8gY29tcGxldGUsIG5vIGRpc3RyYWN0aW9uLiAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSAyMDApJywgJ25vbmUnKVxuICAgICAgICAgfVxuXG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bldyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9kZWZhdWx0QXR0cmlidXRlKGlucHV0LCBpZCwgcGxhY2Vob2xkZXIsIHR5cGUpIHtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMycpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpXG4gICAgICAgIGlmICh0eXBlLm5vZGVOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICcyMDAnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICc0MCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICByZXR1cm4ge2dlbmVyYXRlLCByZXNldH1cbn0pKClcblxubGV0IGJveENvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gaGFuZGxlcihib3gpIHtcbiAgICAgICAgaWYgKGJveFsnZWwnXS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlJykpIHtcbiAgICAgICAgICAgIF9jb2xsYXBzZShib3gpO1xuICAgICAgICB9IGVsc2UgaWYgKGJveFsnZWwnXS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZCcpKSB7XG4gICAgICAgICAgICBfZXhwYW5kKGJveCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZWRpdChib3gsIGRlc2MpIHtcbiAgICAgICAgbGV0IGJveElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgYm94SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgYm94SW5wdXQudmFsdWUgPSBkZXNjLnRleHRDb250ZW50O1xuICAgICAgICBib3hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBib3hJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYm94LnR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBtYWluUHJvamVjdC5saXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBib3guaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRlc2NyaXB0aW9uID0gYm94SW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChib3gudHlwZSA9PT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5Qcm9qZWN0Lmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGJveC5wYXJlbnRJRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5pZCA9PT0gYm94LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gYm94SW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBkZXNjLmFwcGVuZENoaWxkKGJveElucHV0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2NvbGxhcHNlKGJveCkge1xuICAgICAgICBsZXQgYm94RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JveFsndHlwZSddfS0ke2JveFsnaWQnXX1gKVswXTtcblxuICAgICAgICBib3hEZXNjLmNsYXNzTGlzdC5hZGQoYCR7Ym94Wyd0eXBlJ119LWRlc2NgKTtcbiAgICAgICAgYm94RGVzYy5jbGFzc0xpc3QuYWRkKGAke2JveFsndHlwZSddfS1kZXNjLSR7Ym94WydpZCddfWApXG4gICAgICAgIGJveERlc2MudGV4dENvbnRlbnQgPSBib3hbJ2Rlc2MnXTtcblxuICAgICAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYm94RGVzYyk7XG5cbiAgICAgICAgYm94WydlbCddLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpXG4gICAgICAgIGJveFsnZWwnXS5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZScpXG5cbiAgICAgICAgYm94RGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGRlc2MpID0+IHtcbiAgICAgICAgICAgIGVkaXQoYm94LCBkZXNjLnRhcmdldCk7XG4gICAgICAgIH0pXG4gICAgICAgIF9pY29uQ2hhbmdlKGJveFsnaWNvbiddLCBjb2xsYXBzZUljb24pXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIF9leHBhbmQoYm94KSB7XG4gICAgICAgIGxldCBib3hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtib3hbJ3R5cGUnXX0tJHtib3hbJ2lkJ119YClbMF07XG4gICAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtib3hbJ3R5cGUnXX0tZGVzYy0ke2JveFsnaWQnXX1gKVswXTtcbiAgICAgICAgYm94Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRhcmdldCk7XG5cbiAgICAgICAgYm94WydlbCddLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICAgICAgYm94WydlbCddLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZCcpXG5cbiAgICAgICAgX2ljb25DaGFuZ2UoYm94WydpY29uJ10sIGFycm93RG93bilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaWNvbkNoYW5nZShpY29uLCB0eXBlKSB7XG4gICAgICAgIGljb24uc3JjID0gdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIHtoYW5kbGVyfVxufSkoKVxuXG5jb25zdCBjaGVja0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gY2hlY2sodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgcHJvamVjdC5yZW1vdmUodGFyZ2V0LCBwYXJlbnQpO1xuICAgIH1cbiAgICByZXR1cm4ge2NoZWNrfTtcbn0pKClcblxuLy9Mb2FkIHRoZSBwcm9qZWN0IGFuZCBwcm9qZWN0J3MgdGFza1xuZnVuY3Rpb24gbWFpbkxvYWQocHJvamVjdHMpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0LXNpZGViYXInKVswXS50ZXh0Q29udGVudD0gJyc7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5sb2FkKHByb2plY3QpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0Lmxpc3QpXG4gICAgaWYgKHByb2plY3RDb250cm9sbGVyLnByb2plY3RDaGVjaygpKSB7XG4gICAgICAgIHRhc2tMb2FkZXIubG9hZChwcm9qZWN0Q2hlY2soKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza0xvYWRlci5yZXNldCgpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3QubGlzdCkpO1xufVxuXG5leHBvcnQge21haW5Mb2FkLCBmb3JtTG9hZGVyLCB0YXNrTG9hZGVyLCBwcm9qZWN0Q29udHJvbGxlcn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9