/* eslint-disable @typescript-eslint/naming-convention */
import RadioField from "./RadioField";

enum RadioChoices {
  Female = "Female",
  Male = "Male",
}

const registerRadioFeild: HTMLElement[] = [
  new RadioField(RadioChoices.Female, "radio-choice-1").radioFeild,
  new RadioField(RadioChoices.Male, "radio-choice-2").radioFeild,
];
export { registerRadioFeild };
