import { RemoveTaskFromList } from '../RemoveTaskFromList';
import { Task } from '../../entities/Task';
import { TaskRepository } from '../../repositories/TaskRepository';

jest.mock('../../repositories/TaskRepository');

let testList = {
    'task2': {
        name: 'task2',
        description: 'A task',
        state: 'In Progress'
    }
};

TaskRepository.prototype.deleteByKey = function (key) {
    delete testList[key];
};

TaskRepository.prototype.findByKey = function (key) {

    if (testList.hasOwnProperty(key)) {

        const foundTask = new Task();
        foundTask.setData(testList[key]);
        return foundTask;
    }

    return null;
};

test('RemoveTaskFromList use case removes a task from the repository', () => {

    const taskToRemove = {
        name: 'task2',
        description: 'A task',
        state: 'In Progress'
    };
    
    const removeTaskFromList = new RemoveTaskFromList(new TaskRepository());
    removeTaskFromList.execute(taskToRemove);
});

test('RemoveTaskFromList use case fails to remove a non existing task from the repository', () => {

    const taskToRemove = {
        name: 'task2',
        description: 'A task',
        state: 'In Progress'
    };

    const removeTaskFromList = new RemoveTaskFromList(new TaskRepository());

    expect(() => {
        removeTaskFromList.execute(taskToRemove);
    }).toThrow();

});