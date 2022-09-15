import { elementFactory } from '../../utilities/utilities.js';

export default class Anchor {
    constructor(className, anchorText) {
        this.className = className;
        this.anchorText = anchorText;
        return this.addAnchorLink();
    }
    addAnchorLink () {
        return elementFactory("a", { class: this.className, href: "#" }, this.anchorText);
    }
}
