interface AttributeCollection {
  [name: string]: string;
}

// HTML elements Blueprint
export const elementFactory = <T>(type: string, attributes: AttributeCollection | null, ...children: (string | HTMLElement)[]): T | HTMLElement => {
  const element = document.createElement(type) as HTMLElement;
  for (const key in attributes) {
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
export const getElementById = (id: string): HTMLElement | null => {
  return document.getElementById(id);
};

// GET Element by Class
export const getElementByClassName = (className: string): HTMLElement | null => {
  return document.querySelector(className);
};

// GET all classes with same name
export const getClassesWithSameName = (className: string): NodeListOf<HTMLElement> | null => {
  return document.querySelectorAll(className);
};

// Clear Form Feilds
export const clearFormFeilds = (...fields: HTMLInputElement[]): void => {
  fields.forEach((field) => {
    field.value = "";
  });
};
