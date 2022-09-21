export const elementFactory = (type, attributes, ...children) => {
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
export const getElementById = (id) => {
    return document.getElementById(id);
};
export const getElementByClassName = (className) => {
    return document.querySelector(className);
};
export const getClassesWithSameName = (className) => {
    return document.querySelectorAll(className);
};
export const clearFormFeilds = (...fields) => {
    fields.forEach((field) => {
        field.value = "";
    });
};
