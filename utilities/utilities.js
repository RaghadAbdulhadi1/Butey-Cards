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
// Add anchor Link
const addAnchorLink = (className, anchorText) => {
  return elementFactory("a", { class: className, href: "#" }, anchorText);
};
// Add Button
const addButton = (value, id) => {
  return elementFactory(
    "div",
    { class: "button" },
    elementFactory("input", { type: "submit", value: value.charAt(0).toUpperCase() + value.slice(1), id: id })
  );
};
// Add Form Input
const addFormInput = (type, placeholder, id, iconClass) => {
  return elementFactory(
    "div",
    { class: "input-feild" },
    elementFactory("input", { type: type, placeholder: placeholder, id: id }),
    elementFactory("i", { class: iconClass })
  );
};
// Add Header
const addHeaderThree = (text) => {
  return elementFactory("h3", { class: "validationHeader" }, text);
};
// Add Radio options
const addRadioChoice = (radioText, checkboxName) => {
  return elementFactory(
    "div",
    { class: "checkboxes-gender" },
    elementFactory("input", {
      type: "checkbox",
      name: checkboxName,
      class: "gender",
    }),
    elementFactory("label", { class: "gender-label" }, radioText)
  );
};
// Add select options
const addOptions = (optionText) => {
  return elementFactory(
    "option",
    { value: optionText.toLowerCase() },
    optionText
  );
};
// Add paragraph
const addParagraph = (paragraphText, id="", className="") => {
  return elementFactory("p", {id: id, class: className}, paragraphText);
};
// Add Select Feild
const addSelectField = () => {
  return elementFactory("select", { id: "countries", name: "countries" });
};
// Add Span Link
const addSpanLink = (spanText, anchorText) => {
  return elementFactory(
    "span",
    {},
    spanText,
    elementFactory("a", {}, anchorText)
  );
};
// Add anchor Link
const addParagraphLink = (paragraphText, anchorText, className = "") => {
  return elementFactory(
    "p",
    {},
    paragraphText,
    elementFactory("a", { class: className, href: "#" }, anchorText)
  );
};
// Add a container
const addContainer = (className, containerText="", id="") => {
  return elementFactory("div", { class: className, id:id}, containerText);
};
// Add a form
const addForm = (id) => {
  return elementFactory("form", { id: id });
};
// Add Line break
const addLineBreak = () => {
  return elementFactory("div", { class: "line-break" });
};
// Get Element by ID
const getElementById = (id) => {
  return document.getElementById(id);
};
// GET Element by Class
const getElementByClassName = (className) => {
  return document.querySelector(className);
};
// GET all classes with same name
const getClassesWithSameName = (className) => {
  return document.querySelectorAll(className);
};
// Add class
const addClass = (className, newClassName) => {
  originalClass = document.querySelector(className);
  originalClass.classList.add(newClassName);
};
// Remove class
const removeClass = (className, newClassName) => {
  originalClass = document.querySelector(className);
  originalClass.classList.remove(newClassName);
};
// Regex
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const usernameRegex = /^[a-z][a-z0-9_]+[a-z0-9]$/g;
const smallLetterPasswordRegex = /[a-z]/g;
const capitalLetterPasswordRegex = /[A-Z]/g;
const numbersLetterPasswordRegex = /[0-9]/g;
const charactersLetterPasswordRegex = /\W/g;
// Clear Form Feilds
const clearFormFeilds = (...fields) => {
  fields.forEach((field) => {
    field.value = "";
  });
};
// LocalStorage
const getLocalStorage = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users;
}