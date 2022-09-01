class Image {
  constructor(url) {
    this.url = url;
  }
}
class FormTitle {
  constructor() {
    this.title = "";
  }
}

class FieldIcon {
  constructor() {}
}

class UserNameFeild {
  constructor() {
    this.userName = document.createElement("div");
  }
  get userName() {
    return this.userName;
  }
}

class EmailFeild {
  constructor() {
    this.email = document.createElement("div");
  }
  isValidated() {}
  isUnique() {}
}

class PasswordFeild {
  constructor() {
    this.password = document.createElement("div");
  }
  get password() {
    return this.password;
  }
  set password(newPassword) {
    this.password = newPassword;
  }
  isMatched() {}
}

class SubmitButton {
  constructor() {}
  onSubmit() {}
}

class LogInForm {
  constructor() {
    this.container = document.getElementById("container");
    this.logInForm = document.createElement("div");
  }
  register() {}
}

class RegistrationForm {
  constructor() {
    this.container = document.getElementById("container");
    this.logInForm = document.createElement("div");
  }
  registered() {}
}

class RenderPage {
    constructor() {
        const registration = new RegistrationForm();
        const logIn = new LogInForm();
    }
}

const renderPage = new RenderPage();