export default class FormHeader {
  constructor(private container: HTMLElement, private formTitle: HTMLElement, private formLineBreak: HTMLElement) {
    this.addHeaderComponents();
  }
  private addTitle() {
    this.container.appendChild(this.formTitle);
  }
  private addLineBreak() {
    this.container.appendChild(this.formLineBreak);
  }
  private addHeaderComponents() {
    this.addTitle();
    this.addLineBreak();
  }
}
