export default class FormHeader {
  constructor(private container: HTMLElement, private formTitle: HTMLElement, private formLineBreak: HTMLElement) {
    this.addHeaderComponents();
  }

  private addTitle(): void {
    this.container.appendChild(this.formTitle);
  }

  private addLineBreak(): void {
    this.container.appendChild(this.formLineBreak);
  }
  
  private addHeaderComponents(): void {
    this.addTitle();
    this.addLineBreak();
  }
}
