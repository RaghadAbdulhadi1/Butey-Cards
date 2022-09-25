"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class Link {
    constructor(className, innerText, href = "#") {
        this.className = className;
        this.innerText = innerText;
        this.href = href;
    }
    addLink() {
        return (0, utilities_1.elementFactory)("a", { class: this.className, href: this.href }, this.innerText);
    }
    get link() {
        return this.addLink();
    }
}
exports.default = Link;
//# sourceMappingURL=Link.js.map