import { NewTestProps } from './types';

export const componentReplacement = (
  content: string,
  componentName: string
): string => content.split('${componentToBeTested}').join(componentName);

export const buildNewTestContent = async ({
  content,
  componentName,
}: NewTestProps): Promise<string> =>
  componentReplacement(content, componentName);
