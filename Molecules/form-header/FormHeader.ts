export default class FormHeader {
  constructor(private container: HTMLElement, private formTitle: HTMLElement, private formLineBreak: HTMLElement) {
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
