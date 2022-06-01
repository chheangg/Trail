import { projectController, formController } from './pageload';

function mainLoad(projectList) {
  projectController.load(projectList.projects);
  formController.addFormEvent('project', projectList.addProject.bind(projectList));
}

export default mainLoad;
