// HTML elements Blueprint
const elementFactory = (type, attributes, ...children) => {
  const element = document.createElement(type);
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });
  return element;
};
// Get Element by ID
const getElementById = (id) => {
  return document.getElementById(id);
};
// GET all classes with same name
const getAllClasses = (className) => {
  return document.querySelectorAll(className);
};

export { getElementById, getAllClasses, elementFactory };
