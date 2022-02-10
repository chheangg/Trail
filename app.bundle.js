/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJhaWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cmFpbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyYWlsLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwYXJlbnRJRCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wYXJlbnRJRCA9IHBhcnNlSW50KHBhcmVudElEKTtcbiAgICB9XG59XG5cbmNvbnN0IHByb2plY3QgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIGZ1bmN0aW9uIGdldExpc3QobGlzdHMpIHtcbiAgICAgICAgbGlzdHMuZm9yRWFjaCgobGlzdGVkKSA9PiB7XG4gICAgICAgICAgICBsaXN0LnB1c2gobGlzdGVkKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgbGV0IHggPSAwO1xuICAgIGxldCB5ID0gMDtcbiAgICBmdW5jdGlvbiBnZXRJZCh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIHggKz0gMVxuICAgICAgICAgICAgcmV0dXJuICt4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIHkgKz0gMVxuICAgICAgICAgICAgcmV0dXJuICt5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChnZXRJZCgncHJvamVjdCcpLCB0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBsaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGFzayh0YXNrLCBwcm9qZWN0SUQpIHtcbiAgICAgICAgdGFzay5pZCA9IGdldElkKCd0YXNrJyk7XG4gICAgICAgIHByb2plY3QubGlzdC5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qLmlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJRCk7XG4gICAgICAgICAgICBpZiAocHJvai5pZCA9PSBwcm9qZWN0SUQpIHtcbiAgICAgICAgICAgICAgICBwcm9qLnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvai50YXNrcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LmZvckVhY2goKGZvbykgPT4ge1xuICAgICAgICAgICAgaWYgKGZvby5pZCA9PT0gdGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnNwbGljZShmb28sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7IGxpc3QsIGNyZWF0ZSwgYWRkVGFzaywgcmVtb3ZlLCBnZXRMaXN0IH07XG59KSgpO1xuXG5jb25zdCB0YXNrID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0aXRsZSwgZGVzY3JpcHRpb24sIHBhcmVudElEKSB7XG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBwYXJlbnRJRCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2spO1xuICAgICAgICByZXR1cm4gbmV3VGFza1xuICAgIH1cblxuICAgIHJldHVybiB7Y3JlYXRlfTtcbn0pKClcblxuZXhwb3J0IHsgdGFzaywgcHJvamVjdCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==