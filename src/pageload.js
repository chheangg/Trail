import { BoxObject } from './object';
import editIcon from './assets/pencil.svg';
import tickIcon from './assets/check.svg';

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

const editController = (function controller() {
  function loadForm(container, title, description, object) {
    const inputTitle = document.createElement('input');
    const inputDescription = document.createElement('textarea');
    const submitEdit = document.createElement('button');
    const submitConfirmIcon = document.createElement('img');

    inputTitle.className = 'edit-title';
    inputDescription.className = 'edit-desc';
    submitEdit.className = 'edit-confirm';

    inputTitle.value = object.title;
    inputDescription.value = object.description;
    submitConfirmIcon.src = tickIcon;
    submitEdit.appendChild(submitConfirmIcon);

    inputDescription.setAttribute('rows', '3');
    if (object.type === 'project') {
      inputDescription.setAttribute('cols', '42');
    } else if (object.type === 'task') {
      inputDescription.setAttribute('cols', '115');
    }

    title.appendChild(inputTitle);
    title.appendChild(submitEdit);
    description.appendChild(inputDescription);

    submitEdit.addEventListener('click', () => {
      const obj = object;
      obj.title = inputTitle.value;
      obj.description = inputDescription.value;

      if (object.type === 'project') {
        projectController.reload();
      }
      if (object.type === 'task') {
        taskController.reload();
      }
    });
  }
  function loadEdit(container, object, handler) {
    const btn = document.createElement('button');
    const img = document.createElement('img');

    img.src = editIcon;
    btn.className = 'edit-btn';

    btn.addEventListener('click', () => {
      const title = container.getElementsByClassName(`${object.type}-title-container`)[0];
      const description = container.getElementsByClassName(`${object.type}-desc`)[0];

      title.removeEventListener('mouseenter', handler[0]);
      title.removeEventListener('mouseleave', handler[1]);

      title.textContent = '';
      description.textContent = '';

      loadForm(container, title, description, object);
    });

    btn.appendChild(img);
    return btn;
  }
  function onHover(titleContainer, container, object, handler) {
    titleContainer.appendChild(loadEdit(container, object, handler));
  }

  function onLeave(container) {
    container.removeChild(document.getElementsByClassName('edit-btn')[0]);
  }
  return {
    onHover,
    onLeave,
  };
}());

const taskController = (function controller() {
  let currentView;
  let currentUtility;
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
    const taskTitleCont = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskDescription = document.createElement('div');

    taskStatus.className = setStatus(task.isDone);
    taskBox.className = 'task-container';
    taskBox.dataset.id = task.id;
    taskHeader.className = 'task-header';
    taskTitleCont.className = 'task-title-container';
    taskTitle.className = 'task-title';
    taskSizer.className = 'task-sizer';
    taskDescription.className = 'task-desc';
    taskDescription.style.display = 'none';

    taskSizer.textContent = 'TBA';
    taskTitle.textContent = task.title;
    taskDescription.textContent = task.description;
    taskTitleCont.appendChild(taskTitle);
    [taskStatus, taskTitleCont, taskSizer].forEach((obj) => taskHeader.appendChild(obj));
    [taskHeader, taskDescription].forEach((obj) => taskBox.appendChild(obj));

    taskStatus.addEventListener('click', (box) => {
      box.stopPropagation();
      // Retains context
      setStatus(taskStatus, taskStatus, () => task.setDone());
    });
    taskSizer.addEventListener('click', () => {
      sizer(taskDescription);
    });

    taskTitleCont.addEventListener('mouseenter', function Handler() {
      function onLeaveHandler() {
        editController.onLeave(taskTitleCont);
      }
      taskTitleCont.addEventListener('mouseleave', onLeaveHandler);
      editController.onHover(taskTitleCont, taskBox, task, [Handler, onLeaveHandler]);
    });

    return taskBox;
  }
  function load(tasks, utility) {
    currentView = tasks;
    currentUtility = utility;
    // Reset everything in the task area
    reset();
    // Load button with new events
    loadButton();
    // Give button with necessary events
    formController.addFormEvent('task', utility);
    // Load tasks
    const taskBoxes = tasks.map((task) => create(task, utility.deleteTask));
    taskBoxes.forEach((box) => container.appendChild(box));
  }

  function reload(tasks) {
    console.log(currentUtility);
    if (tasks) {
      load(tasks, currentUtility);
    } else {
      load(currentView, currentUtility);
    }
  }

  return { load, reload };
}());

const projectController = (function controller() {
  let projectList;
  function reset() {
    document.getElementsByClassName('project-sidebar')[0].textContent = '';
  }

  function create(project) {
    const projectStatus = document.createElement('button');
    const projectBox = document.createElement('div');
    const projectHeader = document.createElement('div');
    const projectSizer = document.createElement('button');
    const projectTitleCont = document.createElement('div');
    const projectTitle = document.createElement('div');
    const projectDescription = document.createElement('div');

    projectStatus.className = setStatus(project.isDone);
    projectBox.className = 'project-container';
    projectBox.dataset.id = project.id;
    projectHeader.className = 'project-header';
    projectTitleCont.className = 'project-title-container';
    projectTitle.className = 'project-title';
    projectSizer.className = 'project-sizer';
    projectDescription.className = 'project-desc';
    projectDescription.style.display = 'none';

    projectSizer.textContent = 'TBA';
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    projectTitleCont.appendChild(projectTitle);
    [projectStatus, projectTitleCont, projectSizer]
      .forEach((obj) => projectHeader.appendChild(obj));
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
    projectTitleCont.addEventListener('mouseenter', function Handler() {
      function onLeaveHandler() {
        editController.onLeave(projectTitleCont);
      }
      projectTitleCont.addEventListener('mouseleave', onLeaveHandler);
      editController.onHover(projectTitleCont, projectBox, project, [Handler, onLeaveHandler]);
    });

    return projectBox;
  }

  function load(projects) {
    reset();
    projectList = projects;
    const projectsContainer = [...document.getElementsByClassName('project-sidebar')][0];
    const projectBoxes = projects.map((project) => create(project));
    projectBoxes.forEach((box) => projectsContainer.appendChild(box));
  }

  function reload(project) {
    if (project) {
      load(project);
      projectList = project;
    } else {
      load(projectList);
    }
  }

  return { load, reload, projectList };
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
        const projects = callback(BoxObject(type, inputTitle.value, inputDesc.value));
        resetter(projects);
        reset(wrapper, container);
      });
    }

    if (type === 'task') {
      submitBtn.addEventListener('click', () => {
        const tasks = callback.addTask(BoxObject(type, inputTitle.value, inputDesc.value));
        resetter(tasks);
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
        loadForm(type, callback, projectController.reload);
      });
    }
    if (type === 'task') {
      const btn = document.getElementsByClassName('create-task-button')[0];
      btn.addEventListener('click', () => {
        loadForm(type, callback, taskController.reload);
      });
    }
  }
  return { addFormEvent };
}());

export {
  projectController, taskController, formController,
};
