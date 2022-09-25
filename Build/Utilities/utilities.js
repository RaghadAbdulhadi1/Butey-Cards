"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearFormFeilds = exports.getClassesWithSameName = exports.getElementByClassName = exports.getElementById = exports.elementFactory = void 0;
const elementFactory = (type, attributes, ...children) => {
    const element = document.createElement(type);
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    children.forEach((child) => {
        if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
        }
        else {
            element.appendChild(child);
        }
    });
    return element;
};
exports.elementFactory = elementFactory;
const getElementById = (id) => {
    return document.getElementById(id);
};
exports.getElementById = getElementById;
const getElementByClassName = (className) => {
    return document.querySelector(className);
};
exports.getElementByClassName = getElementByClassName;
const getClassesWithSameName = (className) => {
    return document.querySelectorAll(className);
};
exports.getClassesWithSameName = getClassesWithSameName;
const clearFormFeilds = (...fields) => {
    fields.forEach((field) => {
        field.value = "";
    });
};
exports.clearFormFeilds = clearFormFeilds;
//# sourceMappingURL=utilities.js.map