export default class LocalStorage {
    addToLocalStorage(storageData) {
        try {
            localStorage.setItem("Users", JSON.stringify(storageData));
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }
    getLocalStorage() {
        const users = localStorage.getItem("Users");
        const data = users ? JSON.parse(users) : {};
        return data;
    }
}
