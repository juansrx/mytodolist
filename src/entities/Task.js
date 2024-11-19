/**
 * class representing a task to be performed with a related name, description and
 * status
 */
class Task {

    #name;
    #description;
    #state;

    /**
     * 
     * @returns {object}
     */
    getData() {
        
        return {
            name : this.#name,
            description : this.#description,
            state : this.#state
        }
    }

    /**
     * 
     * @param {object} data 
     */
    setData(data) {

        this.#name = data.name ?? this.#name;
        this.#description = data.description ?? this.#description;
        this.#state = data.state ?? this.#state;
    }
}