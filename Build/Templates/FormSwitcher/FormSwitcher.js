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
const LoginForm_1 = __importDefault(require("../../Organisms/LoginForm/LoginForm"));
const RegisterForm_1 = __importDefault(require("../../Organisms/RegisterForm/RegisterForm"));
const Validation_1 = __importDefault(require("../../Utilities/Validation"));
const utils = __importStar(require("../../Utilities/utilities"));
const loginConstants = __importStar(require("../../Organisms/LoginForm/LoginConstants"));
const registerConstants = __importStar(require("../../Organisms/RegisterForm/RegisterConstants"));
const DivConstants_1 = require("../../Atoms/Div/DivConstants");
class FormSwitcher {
    constructor() {
        this.switchToLogin = () => {
            DivConstants_1.formsContainer.classList.add("active");
        };
        this.switchToRegister = () => {
            DivConstants_1.formsContainer.classList.remove("active");
        };
        new LoginForm_1.default();
        new RegisterForm_1.default();
        DivConstants_1.forms.appendChild(DivConstants_1.logInContainer);
        DivConstants_1.forms.appendChild(DivConstants_1.registerContainer);
        DivConstants_1.formsContainer.appendChild(DivConstants_1.forms);
        DivConstants_1.container.appendChild(DivConstants_1.formsContainer);
        this.container = utils.getElementById("container");
        loginConstants.switchToRegisterFormLink.addEventListener("click", this.switchToLogin);
        registerConstants.switchToLoginFormLink.addEventListener("click", this.switchToRegister);
        new Validation_1.default();
    }
}
exports.default = FormSwitcher;
new FormSwitcher();
//# sourceMappingURL=FormSwitcher.js.map