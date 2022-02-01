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
    constructor(title) {
        this.title = title;
    }
}

const project = (function() {
    const list = [];
    
    function create(title, description) {
        let newProject = new Project(list.length, title, description);
        list.push(newProject);
    }

    function addTask(task, projectID) {
        task.id = project.list[projectID]['tasks'].length+1;
        project.list[projectID]['tasks'].push(task);
    }

    return { list, create, addTask };
})();

const task = (function() {
    function create(title) {
        let newTask = new Task(title);
        return newTask
    }

    return {create};
})()



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
/* harmony export */   "projectView": () => (/* binding */ projectView)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");


function mainLoad(projects) {
    document.getElementsByClassName('project-sidebar')[0].textContent= '';
    projects.forEach((project) => {
        loadProjectBox(project);
    })
    if (projects[0]) {
        taskLoader.load(projects[projectView.current]);
    }

}

function loadProjectBox(project) {
    let projectBox = document.createElement('div');
    let unchecked = document.createElement('span');
    let projectTitle = document.createElement('span');

    projectBox.setAttribute('data-key',`${project['id']}`);
    projectBox.classList.add('project-box')
    unchecked.classList.add('unchecked-circle')
    projectTitle.classList.add('project-title');

    projectTitle.textContent = project['title'];

    document.getElementsByClassName('project-sidebar')[0].appendChild(projectBox);
    projectBox.appendChild(unchecked);
    projectBox.appendChild(projectTitle);
    projectBox.addEventListener('click', () => {
        taskLoader.load(project);
        projectView.changeView(project['id']);
    })
}

let projectView = (function() {
    let current = '0';
    function changeView(newView) {
        projectView.current = newView;
    };
    
    return {current, changeView};
})();

