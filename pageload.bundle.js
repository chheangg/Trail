/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



//Load the project and project's task
function mainLoad(projects) {
    document.getElementsByClassName('project-sidebar')[0].textContent= '';
    projects.forEach((project) => {
        projectController.load(project)
    })
    if (projects[0]) {
        taskLoader.load(projects[projectController.currentView]);
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
        projectBox.addEventListener('click', () => {
            taskLoader.load(project);
            projectController.changeView(project['id']);
        })

        dropWrapper.addEventListener('click', () => {
            boxController.handler({
                id: project['id'],
                icon: dropIcon,
                el: dropWrapper,
                desc: project['description'],
                type: 'project',
            })
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

            dropWrapper.addEventListener('click', () => {
                boxController.handler({
                    id: task['id'],
                    icon: dropIcon,
                    el: dropWrapper,
                    desc: task['description'],
                    type: 'task',
                })
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




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsWUFBWTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJhaWwvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyYWlsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJhaWwvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdHJhaWwvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGFycm93RG93biBmcm9tICcuL2Fycm93ZG93bi5wbmcnO1xuaW1wb3J0IGNvbGxhcHNlSWNvbiBmcm9tICcuL2NvbGxhcHNlLnBuZyc7XG5cbi8vTG9hZCB0aGUgcHJvamVjdCBhbmQgcHJvamVjdCdzIHRhc2tcbmZ1bmN0aW9uIG1haW5Mb2FkKHByb2plY3RzKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC1zaWRlYmFyJylbMF0udGV4dENvbnRlbnQ9ICcnO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIubG9hZChwcm9qZWN0KVxuICAgIH0pXG4gICAgaWYgKHByb2plY3RzWzBdKSB7XG4gICAgICAgIHRhc2tMb2FkZXIubG9hZChwcm9qZWN0c1twcm9qZWN0Q29udHJvbGxlci5jdXJyZW50Vmlld10pO1xuICAgIH1cblxufVxuXG4vL0dlbmVyYXRlIHByb2plY3QncyBlbGVtZW50IGFuZCBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgcHJvamVjdCdzIHZpZXdcbmxldCBwcm9qZWN0Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgY3VycmVudFZpZXcgPSAnMCc7XG4gICAgZnVuY3Rpb24gY2hhbmdlVmlldyhuZXdWaWV3KSB7XG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmN1cnJlbnQgPSBuZXdWaWV3O1xuICAgIH07IFxuICAgIGZ1bmN0aW9uIGxvYWQocHJvamVjdCkge1xuICAgICAgICBsZXQgcHJvamVjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB1bmNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxldCBkcm9wV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGV0IGRyb3BJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgXG4gICAgICAgIHByb2plY3RCb3guY2xhc3NMaXN0LmFkZChgcHJvamVjdC0ke3Byb2plY3RbJ2lkJ119YCk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkZXInKTtcbiAgICAgICAgcHJvamVjdEJveC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJveCcpO1xuICAgICAgICB1bmNoZWNrZWQuY2xhc3NMaXN0LmFkZCgndW5jaGVja2VkLWNpcmNsZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qZWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRlbnQnKTtcbiAgICAgICAgZHJvcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICAgICAgZHJvcEljb24uY2xhc3NMaXN0LmFkZCgnZHJvcC1pY29uJyk7XG5cbiAgICAgICAgZHJvcEljb24uc3JjID0gYXJyb3dEb3duO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Wyd0aXRsZSddO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0LXNpZGViYXInKVswXS5hcHBlbmRDaGlsZChwcm9qZWN0Qm94KTtcblxuICAgICAgICBkcm9wV3JhcHBlci5hcHBlbmRDaGlsZChkcm9wSWNvbik7XG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHVuY2hlY2tlZCk7XG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQpXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZHJvcFdyYXBwZXIpO1xuICAgICAgICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICAgICAgICBwcm9qZWN0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFza0xvYWRlci5sb2FkKHByb2plY3QpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuY2hhbmdlVmlldyhwcm9qZWN0WydpZCddKTtcbiAgICAgICAgfSlcblxuICAgICAgICBkcm9wV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGJveENvbnRyb2xsZXIuaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgaWQ6IHByb2plY3RbJ2lkJ10sXG4gICAgICAgICAgICAgICAgaWNvbjogZHJvcEljb24sXG4gICAgICAgICAgICAgICAgZWw6IGRyb3BXcmFwcGVyLFxuICAgICAgICAgICAgICAgIGRlc2M6IHByb2plY3RbJ2Rlc2NyaXB0aW9uJ10sXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Byb2plY3QnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4ge2xvYWQsIGN1cnJlbnRWaWV3LCBjaGFuZ2VWaWV3fTtcbn0pKClcblxubGV0IHRhc2tMb2FkZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stbWFpbmJveCcpWzBdLnRleHRDb250ZW50ID0gJyc7ICAgIFxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkKHByb2plY3QpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJvamVjdFtcInRhc2tzXCJdLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICAgICAgbGV0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBsZXQgdW5jaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbGV0IGRyb3BXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbGV0IGRyb3BJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tbJ3RpdGxlJ107XG4gICAgICAgICAgICB0YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICAgICAgdW5jaGVja2VkLmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZC1jaXJjbGUnKTtcbiAgICAgICAgICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZCgndGFzay1ib3gnKTtcbiAgICAgICAgICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZChgdGFzay0ke3Rhc2tbJ2lkJ119YCk7XG4gICAgICAgICAgICB0YXNrQm94LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBgJHt0YXNrWydpZCddfWApO1xuICAgICAgICAgICAgZHJvcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICAgICAgICAgIGRyb3BJY29uLmNsYXNzTGlzdC5hZGQoJ2Ryb3AtaWNvbicpO1xuXG4gICAgICAgICAgICBkcm9wSWNvbi5zcmMgPSBhcnJvd0Rvd247XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stbWFpbmJveCcpWzBdLmFwcGVuZENoaWxkKHRhc2tCb3gpO1xuXG4gICAgICAgICAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpXG4gICAgICAgICAgICB0YXNrSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbiAgICAgICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHVuY2hlY2tlZCk7XG4gICAgICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICAgICAgZHJvcFdyYXBwZXIuYXBwZW5kQ2hpbGQoZHJvcEljb24pO1xuICAgICAgICAgICAgdGFza0hlYWRlci5hcHBlbmRDaGlsZChkcm9wV3JhcHBlcik7XG5cbiAgICAgICAgICAgIGRyb3BXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJveENvbnRyb2xsZXIuaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0YXNrWydpZCddLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBkcm9wSWNvbixcbiAgICAgICAgICAgICAgICAgICAgZWw6IGRyb3BXcmFwcGVyLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiB0YXNrWydkZXNjcmlwdGlvbiddLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGFzaycsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2xvYWQsIHJlc2V0fTsgIFxufSkoKVxuXG5sZXQgZm9ybUxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS13cmFwcGVyJylbMF0udGV4dENvbnRlbnQgPSAwO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0td3JhcHBlcicpWzBdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZSh0eXBlKSB7XG4gICAgICAgIGxldCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgICAgICBsZXQgYnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG5cbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVyJyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1XcmFwcGVyKTtcbiAgICAgICAgZm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcilcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsZWdlbmQpO1xuICAgICAgICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ2NyZWF0ZSc7XG5cbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxldCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXN1Ym1pdCcpO1xuICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSAnVHJhY2sgUHJvamVjdCc7XG4gICAgICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyb3dzJywgJzUnKTtcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCBUaXRsZSc7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnUHJvamVjdCBEZXNjcmlwdGlvbic7XG5cbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBfZGVmYXVsdEF0dHJpYnV0ZShpbnB1dFRpdGxlLCAncHJvamVjdC10aXRsZScsICdSZWFkIGEgYm9vayAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSA0MCknLCAndGV4dCcpO1xuICAgICAgICAgICAgX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXREZXNjcmlwdGlvbiwgJ3Byb2plY3QtZGVzY3JpcHRpb24nLCAnTXVzdCBjb21wbGV0ZSAzIGNoYXB0ZXJzIG9mIEFTSU9BRiBhbmQgYmUgYWJsZSB0byByZWNhbGwgdGhlIHBsb3QgKE1pbiBsZW5ndGggPSAzLCBNYXggbGVuZ3RoID0gMjAwKScsICdub25lJyk7XG4gICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0YXNrJykge1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1Rhc2sgTmFtZSc7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnVGFzayBEZXNjcmlwdGlvbic7ICBcblxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIF9kZWZhdWx0QXR0cmlidXRlKGlucHV0VGl0bGUsICdwcm9qZWN0LXRpdGxlJywgJ1JlYWQgNSBwYWdlcyAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSA0MCknLCAndGV4dCcpO1xuICAgICAgICAgICAgX2RlZmF1bHRBdHRyaWJ1dGUoaW5wdXREZXNjcmlwdGlvbiwgJ3Byb2plY3QtZGVzY3JpcHRpb24nLCAnSXRcXCdsbCB0YWtlIDUgYSBmZXcgaG91cnMgdG8gY29tcGxldGUsIG5vIGRpc3RyYWN0aW9uLiAoTWluIGxlbmd0aCA9IDMsIE1heCBsZW5ndGggPSAyMDApJywgJ25vbmUnKVxuICAgICAgICAgfVxuXG4gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bldyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9kZWZhdWx0QXR0cmlidXRlKGlucHV0LCBpZCwgcGxhY2Vob2xkZXIsIHR5cGUpIHtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMycpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpXG4gICAgICAgIGlmICh0eXBlLm5vZGVOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICcyMDAnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICc0MCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICByZXR1cm4ge2dlbmVyYXRlLCByZXNldH1cbn0pKClcblxubGV0IGJveENvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gaGFuZGxlcihib3gpIHtcbiAgICAgICAgaWYgKGJveFsnZWwnXS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlJykpIHtcbiAgICAgICAgICAgIF9jb2xsYXBzZShib3gpO1xuICAgICAgICB9IGVsc2UgaWYgKGJveFsnZWwnXS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZCcpKSB7XG4gICAgICAgICAgICBfZXhwYW5kKGJveCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY29sbGFwc2UoYm94KSB7XG4gICAgICAgIGxldCBib3hEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGV0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JveFsndHlwZSddfS0ke2JveFsnaWQnXX1gKVswXTtcblxuICAgICAgICBib3hEZXNjLmNsYXNzTGlzdC5hZGQoYCR7Ym94Wyd0eXBlJ119LWRlc2NgKTtcbiAgICAgICAgYm94RGVzYy5jbGFzc0xpc3QuYWRkKGAke2JveFsndHlwZSddfS1kZXNjLSR7Ym94WydpZCddfWApXG4gICAgICAgIGJveERlc2MudGV4dENvbnRlbnQgPSBib3hbJ2Rlc2MnXTtcblxuICAgICAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYm94RGVzYyk7XG5cbiAgICAgICAgYm94WydlbCddLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpXG4gICAgICAgIGJveFsnZWwnXS5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZScpXG5cbiAgICAgICAgX2ljb25DaGFuZ2UoYm94WydpY29uJ10sIGNvbGxhcHNlSWNvbilcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gX2V4cGFuZChib3gpIHtcbiAgICAgICAgbGV0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JveFsndHlwZSddfS0ke2JveFsnaWQnXX1gKVswXTtcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JveFsndHlwZSddfS1kZXNjLSR7Ym94WydpZCddfWApWzBdO1xuICAgICAgICBib3hDb250YWluZXIucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcblxuICAgICAgICBib3hbJ2VsJ10uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgICAgICBib3hbJ2VsJ10uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kJylcblxuICAgICAgICBfaWNvbkNoYW5nZShib3hbJ2ljb24nXSwgYXJyb3dEb3duKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pY29uQ2hhbmdlKGljb24sIHR5cGUpIHtcbiAgICAgICAgaWNvbi5zcmMgPSB0eXBlO1xuICAgIH1cbiAgICByZXR1cm4ge2hhbmRsZXJ9XG59KSgpXG5cblxuXG5leHBvcnQge21haW5Mb2FkLCBmb3JtTG9hZGVyLCB0YXNrTG9hZGVyLCBwcm9qZWN0Q29udHJvbGxlcn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9