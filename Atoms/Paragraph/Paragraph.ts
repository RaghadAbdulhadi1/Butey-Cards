import { elementFactory } from "../../Utilities/utilities";

interface IParagraph {
  addParagraph(): HTMLElement;
}

export default class Paragraph implements IParagraph {
  constructor(private paragraphText: string, private id: string, private className: string) {
  }

  public addParagraph(): HTMLElement {
    return elementFactory<HTMLParagraphElement>(
      "p",
      { id: this.id, class: this.className },
      this.paragraphText
    );
  }
  
  public get paragraph(): HTMLElement {
    return this.addParagraph();
  }
}
