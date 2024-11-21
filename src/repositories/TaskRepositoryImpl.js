import { Task } from '../entities/Task';
import { TaskRepository } from './TaskRepository';

/**
 * Concrete implementation of the TaskRepository interface
 */
class TaskRepositoryImpl extends TaskRepository {

    #keyField;
    #dataSource;

    /**
     * 
     * @param {string} keyField 
     */
    constructor(keyField, dataSource) {
        
        this.#keyField = keyField;
        this.#dataSource = dataSource;
    }

    /**
     * 
     * @param {object} data 
     */
    create(data) {
        this.#dataSource.set(data[this.#keyField], data);
    }
    
    /**
     * 
     * @param {string} key 
     * @returns {Task}
     */
    findByKey(key) {
        
        let task = new Task();
        task.setData(this.#dataSource.get(key));
        return task;
    }
    
    updateByKey(key, data) {

    }

    /**
     * 
     * @param {string} key 
     */
    deleteByKey(key) {
        this.#dataSource.delete(key);
    }
}