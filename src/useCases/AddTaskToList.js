/**
 * The user will send the name and description of a task, and it will be created
 * with an initial state
 */
class AddTaskToList {

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

    /**
     * 
     * @param {object} taskData 
     * @returns 
     */
    execute(taskData)
    {
        
        let prevTask = this.#taskRepository.findByKey('name', taskData?.name);
        if (prevTask)
            throw new Error(`There is already a task named ${prevTask.name}`);
        
        return this.#taskRepository.create(taskData);
    }
}