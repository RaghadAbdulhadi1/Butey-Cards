"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class SelectFeild {
    addSelectFeild() {
        return (0, utilities_1.elementFactory)("select", { class: "countries", name: "countries" });
    }
    get select() {
        return this.addSelectFeild();
    }
}
exports.default = SelectFeild;
//# sourceMappingURL=Select.js.map