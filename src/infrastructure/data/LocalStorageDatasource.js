import { DataSource } from "./DataSource";

/**
 * Datasource based on the window.localStorage interface
 */
export class LocalStorageDataSource extends DataSource {
    
    /**
     * 
     * @param {*} key 
     * @param {*} data 
     */
    set(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    /**
     * 
     * @param {*} key 
     * @param {*} data 
     * @returns 
     */
    update(key, data) {
         
        let original = this.get(key);
        if (original === null)
            return;
        
        this.set(key, Object.assign(original, data));
    }

    /**
     * 
     * @param {*} key 
     * @returns 
     */
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    /**
     * 
     * @param {*} key 
     */
    delete(key) {
        localStorage.removeItem(key);
    }

    /**
     * 
     * @returns array
     */
    list() {
        
        let list = [];
        Object.keys(localStorage).forEach((key) => {
            list.push({key, data : JSON.parse(localStorage.getItem(key))});
         });

         return list;
    }
}