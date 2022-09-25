import RadioField from "./RadioField.js";
var RadioChoices;
(function (RadioChoices) {
    RadioChoices["Female"] = "Female";
    RadioChoices["Male"] = "Male";
})(RadioChoices || (RadioChoices = {}));
const registerRadioFeild = [
    new RadioField(RadioChoices.Female, "radio-choice-1").radioFeild,
    new RadioField(RadioChoices.Male, "radio-choice-2").radioFeild,
];
export { registerRadioFeild };
