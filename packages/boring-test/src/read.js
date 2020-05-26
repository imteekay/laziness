import { getLastElement, getFirstElement } from "./utils";

const getTemplateFile = template => {
  switch (template) {
    case "css":
      return "templates/css.js";
    case "ui":
      return "templates/ui.js";
    default:
      return "templates/default.js";
  }
};

const getComponentName = file => {
  const fileList = file.split("/");
  const fileName = getLastElement(fileList);
  const componentName = getFirstElement(fileName.split("."));
  return componentName;
};

export { getTemplateFile, getComponentName };
