export default class FormHeader {
  constructor(container, formTitle, formLineBreak) {
    this.container = container;
    this.formTitle = formTitle;
    this.formLineBreak = formLineBreak;
    this.addHeaderComponents();
  }
  addTitle() {
    this.container.appendChild(this.formTitle);
  }
  addLineBreak() {
    this.container.appendChild(this.formLineBreak);
  }
  addHeaderComponents() {
    this.addTitle();
    this.addLineBreak();
  }
}
