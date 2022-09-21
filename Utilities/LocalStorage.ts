export default interface jsonFormate {
  email: string,
  username: string,
  password: string
}

export default class LocalStorage {
  addToLocalStorage(storageData: jsonFormate) {
    localStorage.setItem("Users", JSON.stringify(storageData));
  }
}