let taskLoader = (function() {
    function reset() {
        document.getElementsByClassName('task-mainbox')[0].textContent = '';    
    }
    function load(project) {
        reset();
        project["tasks"].forEach((task) => {
            let taskBox = document.createElement('div');
            let unchecked = document.createElement('span');
            let taskTitle = document.createElement('div');

            taskTitle.textContent = task['title'];
            
            taskTitle.classList.add('task-title');
            unchecked.classList.add('unchecked-circle');
            taskBox.classList.add('task-box');
            taskBox.setAttribute('data-key', `${task['id']}`);

            document.getElementsByClassName('task-mainbox')[0].appendChild(taskBox);
            taskBox.appendChild(unchecked);
            taskBox.appendChild(taskTitle);
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

        form.classList.add('project-form');
        btn.classList.add('project-submit');
        legend.textContent = 'Track Project';
        projectTitle.setAttribute('for', 'project-title');

        form.appendChild(projectTitle);
        form.appendChild(inputTitle);

        if (type === 'project') {
            let projectDescription = document.createElement('label');
            let inputDescription = document.createElement('textarea')

            projectTitle.textContent = 'Project Title';
            projectDescription.textContent = 'Project Description';

            projectDescription.setAttribute('for', 'project-description');
            _defaultAttribute(inputTitle, 'project-title', 'Read a book (Min lenth must be of 3, Max of 40)', 'text');
            _defaultAttribute(inputDescription, 'project-description', 'Must complete 3 chapters of ASIOAF and be able to recall the plot (Min lenth must be of 3, Max of 200   )', 'none')
            inputDescription.setAttribute('rows', '5');

            form.appendChild(projectDescription);
            form.appendChild(inputDescription);
         } else if (type === 'task') {
            projectTitle.textContent = 'Task';

            _defaultAttribute(inputTitle, 'project-title', 'Read 5 pages (Min length must be of 3, Max of 40)', 'text');
         }

         form.appendChild(btnWrapper);
         return btn;
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOzs7Ozs7OztVQ3RDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFdBQVc7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYWlsLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJhaWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyYWlsLy4vc3JjL3BhZ2Vsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBsaXN0ID0gW107XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGxpc3QubGVuZ3RoLCB0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBsaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGFzayh0YXNrLCBwcm9qZWN0SUQpIHtcbiAgICAgICAgdGFzay5pZCA9IHByb2plY3QubGlzdFtwcm9qZWN0SURdWyd0YXNrcyddLmxlbmd0aCsxO1xuICAgICAgICBwcm9qZWN0Lmxpc3RbcHJvamVjdElEXVsndGFza3MnXS5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIHJldHVybiB7IGxpc3QsIGNyZWF0ZSwgYWRkVGFzayB9O1xufSkoKTtcblxuY29uc3QgdGFzayA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGUodGl0bGUpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSk7XG4gICAgICAgIHJldHVybiBuZXdUYXNrXG4gICAgfVxuXG4gICAgcmV0dXJuIHtjcmVhdGV9O1xufSkoKVxuXG5leHBvcnQgeyB0YXNrLCBwcm9qZWN0IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3Byb2plY3R9IGZyb20gJy4vYXBwLmpzJztcblxuZnVuY3Rpb24gbWFpbkxvYWQocHJvamVjdHMpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0LXNpZGViYXInKVswXS50ZXh0Q29udGVudD0gJyc7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBsb2FkUHJvamVjdEJveChwcm9qZWN0KTtcbiAgICB9KVxuICAgIGlmIChwcm9qZWN0c1swXSkge1xuICAgICAgICB0YXNrTG9hZGVyLmxvYWQocHJvamVjdHNbcHJvamVjdFZpZXcuY3VycmVudF0pO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdEJveChwcm9qZWN0KSB7XG4gICAgbGV0IHByb2plY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdW5jaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBwcm9qZWN0Qm94LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLGAke3Byb2plY3RbJ2lkJ119YCk7XG4gICAgcHJvamVjdEJveC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJveCcpXG4gICAgdW5jaGVja2VkLmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZC1jaXJjbGUnKVxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Wyd0aXRsZSddO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC1zaWRlYmFyJylbMF0uYXBwZW5kQ2hpbGQocHJvamVjdEJveCk7XG4gICAgcHJvamVjdEJveC5hcHBlbmRDaGlsZCh1bmNoZWNrZWQpO1xuICAgIHByb2plY3RCb3guYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrTG9hZGVyLmxvYWQocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RWaWV3LmNoYW5nZVZpZXcocHJvamVjdFsnaWQnXSk7XG4gICAgfSlcbn1cblxubGV0IHByb2plY3RWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBjdXJyZW50ID0gJzAnO1xuICAgIGZ1bmN0aW9uIGNoYW5nZVZpZXcobmV3Vmlldykge1xuICAgICAgICBwcm9qZWN0Vmlldy5jdXJyZW50ID0gbmV3VmlldztcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiB7Y3VycmVudCwgY2hhbmdlVmlld307XG59KSgpO1xuXG5sZXQgdGFza0xvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1tYWluYm94JylbMF0udGV4dENvbnRlbnQgPSAnJzsgICAgXG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWQocHJvamVjdCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcm9qZWN0W1widGFza3NcIl0uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgbGV0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCB1bmNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tbJ3RpdGxlJ107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgICAgICB1bmNoZWNrZWQuY2xhc3NMaXN0LmFkZCgndW5jaGVja2VkLWNpcmNsZScpO1xuICAgICAgICAgICAgdGFza0JveC5jbGFzc0xpc3QuYWRkKCd0YXNrLWJveCcpO1xuICAgICAgICAgICAgdGFza0JveC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgYCR7dGFza1snaWQnXX1gKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1tYWluYm94JylbMF0uYXBwZW5kQ2hpbGQodGFza0JveCk7XG4gICAgICAgICAgICB0YXNrQm94LmFwcGVuZENoaWxkKHVuY2hlY2tlZCk7XG4gICAgICAgICAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtsb2FkLCByZXNldH07ICBcbn0pKClcblxubGV0IGZvcm1Mb2FkZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0td3JhcHBlcicpWzBdLnRleHRDb250ZW50ID0gMDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLXdyYXBwZXInKVswXSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGUodHlwZSkge1xuICAgICAgICBsZXQgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGxldCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgICAgICAgbGV0IGJ0bldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J0bicpO1xuXG4gICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0td3JhcHBlcicpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtV3JhcHBlcik7XG4gICAgICAgIGZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGVnZW5kKTtcbiAgICAgICAgYnRuV3JhcHBlci5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdjcmVhdGUnO1xuXG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsZXQgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0nKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc3VibWl0Jyk7XG4gICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9ICdUcmFjayBQcm9qZWN0JztcbiAgICAgICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtdGl0bGUnKTtcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsZXQgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcblxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3QgVGl0bGUnO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1Byb2plY3QgRGVzY3JpcHRpb24nO1xuXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXRUaXRsZSwgJ3Byb2plY3QtdGl0bGUnLCAnUmVhZCBhIGJvb2sgKE1pbiBsZW50aCBtdXN0IGJlIG9mIDMsIE1heCBvZiA0MCknLCAndGV4dCcpO1xuICAgICAgICAgICAgX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXREZXNjcmlwdGlvbiwgJ3Byb2plY3QtZGVzY3JpcHRpb24nLCAnTXVzdCBjb21wbGV0ZSAzIGNoYXB0ZXJzIG9mIEFTSU9BRiBhbmQgYmUgYWJsZSB0byByZWNhbGwgdGhlIHBsb3QgKE1pbiBsZW50aCBtdXN0IGJlIG9mIDMsIE1heCBvZiAyMDAgICApJywgJ25vbmUnKVxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNScpO1xuXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICdUYXNrJztcblxuICAgICAgICAgICAgX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXRUaXRsZSwgJ3Byb2plY3QtdGl0bGUnLCAnUmVhZCA1IHBhZ2VzIChNaW4gbGVuZ3RoIG11c3QgYmUgb2YgMywgTWF4IG9mIDQwKScsICd0ZXh0Jyk7XG4gICAgICAgICB9XG5cbiAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuV3JhcHBlcik7XG4gICAgICAgICByZXR1cm4gYnRuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9kZWZhdWx0QXR0cmlidXRlKGlucHV0LCBpZCwgcGxhY2Vob2xkZXIsIHR5cGUpIHtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMycpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpXG4gICAgICAgIGlmICh0eXBlLm5vZGVOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICcyMDAnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICc0MCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICByZXR1cm4ge2dlbmVyYXRlLCByZXNldH1cbn0pKClcblxuZXhwb3J0IHttYWluTG9hZCwgZm9ybUxvYWRlciwgdGFza0xvYWRlciwgcHJvamVjdFZpZXd9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==