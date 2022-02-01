import createProjectIcon from './createProjectIcon.png';
import {project} from './app.js';

function mainLoad(projects) {
    projects.forEach((project) => {
        loadProjectBox(project);
    })
}

function loadProjectBox(project) {
    let projectBox = document.createElement('div');
    let unchecked = document.createElement('span');
    let projectTitle = document.createElement('span');

    projectBox.setAttribute('data-key',`${project['projectID']}`);
    projectBox.classList.add('project-box')
    unchecked.classList.add('unchecked-circle')
    projectTitle.classList.add('project-title');

    projectTitle.textContent = project['title'];

    document.getElementsByClassName('side-bar')[0].appendChild(projectBox);
    projectBox.appendChild(unchecked);
    projectBox.appendChild(projectTitle);
}

let form = (function() {
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
    function _appendElement(type) {
        let formWrapper = document.createElement('div');
        let formContainer = document.createElement('div');
        let form = document.createElement('form');
        let legend = document.createElement('legend');
        let btnWrapper = document.createElement('span')
        let btn = document.createElement('btn');

        formWrapper.classList.add('form-wrapper');
        formContainer.classList.add('form-container');
        form.classList.add('project-form');
        btn.classList.add('project-submit')

        document.body.appendChild(formWrapper);
        formWrapper.appendChild(formContainer)
        formContainer.appendChild(form);
        form.appendChild(legend);

        btn.textContent = 'create';

        if (type === 'project') {
            let projectTitle = document.createElement('label');
            let projectDescription = document.createElement('label');
            let inputTitle = document.createElement('input');
            let inputDescription = document.createElement('textarea')

            legend.textContent = 'Track Project'
            projectTitle.setAttribute('for', 'project-title');
            projectDescription.setAttribute('for', 'project-description');
            _defaultAttribute(inputTitle, 'project-title', 'Read a book', 'text');
            _defaultAttribute(inputDescription, 'project-description', 'Must complete 3 chapters of ASIOAF and be able to recall the plot', 'none')
            inputDescription.setAttribute('rows', '5');

            form.appendChild(projectTitle);
            form.appendChild(inputTitle);
            form.appendChild(projectDescription);
            form.appendChild(inputDescription);
         }

         btnWrapper.appendChild(btn);
         form.appendChild(btnWrapper);
    }

    function _reset() {
        document.getElementsByClassName('form-wrapper')[0].textContent = 0;
        document.body.removeChild( document.getElementsByClassName('form-wrapper')[0]);
    }

    function project() {
        if (document.getElementsByClassName('form-wrapper')[0]) {
           _reset();
        }
        _appendElement('project');

    }
    
    return {project}
})();

export {mainLoad};