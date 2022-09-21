;
export default class LocalStorage {
    addToLocalStorage(storageData) {
        localStorage.setItem("Users", JSON.stringify(storageData));
    }
}
