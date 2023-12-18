import { data } from 'autoprefixer';

interface DataStorageSearchData {
    key: string;
    data: string;
}

interface DataStorage {
    getData(key: string): any;
    searchData(key: string): DataStorageSearchData[] | null;
    setData(key: string, data: any): any;
    deleteData(key: string): any;
}

export function GetDataStorage(): DataStorage {
    return {
        getData(key: string) {
            return localStorage.getItem(key);
        },

        searchData(key: string) {
            const keys = Object.keys(localStorage).filter(((thisKey) => thisKey.includes(key)));

            if (keys.length === 0) {
                return null;
            }

            const dataList: DataStorageSearchData[] = [];

            for (const i in keys) {
                dataList.push({ key: i, data: this.getData(i) });
            }

            return dataList;
        },

        setData(key: string, data: string) {
            return localStorage.setItem(key, data);
        },

        deleteData(key: string) {
            return localStorage.removeItem(key);
        },
    } satisfies DataStorage;
}
