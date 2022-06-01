import uniqid from 'uniqid';

function Task(title, description) {
  function setDone() {
    this.isDone = !this.isDone;
    return this.isDone;
  }
  return {
    id: uniqid(),
    type: 'task',
    title,
    description,
    isDone: false,
    setDone,
  };
}

function Project(title, description) {
  function addTask(task) {
    this.tasks = [...this.tasks, task];
    return this.tasks;
  }

  function deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  function setDone() {
    this.isDone = !this.isDone;
    return this.isDone;
  }
  return {
    id: uniqid(),
    type: 'project',
    title,
    description,
    tasks: [],
    isDone: false,
    addTask,
    deleteTask,
    setDone,
  };
}

function ProjectList(id, projects) {
  function addProject(project) {
    this.projects = [...this.projects, project];
    return this.projects;
  }

  function deleteProject(project) {
    this.projects = this.projects.filter((obj) => obj.id !== project.id);
    return this.projects;
  }
  if (!id && !projects) {
    return {
      id: uniqid(),
      projects: [],
      addProject,
      deleteProject,
    };
  }
  return {
    id,
    projects,
    addProject,
    deleteProject,
  };
}

function BoxObject(type, title, description) {
  if (type === 'task') {
    return Task(title, description);
  }
  if (type === 'project') {
    return Project(title, description);
  }
}

export { BoxObject, ProjectList };
