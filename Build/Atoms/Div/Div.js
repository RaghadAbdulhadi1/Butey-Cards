"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../Utilities/utilities");
class Container {
    constructor(className, containerText = "", id = "") {
        this.className = className;
        this.containerText = containerText;
        this.id = id;
    }
    addContainer() {
        return (0, utilities_1.elementFactory)("div", { class: this.className, id: this.id }, this.containerText);
    }
    get container() {
        return this.addContainer();
    }
}
exports.default = Container;
//# sourceMappingURL=Div.js.map