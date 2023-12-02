export function GetStoredData(key: string): any {
    return localStorage.getItem(key);
}

export function SetStoredData(key: string, data: string): any {
    return localStorage.setItem(key, data);
}
