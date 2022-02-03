import arrowDown from './arrowdown.png';
import collapseIcon from './collapse.png';
import {project} from './app.js';

let mainProject = project;

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

        dropIcon.src = arrowDown;
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

            dropIcon.src = arrowDown;

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

        _iconChange(box['icon'], collapseIcon)
    }
    
    function _expand(box) {
        let boxContainer = document.querySelectorAll(`.${box['type']}-${box['id']}`)[0];
        let target = document.querySelectorAll(`.${box['type']}-desc-${box['id']}`)[0];
        boxContainer.removeChild(target);

        box['el'].classList.add('collapse')
        box['el'].classList.remove('expand')

        _iconChange(box['icon'], arrowDown)
    }

    function _iconChange(icon, type) {
        icon.src = type;
    }
    return {handler}
})()

const checkController = (function() {
    function check(target, parent) {
        project.remove(target, parent);
    }
    return {check};
})()

export {mainLoad, formLoader, taskLoader, projectController};