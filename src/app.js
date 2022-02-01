class Project {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tasks = [];
    }
}

class Task {
    constructor(title) {
        this.title = title;
    }
}

const project = (function() {
    const list = [];
    
    function create(title, description) {
        let newProject = new Project(list.length, title, description);
        list.push(newProject);
    }

    function addTask(task, projectID) {
        task.id = project.list[projectID]['tasks'].length+1;
        project.list[projectID]['tasks'].push(task);
    }

    return { list, create, addTask };
})();

const task = (function() {
    function create(title) {
        let newTask = new Task(title);
        return newTask
    }

    return {create};
})()

export { task, project };