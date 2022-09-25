"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerFormContainer = exports.loginFormContainer = void 0;
const Form_1 = __importDefault(require("./Form"));
const loginFormContainer = new Form_1.default("login-form-id").form;
exports.loginFormContainer = loginFormContainer;
const registerFormContainer = new Form_1.default("register-form-id").form;
exports.registerFormContainer = registerFormContainer;
//# sourceMappingURL=FormConstants.js.map