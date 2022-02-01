import './main.css';
import { task, project } from './app.js';
import { mainLoad } from './pageload.js';
import createProjectIcon from './createProjectIcon.png';

let button = (function() {
    function createProject() {
        let createProjectButton = document.getElementsByClassName('create-project-button')[0];
        let createButton = new Image();
        createButton.src = createProjectIcon;

        createButton.classList.add('create-project');
        createProjectButton.appendChild(createButton);
        
        document.getElementsByClassName('create-project-button')[0].addEventListener('click',(button) => {
            form.project();
        });
    }
    return {createProject};
})()

button.createProject();
mainLoad(project.list);