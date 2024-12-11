import { AddTaskToList } from '../AddTaskToList';
import { Task } from '../../entities/Task';
import { TaskRepository } from '../../repositories/TaskRepository';

jest.mock('../../repositories/TaskRepository');

const testList = {
    'task2': {
        name: 'task2',
        description: 'A second task',
        state: 'In Progress'
    }
};

TaskRepository.prototype.create = jest.fn(function (taskData) {
    testList[taskData.name] = taskData;
});

TaskRepository.prototype.findByKey = function (key) {

    if (testList.hasOwnProperty(key)) {

        const foundTask = new Task();
        foundTask.setData(testList[key]);
        return foundTask;
    }

    return null;
};

test('AddTaskToList use case adds a new task to the repository', () => {

    const taskToAdd = {
        name: 'task1',
        description: 'First task',
        state: 'In Progress'
    };

    const addTaskToList = new AddTaskToList(new TaskRepository());
    addTaskToList.execute(taskToAdd);
});

test('AddTaskToList use case fails when trying to add a task with repeated name', () => {

    const taskToAdd = {
        name: 'task2',
        description: 'Another Task',
        state: 'In Progress'
    };

    const addTaskToList = new AddTaskToList(new TaskRepository());

    expect(() => {
        addTaskToList.execute(taskToAdd);
    }).toThrow();

});