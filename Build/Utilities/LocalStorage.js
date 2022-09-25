"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocalStorage {
    addToLocalStorage(storageData) {
        if (window.localStorage !== undefined) {
            try {
                localStorage.setItem("Users", JSON.stringify(storageData));
            }
            catch (err) {
                throw new Error(`${err}`);
            }
        }
    }
    getLocalStorage() {
        const users = localStorage.getItem("Users");
        const data = users ? JSON.parse(users) : {};
        return data;
    }
}
exports.default = LocalStorage;
//# sourceMappingURL=LocalStorage.js.map