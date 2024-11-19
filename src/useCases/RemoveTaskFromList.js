/**
 * The user will send the name from the task to be removed from the list
 */
class RemoveTaskFromList {

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
        let prevTask = this.#taskRepository.findByKey('name', taskData?.name);
        if (!prevTask)
            throw new Error(`The task named ${prevTask.name} doesn't exist`);
        
        return this.#taskRepository.deleteByKey('name', prevTask.name);
    }
}