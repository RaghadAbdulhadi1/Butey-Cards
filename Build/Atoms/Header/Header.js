"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class Header {
    constructor(text, className, type = "h3") {
        this.text = text;
        this.className = className;
        this.type = type;
    }
    addHeader() {
        return (0, utilities_1.elementFactory)(this.type, { class: this.className }, this.text);
    }
    get header() {
        return this.addHeader();
    }
}
exports.default = Header;
//# sourceMappingURL=Header.js.map