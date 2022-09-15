import { elementFactory } from '../../utilities/utilities.js';

export default class LineBreak {
    constructor() {
        return this.addlineBreak();
    }
    addlineBreak() {
        return elementFactory("div", {class:"line-break"});
    }
}
