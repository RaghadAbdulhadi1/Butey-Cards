export default class LocalStorage {
    addToLocalStorage(storageData) {
        localStorage.setItem("Users", JSON.stringify(storageData));
    }
    getLocalStorage() {
        const users = localStorage.getItem("Users");
        const data = users ? JSON.parse(users) : {};
        return data;
    }
}
