"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRadioFeild = void 0;
const RadioField_1 = __importDefault(require("./RadioField"));
var RadioChoices;
(function (RadioChoices) {
    RadioChoices["Female"] = "Female";
    RadioChoices["Male"] = "Male";
})(RadioChoices || (RadioChoices = {}));
const registerRadioFeild = [
    new RadioField_1.default(RadioChoices.Female, "radio-choice-1").radioFeild,
    new RadioField_1.default(RadioChoices.Male, "radio-choice-2").radioFeild,
];
exports.registerRadioFeild = registerRadioFeild;
//# sourceMappingURL=RadioFeildConstants.js.map