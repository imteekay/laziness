import { getLastElement, getFirstElement } from './utils';
import { FilePath } from './types';
import { Template } from './Template';

export const getTemplateFile = (template: string): string => {
  switch (template) {
    case Template.CSS:
      return 'templates/css.js';
    case Template.UI:
      return 'templates/ui.js';
    case Template.Default:
      return 'templates/default.js';
    default:
      return 'templates/default.js';
  }
};

export const getComponentName = (file: FilePath): string => {
  const fileList = file.split('/');
  const fileName = getLastElement(fileList);
  const componentName = getFirstElement(fileName.split('.'));
  return componentName;
};
