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
    const taskBoxes = tasks.map((task) => create(task, utility.deleteTask));
    taskBoxes.forEach((box) => container.appendChild(box));
  }

  return { load };
}());

const projectController = (function controller() {
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

    projectStatus.addEventListener('click', (box) => {
      box.stopPropagation();
      // Retains context
      setStatus(projectStatus, projectStatus, () => project.setDone());
    });
    projectSizer.addEventListener('click', () => {
      sizer(projectDescription);
    });
    projectBox.addEventListener('click', () => {
      taskController.load(project.tasks, {
        deleteTask: project.deleteTask,
        addTask: project.addTask,
      });
    });
    return projectBox;
  }

  function load(projects) {
    const projectsContainer = [...document.getElementsByClassName('project-sidebar')][0];
    const projectBoxes = projects.map((project) => create(project));
    projectBoxes.forEach((box) => projectsContainer.appendChild(box));
  }

  return { load };
}());

export { projectController, taskController };
