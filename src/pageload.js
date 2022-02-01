import {project} from './app.js';

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

export {mainLoad, formLoader, taskLoader, projectView};