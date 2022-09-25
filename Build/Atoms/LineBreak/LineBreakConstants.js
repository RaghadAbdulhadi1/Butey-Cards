"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerLineBreak = exports.loginLineBreak = void 0;
const LineBreak_1 = __importDefault(require("./LineBreak"));
const loginLineBreak = new LineBreak_1.default().lineBreak;
exports.loginLineBreak = loginLineBreak;
const registerLineBreak = new LineBreak_1.default().lineBreak;
exports.registerLineBreak = registerLineBreak;
//# sourceMappingURL=LineBreakConstants.js.map