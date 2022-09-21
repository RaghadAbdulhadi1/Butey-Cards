export default interface IJsonFormate {
  email: string,
  username: string,
  password: string
}

export default class LocalStorage {
  addToLocalStorage(storageData: IJsonFormate): void {
    localStorage.setItem("Users", JSON.stringify(storageData));
  }
  getLocalStorage(){
    const users: string | null = localStorage.getItem("Users");
    const data = users ? JSON.parse(users) : {};
    return data;  
  }
}
