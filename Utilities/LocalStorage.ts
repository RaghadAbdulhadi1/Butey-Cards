export default interface IJsonFormate {
  email: string,
  username: string,
  password: string
}

export default class LocalStorage {
  public addToLocalStorage(storageData: IJsonFormate): void {
    if(window.localStorage!==undefined){
      try {
        localStorage.setItem("Users", JSON.stringify(storageData));
      }
      catch (err){
        throw new Error(`${err}`);
      }
    }
  }
  
  public getLocalStorage(){
    const users: string | null = localStorage.getItem("Users");
    const data = users ? JSON.parse(users) : {};
    return data;  
  }
}
