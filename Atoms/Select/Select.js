import { elementFactory } from "../../Utilities/utilities.js";

export default class SelectFeild {
  constructor() {}
  addSelectFeild() {
    return elementFactory("select", { class: "countries", name: "countries" });
  }
  get select() {
    return this.addSelectFeild();
  }
}