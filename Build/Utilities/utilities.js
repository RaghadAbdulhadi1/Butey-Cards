// HTML elements Blueprint
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
// Get Element by ID
export const getElementById = (id) => {
    return document.getElementById(id);
};
// GET Element by Class
export const getElementByClassName = (className) => {
    return document.querySelector(className);
};
// GET all classes with same name
export const getClassesWithSameName = (className) => {
    return document.querySelectorAll(className);
};
// Clear Form Feilds
export const clearFormFeilds = (...fields) => {
    fields.forEach((field) => {
        field.value = "";
    });
};
document.querySelector;
