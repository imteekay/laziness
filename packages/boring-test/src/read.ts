import { getLastElement, getFirstElement } from './utils';
import { FilePath } from './types';
import { Template } from './Template';

export const getTemplateFile = (template: string): string => {
  switch (template) {
    case Template.CSS:
      return 'templates/css.ts';
    case Template.UI:
      return 'templates/ui.ts';
    case Template.Default:
      return 'templates/default.ts';
    default:
      return 'templates/default.ts';
  }
};

export const getComponentName = (file: FilePath): string => {
  const fileList = file.split('/');
  const fileName = getLastElement(fileList);
  const componentName = getFirstElement(fileName.split('.'));
  return componentName;
};
