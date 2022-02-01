import './main.css';
import { task, project } from './app.js';
import { mainLoad, formLoader, taskLoader, projectView} from './pageload.js';
import createProjectIcon from './createProjectIcon.png';
import createTaskIcon from './create-button.png';

let button = (function() {
    function create(types) {
        types.forEach((type) => {
            let btn = document.getElementsByClassName(`create-${type}-button`)[0];
            let createButton = new Image();
            
            if (type === 'project') {
                createButton.src = createProjectIcon;
                createButton.classList.add('create-project');
            } else if ( type === 'task') {
                createButton.src = createTaskIcon;
                createButton.classList.add('create-task');
            }
            btn.appendChild(createButton);
            
            document.getElementsByClassName(`create-${type}-button`)[0].addEventListener('click',(button) => {
                formController.create(`${type}`);
            });
        })
    }
    return {create};
})()

let formController = (function() {
    function create(type) {
        if (document.getElementsByClassName('form-wrapper')[0]) {
        }
        formLoader.generate(type);
        _eventAdder(type);
    }
    function _eventAdder(type) {
        let btn = document.getElementsByClassName('project-submit')[0];
        btn.addEventListener('click', () => {
            project.create(...interfaceController.event(type));
            if (type === 'project') {
                mainLoad(project.list);
            } else if (type === 'task') {
                project.addTask(task.create(interfaceController.event(type)), projectView.current)
                taskLoader.load(project.list[projectView.current]);
            }
            formLoader.reset();
        })
    }
    
    return {create}
})();

let interfaceController = (function() {
    function event(type) {
        if (type === 'project') {
            let inputTitle = document.getElementById('project-title');
            let inputDescription = document.getElementById('project-description');
            return [inputTitle.value, inputDescription.value];
        } else if ( type === 'task' ) {
            let inputTitle = document.getElementById('project-title');
            return inputTitle.value;
        }
    }
    return {event}; 
})()

button.create(['project', 'task'])
mainLoad(project.list);