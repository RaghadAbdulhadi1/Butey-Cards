"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Form_1 = __importDefault(require("../Form/Form"));
const constants = __importStar(require("./RegisterConstants"));
const utils = __importStar(require("../../Utilities/utilities"));
const LocalStorage_1 = __importDefault(require("../../Utilities/LocalStorage"));
class RegisterForm extends Form_1.default {
    constructor() {
        super(constants.registerParameters);
        this.addRegisterComponents();
    }
    addSelectOptions() {
        constants.registerSelectOptions.forEach((inputOption) => constants.registerSelectFeild.appendChild(inputOption));
        constants.registerSelect.appendChild(constants.registerSelectFeild);
        this.formContainer.appendChild(constants.registerSelect);
    }
    addRadioOptions() {
        constants.registerRadioFeild.forEach((radioOption) => {
            constants.registerCheckbox.appendChild(radioOption);
            this.formContainer.appendChild(constants.registerCheckbox);
        });
    }
    addLoginButton() {
        this.formClickables.appendChild(this.formSubmitButton);
    }
    addSwitchToRegisterLink() {
        this.formLink.appendChild(this.switchLink);
        this.formClickables.appendChild(this.formLink);
    }
    addTermsAndConditionsLink() {
        this.formLink.appendChild(constants.termsAndConditions);
        this.formClickables.appendChild(this.formLink);
    }
    addClickables() {
        this.formContainer.appendChild(this.formClickables);
    }
    addPasswordValidation() {
        constants.passwordValidationParagraphs.forEach((passwordValidation) => {
            constants.passwordValidationContainer.appendChild(passwordValidation);
        });
        this.formContainer.appendChild(constants.passwordValidationContainer);
    }
    addEmailValidatoin() {
        constants.emailValidationParagraphs.forEach((emailValidation) => {
            constants.emailValidationContainer.appendChild(emailValidation);
        });
        this.formContainer.appendChild(constants.emailValidationContainer);
    }
    addUserNameValidation() {
        constants.userNameValidationContainer.appendChild(constants.userNameValidationTitle);
        constants.userNameValidationContainer.appendChild(constants.userNameValidationContent);
        this.formContainer.appendChild(constants.userNameValidationContainer);
    }
    addConfirmPasswordValidation() {
        constants.confirmPasswordValidationContainer.appendChild(constants.confirmPasswordValidationContent);
        this.formContainer.appendChild(constants.confirmPasswordValidationContainer);
    }
    onSubmit(e) {
        this.email = utils.getElementByClassName(".signup-email");
        this.username = utils.getElementByClassName(".signup-name");
        this.password = utils.getElementByClassName(".signup-password");
        this.confirmPassword = utils.getElementByClassName(".confirm-password");
        this.isValid = utils.getClassesWithSameName(".valid");
        e.preventDefault();
        const llocalStorage = new LocalStorage_1.default();
        if (this.isValid.length == 6) {
            const data = llocalStorage.getLocalStorage();
            data[this.email.value] = {
                email: this.email.value,
                username: this.username.value,
                password: this.password.value,
            };
            llocalStorage.addToLocalStorage(data);
            utils.clearFormFeilds(this.email, this.username, this.password, this.confirmPassword);
        }
    }
    addRegisterComponents() {
        this.addSelectOptions();
        this.addRadioOptions();
        this.addLoginButton();
        this.addSwitchToRegisterLink();
        this.addTermsAndConditionsLink();
        this.addClickables();
        this.addPasswordValidation();
        this.addEmailValidatoin();
        this.addUserNameValidation();
        this.addConfirmPasswordValidation();
        this.formSubmitButton.addEventListener("click", this.onSubmit);
    }
}
exports.default = RegisterForm;
//# sourceMappingURL=RegisterForm.js.map