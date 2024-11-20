/**
 * Datasource based on the window.localStorage interface
 */
class LocalStorageDataSource extends DataSource {
    
    set(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    update(key, data) {
        localStorage.removeItem(key);
    }

    get(key) {
        return localStorage.removeItem(key);
    }

    delete(key) {
        localStorage.removeItem(key);
    }

    list() {
        
        let list = [];
        Object.keys(localStorage).forEach((key) => {
            list.push(JSON.parse(localStorage.getItem(key)));
         });

         return list;
    }
}