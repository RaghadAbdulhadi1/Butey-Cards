"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class Span {
    constructor(spanText, innerText) {
        this.spanText = spanText;
        this.innerText = innerText;
    }
    addSpan() {
        return (0, utilities_1.elementFactory)("span", {}, this.spanText, (0, utilities_1.elementFactory)("a", {}, this.innerText));
    }
    get span() {
        return this.addSpan();
    }
}
exports.default = Span;
//# sourceMappingURL=Span.js.map