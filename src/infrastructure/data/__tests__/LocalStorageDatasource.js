import { LocalStorageDataSource } from '../LocalStorageDatasource';

test('DataSource can store an item and retrieve it', () => {
    let dataSource = new LocalStorageDataSource();
    let testObject1 = {
        a : 1,
        b : 'test'
    };

    let testObject2 = {
        a : [1, 2, 3, 4]
    };

    let testObject3 = {
        a : {
            a : 1,
            b: true
        }
    };

    dataSource.set('obj1', testObject1);
    dataSource.set('obj2', testObject2);
    dataSource.set('obj3', testObject3);

    expect(dataSource.get('obj1')).toEqual(testObject1);
    expect(dataSource.get('obj2')).toEqual(testObject2);
    expect(dataSource.get('obj3')).toEqual(testObject3);
});

test('DataSource can delete an item', () => {
    let dataSource = new LocalStorageDataSource();
    let testObject1 = {
        a : 1,
        b : 'test'
    };

    dataSource.set('obj1', testObject1);
    dataSource.delete('obj1');
    expect(dataSource.get('obj1')).toBeNull();
});

test('DataSource can list items added', () => {
    let dataSource = new LocalStorageDataSource();

    let objects = [];
    for (let i = 0; i < 10; i++) {
        
        let data = {number : i};
        let key = 'obj' + i;
        dataSource.set(key, data);
        objects.push({key, data});
    }

    expect(dataSource.list()).toEqual(expect.arrayContaining(objects));
    expect(expect.arrayContaining(objects)).toEqual(dataSource.list());
});