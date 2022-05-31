/* eslint-disable no-undef */
import BoxObject from '../object';

describe('Tasks Object', () => {
  it('#1.1 Render Project successfully', () => {
    const task = BoxObject('task', 'Title', 'Description');
    expect(task).toMatchObject({
      type: 'task',
      title: 'Title',
      description: 'Description',
      isDone: false,
    });
    expect(task.setDone).toBeDefined();
    expect(task.id).toBeDefined();
  });

  it('#1.2 Mark task as done', () => {
    const task = BoxObject('task', 'Title', 'Description');
    task.setDone();

    expect(task.isDone).toBe(true);
  });
});

describe('Projects Object', () => {
  it('#2.1 Render Project successfully', () => {
    const project = BoxObject('project', 'Title', 'Description');
    expect(project).toMatchObject({
      type: 'project',
      title: 'Title',
      description: 'Description',
      tasks: [],
      isDone: false,
      hidden: false,
    });
    expect(project.addTask).toBeDefined();
    expect(project.setHidden).toBeDefined();
    expect(project.deleteTask).toBeDefined();
    expect(project.setDone).toBeDefined();
    expect(project.id).toBeDefined();
  });

  it('#2.2 Mark project as done', () => {
    const project = BoxObject('project', 'Title', 'Description');
    project.setDone();

    expect(project.type).toMatch('project');
    expect(project.isDone).toBe(true);
  });

  it('#2.3 Add tasks to project', () => {
    const project = BoxObject('project', 'Title', 'Description');
    const taskOne = BoxObject('task', 'Another Title', 'Another Description');
    const taskTwo = BoxObject('task', 'Just Another Task', 'Just Another Description');

    project.addTask(taskOne);
    project.addTask(taskTwo);

    expect(project.tasks.length).toBe(2);
    expect(project.tasks).toMatchObject([taskOne, taskTwo]);
  });

  it('#2.3 Delete task from project', () => {
    const project = BoxObject('project', 'Title', 'Description');
    const taskOne = BoxObject('task', 'Another Title', 'Another Description');
    const taskTwo = BoxObject('task', 'Just Another Task', 'Just Another Description');

    project.addTask(taskOne);
    project.addTask(taskTwo);

    expect(project.tasks.length).toBe(2);
    expect(project.tasks).toMatchObject([taskOne, taskTwo]);

    project.deleteTask(taskOne.id);
    expect(project.tasks.length).toBe(1);
    expect(project.tasks).toMatchObject([taskTwo]);
  });
});
