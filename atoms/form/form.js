import { elementFactory } from "../../utilities/utilities.js";

export default class Form {
  constructor(id) {
    this.id = id;
    return this.addForm();
  }
  addForm() {
    return elementFactory("form", { id: this.id });
  }
}
