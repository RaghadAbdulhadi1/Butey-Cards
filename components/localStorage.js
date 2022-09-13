class LocalStorage {
  constructor() {
    this.users = JSON.parse(localStorage.getItem("Users")) || {};
  }
  addUser(data) {
    this.users[data.email] = data;
    localStorage.setItem("Users", JSON.stringify(this.users));
  }

  checkUserByEmail(email) {
    if (!this.users[email]) {
      return { valid: true };
    }
    return { valid: false, user: this.#users[email] };
  }

  checkUserForLogin = ({ email, password }) => {
    const isUserExist = this.checkUserByEmail(email);
    if (!isUserExist.valid) {
      if (isUserExist.user.password === password) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  }
