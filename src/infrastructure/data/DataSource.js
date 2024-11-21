/**
 * Class representing the common CRUD interface for every datasource type
 */
export class DataSource {
    set(key, data) {}
    update(key, data) {}
    get(key) {}
    delete(key) {}
    list() {}
}