import { TaskRepository } from "../repositories/TaskRepository";

/**
 * The user will send the name from the task to be removed from the list
 */
export class RemoveTaskFromList {

    #taskRepository;

    /**
     * 
     * @param {TaskRepository} taskRepository
     */
    constructor(taskRepository) {

        if (!taskRepository instanceof TaskRepository)
            throw new Error('The task repository should extend the TaskRepository interface');

        this.#taskRepository = taskRepository;
    }

    execute(taskData)
    {

        let prevTask = this.#taskRepository.findByKey(taskData?.name);
        if (!prevTask)
            throw new Error(`The task named ${taskData?.name} doesn't exist`);
        
        this.#taskRepository.deleteByKey(taskData?.name);
    }
}