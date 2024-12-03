import { Task } from '../entities/Task';
import { TaskRepository } from './TaskRepository';

/**
 * Concrete implementation of the TaskRepository interface
 */
export class TaskRepositoryImpl extends TaskRepository {

    #keyField;
    #dataSource;

    /**
     * 
     * @param {string} keyField 
     */
    constructor(keyField, dataSource) {
        
        super();
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
    
    /**
     * 
     * @param {*} key 
     * @param {*} data 
     */
    updateByKey(key, data) {
        
        this.#dataSource.update(key, data);
    }

    /**
     * 
     * @param {string} key 
     */
    deleteByKey(key) {
        this.#dataSource.delete(key);
    }
}