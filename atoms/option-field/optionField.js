import { elementFactory } from '../../utilities/utilities.js';

export default class OptionField {
  constructor(optionText) {
    this.optionText = optionText;
    return this.addOptions();
  }
  addOptions() {
    return elementFactory(
      "option",
      { value: this.optionText.toLowerCase() },
      this.optionText
    );
  }
}
