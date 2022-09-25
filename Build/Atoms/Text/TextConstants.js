"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerFormTitle = exports.loginFormTitle = void 0;
const Text_1 = __importDefault(require("./Text"));
const loginFormTitle = new Text_1.default("title", "Login").text;
exports.loginFormTitle = loginFormTitle;
const registerFormTitle = new Text_1.default("title", "Registeration").text;
exports.registerFormTitle = registerFormTitle;
//# sourceMappingURL=TextConstants.js.map