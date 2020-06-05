import { Template } from './Template';
import { NewTestProps } from './types';

export const componentReplacement = (content: string, componentName: string) =>
  content.split('${componentToBeTested}').join(componentName);

export const isUiTemplate = (template: string) => template === Template.UI;

export const buildNewTestContent = async ({
  content,
  componentName,
}: NewTestProps) => componentReplacement(content, componentName);
