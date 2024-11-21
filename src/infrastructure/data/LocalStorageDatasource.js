import { DataSource } from "./DataSource";

/**
 * Datasource based on the window.localStorage interface
 */
export class LocalStorageDataSource extends DataSource {
    
    set(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    update(key, data) {
        localStorage.removeItem(key);
    }

    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    delete(key) {
        localStorage.removeItem(key);
    }

    list() {
        
        let list = [];
        Object.keys(localStorage).forEach((key) => {
            list.push({key, data : JSON.parse(localStorage.getItem(key))});
         });

         return list;
    }
}