import { TaskRepositoryImpl } from '../TaskRepositoryImpl';
import { DataSource } from '../../infrastructure/data/DataSource';
import { Task } from '../../entities/Task';

jest.mock('../../infrastructure/data/DataSource');

const expectedObject = {
    name : 'Make Laundry',
    description : 'Wash lots of clothes',
    state : 'In Progress'
};

const expectedTask = new Task();
expectedTask.setData(expectedObject);

DataSource.prototype.get = jest.fn().mockReturnValue(expectedObject);

test('Task Repository can retrieve tasks from stored data', () => {

    let taskRepository = new TaskRepositoryImpl('name', new DataSource());
    const task = taskRepository.findByKey('Make Laundry');

    expect(task).toEqual(expectedTask);
});