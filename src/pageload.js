import { BoxObject } from './object';

function sizer(description) {
  const descStyle = description.style;
  if (description.style.display === 'none') {
    descStyle.display = 'block';
  } else {
    descStyle.display = 'none';
  }
}

function setStatus(isDone, element, callback) {
  if (callback && element) {
    const status = callback();
    const box = element;
    if (status === false) {
      box.className = 'unfinished';
    } else {
      box.className = 'finished';
    }
  }
  if (isDone === false) {
    return 'unfinished';
  }
  return 'finished';
}

const taskController = (function controller() {
  const container = [...document.getElementsByClassName('task-mainbox')][0];
  function reset() {
    container.textContent = '';
    document.getElementsByClassName('header-right')[0].textContent = '';
  }

  function loadButton() {
    const btn = document.createElement('button');
    btn.className = 'create-task-button';
    btn.textContent = 'Create Task';

    document.getElementsByClassName('header-right')[0].appendChild(btn);
  }
  function create(task) {
    const taskStatus = document.createElement('button');
    const taskBox = document.createElement('div');
    const taskHeader = document.createElement('div');
    const taskSizer = document.createElement('button');
    const taskTitle = document.createElement('div');
    const taskDescription = document.createElement('div');

    taskStatus.className = setStatus(task.isDone);
    taskBox.className = 'task-container';
    taskBox.dataset.id = task.id;
    taskHeader.className = 'task-header';
    taskTitle.className = 'task-title';
    taskSizer.className = 'task-sizer';
    taskDescription.className = 'task-desc';
    taskDescription.style.display = 'none';

    taskSizer.textContent = 'TBA';
    taskTitle.textContent = task.title;
    taskDescription.textContent = task.description;
    [taskStatus, taskTitle, taskSizer].forEach((obj) => taskHeader.appendChild(obj));
    [taskHeader, taskDescription].forEach((obj) => taskBox.appendChild(obj));

    taskStatus.addEventListener('click', (box) => {
      box.stopPropagation();
      // Retains context
      setStatus(taskStatus, taskStatus, () => task.setDone());
    });
    taskSizer.addEventListener('click', () => {
      sizer(taskDescription);
    });
    return taskBox;
  }
  function load(tasks, utility) {
    reset();
    loadButton();
    formController.addFormEvent('task', utility);
    const taskBoxes = tasks.map((task) => create(task, utility.deleteTask));
    taskBoxes.forEach((box) => container.appendChild(box));
  }

  return { load };
}());

const projectController = (function controller() {
  function reset() {
    document.getElementsByClassName('project-sidebar')[0].textContent = '';
  }

  function create(project) {
    const projectStatus = document.createElement('button');
    const projectBox = document.createElement('div');
    const projectHeader = document.createElement('div');
    const projectSizer = document.createElement('button');
    const projectTitle = document.createElement('div');
    const projectDescription = document.createElement('div');

    projectStatus.className = setStatus(project.isDone);
    projectBox.className = 'project-container';
    projectBox.dataset.id = project.id;
    projectHeader.className = 'project-header';
    projectTitle.className = 'project-title';
    projectSizer.className = 'project-sizer';
    projectDescription.className = 'project-desc';
    projectDescription.style.display = 'none';

    projectSizer.textContent = 'TBA';
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    [projectStatus, projectTitle, projectSizer].forEach((obj) => projectHeader.appendChild(obj));
    [projectHeader, projectDescription].forEach((obj) => projectBox.appendChild(obj));

    projectStatus.addEventListener('click', () => {
      // Retains context
      setStatus(projectStatus, projectStatus, () => project.setDone());
    });
    projectSizer.addEventListener('click', () => {
      sizer(projectDescription);
    });
    projectBox.addEventListener('click', () => {
      taskController.load(project.tasks, {
        deleteTask: project.deleteTask.bind(project),
        addTask: project.addTask.bind(project),
      });
    });
    return projectBox;
  }

  function load(projects) {
    reset();
    const projectsContainer = [...document.getElementsByClassName('project-sidebar')][0];
    const projectBoxes = projects.map((project) => create(project));
    projectBoxes.forEach((box) => projectsContainer.appendChild(box));
  }

  return { load };
}());

const formController = (function controller() {
  function reset(formWrapper, formContainer) {
    document.body.removeChild(formWrapper);
    formWrapper.removeChild(formContainer);
  }

  function loadFormContent(type, callback, resetter, container, wrapper) {
    const labelTitle = document.createElement('label');
    const inputTitle = document.createElement('input');
    const labelDesc = document.createElement('label');
    const inputDesc = document.createElement('textarea');
    const submitBtn = document.createElement('button');

    labelTitle.className = 'label-title';
    inputTitle.className = 'input-title';
    labelDesc.className = 'label-desc';
    inputDesc.className = 'input-desc';
    submitBtn.className = 'submit-btn';
    submitBtn.setAttribute('type', 'button');
    inputDesc.setAttribute('rows', 5);

    labelTitle.textContent = 'Title';
    inputTitle.placeholder = 'Give a title';
    labelDesc.textContent = 'Description';
    inputDesc.placeholder = 'Write a brief description';
    submitBtn.textContent = 'submit';

    if (type === 'project') {
      submitBtn.addEventListener('click', () => {
        const newList = callback(BoxObject(type, inputTitle.value, inputDesc.value));
        resetter(newList);
        reset(wrapper, container);
      });
    }

    if (type === 'task') {
      submitBtn.addEventListener('click', () => {
        const newList = callback.addTask(BoxObject(type, inputTitle.value, inputDesc.value));
        resetter(newList, callback);
        reset(wrapper, container);
      });
    }
    [labelTitle, inputTitle, labelDesc, inputDesc, submitBtn].forEach((obj) => {
      container.appendChild(obj);
    });
  }
  // Accepts both Task and Project adder callback function
  function loadForm(type, callback, resetter) {
    const formWrapper = document.createElement('div');
    const formContainer = document.createElement('form');
    const formHeader = document.createElement('h1');

    formWrapper.className = 'form-wrapper';
    formContainer.className = 'form-container';
    formHeader.className = 'form-header';

    formHeader.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Form`;
    formWrapper.appendChild(formContainer);
    formContainer.appendChild(formHeader);
    loadFormContent(type, callback, resetter, formContainer, formWrapper);

    document.body.appendChild(formWrapper);
  }

  function addFormEvent(type, callback) {
    if (type === 'project') {
      const btn = document.getElementsByClassName('create-project-button')[0];
      btn.addEventListener('click', () => {
        loadForm(type, callback, projectController.load);
      });
    }
    if (type === 'task') {
      const btn = document.getElementsByClassName('create-task-button')[0];
      btn.addEventListener('click', () => {
        loadForm(type, callback, taskController.load);
      });
    }
  }
  return { addFormEvent };
}());

export {
  projectController, taskController, formController,
};
