import { elementFactory } from "../../utilities/utilities.js";

export default class SelectFeild {
  constructor() {
    return this.addSelectFeild();
  }
  addSelectFeild() {
    return elementFactory("select", { id: "countries", name: "countries" });
  }
}
