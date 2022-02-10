class Project {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tasks = [];
    }
}

class Task {
    constructor(title, description, parentID) {
        this.title = title;
        this.description = description;
        this.parentID = parseInt(parentID);
    }
}

const project = (function() {
    const list = [];
    function getList(lists) {
        lists.forEach((listed) => {
            list.push(listed);
        })
    }
    let x = 0;
    let y = 0;
    function getId(type) {
        if (type === 'project') {
            x += 1
            return +x;
        }
        if (type === 'task') {
            y += 1
            return +y;
        }
    }
    function create(title, description) {
        let newProject = new Project(getId('project'), title, description);
        list.push(newProject);
    }

    function addTask(task, projectID) {
        task.id = getId('task');
        project.list.forEach((proj) => {
            if (proj.id == projectID) {
                proj.tasks.push(task);
            }
        })
    }

    function remove(target, parent) {
        parent.forEach((foo) => {
            if (foo.id === target.id) {
                parent.splice(foo, 1);
            }
        })
    }

    return { list, create, addTask, remove, getList };
})();

const task = (function() {
    function create(title, description, parentID) {
        let newTask = new Task(title, description, parentID);
        return newTask
    }

    return {create};
})()

export { task, project };