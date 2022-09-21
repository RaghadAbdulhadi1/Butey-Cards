import { elementFactory } from "../../Utilities/utilities.js";
export default class link {
    className;
    innerText;
    href;
    constructor(className, innerText, href = "#") {
        this.className = className;
        this.innerText = innerText;
        this.href = href;
    }
    addLink() {
        return elementFactory("a", { class: this.className, href: this.href }, this.innerText);
    }
    get link() {
        return this.addLink();
    }
}
