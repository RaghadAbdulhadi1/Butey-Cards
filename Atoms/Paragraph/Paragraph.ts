import { elementFactory } from "../../Utilities/utilities";

interface IParagraph {
  addParagraph(): HTMLParagraphElement;
}

export default class Paragraph implements IParagraph {
  constructor(private paragraphText: string, private id: string, private className: string) {
  }

  public addParagraph(): HTMLParagraphElement {
    return elementFactory(
      "p",
      { id: this.id, class: this.className },
      this.paragraphText
    );
  }
  
  public get paragraph(): HTMLParagraphElement {
    return this.addParagraph();
  }
}
