// HTML elements Blueprint
const elementFactory = (type, attributes, ...children) => {
  const element = document.createElement(type);
  for (key in attributes) {
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
// Add a image container
const addImageContainer = (imageURL) => {
  return elementFactory(
    "div",
    { class: "image-element" },
    elementFactory("img", { src: imageURL })
  );
};
// Add a container
const addContainer = (className, containerText="", id="") => {
  return elementFactory("div", { class: className, id:id}, containerText);
};
// Get Element by ID
const getElementById = (id) => {
  return document.getElementById(id);
};
