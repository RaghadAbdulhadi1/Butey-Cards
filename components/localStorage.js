class LocalStorage {
  constructor() {
    this.form = getElementById("register-form-id");
    this.email = getElementById("signup-email");
    this.username = getElementById("signup-name");
    this.password = getElementById("signup-password");
    this.confirmPassword = getElementById("confirm-password");
    this.country = getElementById("countries");
    this.gender = getElementById("gender-choices");
    this.user = {};
    this.form.addEventListener("submit", (e) => {
      this.isValid = document.querySelectorAll(".valid");
      e.preventDefault();
      if (this.isValid.length == 6) {
        this.user = {
          email: this.email.value,
          username: this.username.value,
          password: this.password.value,
        };
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(this.user);
        localStorage.setItem("users", JSON.stringify(users));
        clearFormFeilds(this.email,this.username,this.password,this.confirmPassword)
      }
    });
  };
  }
