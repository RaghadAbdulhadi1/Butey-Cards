export default class LocalStorage {
  constructor() {}
  addToLocalStorage(storageData) {
    localStorage.setItem("Users", JSON.stringify(storageData));
  }
  getLocalStorage() {
    return JSON.parse(localStorage.getItem("Users")) || {};
  }
}
