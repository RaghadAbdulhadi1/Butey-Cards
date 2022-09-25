"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class LineBreak {
    addlineBreak() {
        return (0, utilities_1.elementFactory)("div", { class: "line-break" });
    }
    get lineBreak() {
        return this.addlineBreak();
    }
}
exports.default = LineBreak;
//# sourceMappingURL=LineBreak.js.map