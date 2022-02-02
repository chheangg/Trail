import './main.css';
import { task, project } from './app.js';
import { mainLoad, formLoader, taskLoader, projectController} from './pageload.js';
import createProjectIcon from './createProjectIcon.png';
import createTaskIcon from './create-button.png';

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
            createButton.src = createProjectIcon;
            createButton.classList.add('create-project');
        } else if ( type === 'task') {
            createButton.src = createTaskIcon;
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
            formLoader.generate(type);
            _eventAdder(type);
        }
    }
    function _eventAdder(type) {
        let btn = document.getElementsByClassName('project-submit')[0];
        btn.addEventListener('click', () => {
            if (type === 'project') {
                project.create(...interfaceController.event(type));
                mainLoad(project.list);
            } else if (type === 'task') {
                project.addTask(task.create(...interfaceController.event(type)), projectController.currentView)
                taskLoader.load(project.list[projectController.currentView]);
            }
            formLoader.reset();
        })
    }
    function _disabledCheck(type) {
        if ((project.list).length === 0 && type === 'task') {
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
mainLoad(project.list);