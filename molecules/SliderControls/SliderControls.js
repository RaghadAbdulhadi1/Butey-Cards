import Container from "../../atoms/Div/div.js";
import { BUTTON_CONTROLS } from "../../constants.js";

export default class SliderControls {
  constructor() {
    this.slideControls = new Container("slides-control").container;
    this.rightButton = BUTTON_CONTROLS[0];
    this.leftButton = BUTTON_CONTROLS[1];
    this.addSliderControls();
  }
  addSliderControls() {
    this.slideControls.append(this.leftButton, this.rightButton);
  }
  get controls() {
    return this.slideControls;
  }
}
