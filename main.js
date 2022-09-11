class FormsHandler {
  constructor() {
    new LoginFormComponent();
    new RegisterFormComponent();
    forms.appendChild(logInContainer);
    forms.appendChild(registerContainer);
    formsContainer.appendChild(forms);
    container.appendChild(formsContainer);
    this.container = document.getElementById("container");
    switchToRegisterFormLink.addEventListener("click", this.switchToLogin);
    switchToLoginFormLink.addEventListener("click", this.switchToRegister);
    new LocalStorage();
    new Validation();
  }
  switchToLogin = () => {
    formsContainer.classList.add("active");
  };
  switchToRegister = () => {
    formsContainer.classList.remove("active");
  };
}

const formHandler = new FormsHandler();
