const container = document.querySelector('.forms-container')

const register = document.querySelector(".register-link")
const login = document.querySelector(".login-link")

register.addEventListener("click", () => {
    container.classList.add("active");
    console.log("signup")

})

login.addEventListener("click", () => {
    container.classList.remove("active");
    console.log("login")

})

// class Image {
//   constructor(url) {
//     this.url = url;
//   }
// }

// // class FormTitle {
// //   constructor(title) {
// //     this.title = document.createElement("div");
// //     this.title.setAttribute("class", "title");
// //     this.title.innerText = title; 
// //   }
// //   get getTitle() { 
// //     return this.title; 
// //   }
// // }

// // class DropDownFeild {
// //   constructor() {

// //   }
// // }

// // class RadioFeild {
// //   constructor() {
// //   }
// // }

// class FormInputBox {
//   constructor(iconClassName, placeholder) {
//     this.inputBox = document.createElement("div");
//     this.inputBox.setAttribute("class", "input-box");
    
//     this.icon = document.createElement('i');
//     this.icon.setAttribute('class', iconClassName);
    
//     this.inputField = document.createElement('input');
//     this.inputField.type = 'text';
//     this.inputField.placeholder = placeholder;
    
//     this.inputBox.appendChild(this.icon);
//     this.inputBox.appendChild(this.inputField);
//   }
// }

// class Button {
//   constructor(buttonText) {
//     this.buttonContainer = document.createElement("div");
//     this.buttonContainer.setAttribute("class", "button input-box");
//     this.button = document.createElement('button');
//     this.button.type = 'submit';
//     this.button.value = 'Submit';
//     this.button.innerHTML = buttonText;
//     this.buttonContainer.appendChild(this.button);
//     console.log(this.button);
//   }
//   // onSubmit() {}
// }

// class FormStructure {
//   constructor(formType, title) {
//     this.title = document.createElement("div");
//     this.title.setAttribute("class", "title");
//     this.title.innerText = title; 

//     this.formContainer = document.createElement("div");
//     this.formContainer.setAttribute("class", "form-container");
//     this.form = document.createElement("form");
//     this.form.action = "#";
//     this.formContent = document.createElement("div");
//     this.formContent.setAttribute("class", "form-content");
//     this.formTemplate = document.createElement("div");
//     this.formTemplate.setAttribute("class", formType);
//     this.formContainer.appendChild(this.form);
//     this.form.appendChild(this.formContent);
//     this.formContent.appendChild(this.formTemplate);  
//   }
// }

// class LogInForm {
//   constructor() {
//     this.container = document.getElementById("container");
//     this.formType = new FormStructure("login-form");
//     this.email = new FormInputBox("fa-solid fa-envelope", "Enter your email").inputBox;
//     this.password = new FormInputBox("fa-solid fa-lock", "Enter your password").inputBox;
//     this.submit = new Button("Submit").buttonContainer;

//     this.formTemplate.appendChild(this.formType.formContainer);
//     this.formTemplate.appendChild(this.email);
//     this.formTemplate.appendChild(this.password);
//     this.formTemplate.appendChild(this.submit);
//     this.form.appendChild(this.formContent);
//     this.formContent.appendChild(this.formTemplate)
//     this.container.appendChild(this.formTemplate);
//   }
//   // register() {}
// }

// // class RegistrationForm {
// //   constructor() {
// //     this.container = document.getElementById("container");
// //     this.logInForm = document.createElement("div");
// //   }
// //   registered() {}
// // }

// class RenderPage {
//     constructor() {
//         // const registration = new RegistrationForm();
//         const logIn = new LogInForm();
//     }
// }

// const renderPage = new RenderPage();