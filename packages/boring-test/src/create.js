import { resolve, join, dirname } from 'path';
import { getComponentsFilePaths } from './propTypes/getComponentsFilePaths';
import { getComponentPropTypes } from './propTypes/getComponentPropTypes';
import { buildProps } from './propTypes/buildProps';
import { promises as fs } from 'fs';

const jsExtension = '.js';

const componentReplacement = (content, componentName) =>
  content
    .split("${componentToBeTested}")
    .join(componentName);

const addInnerComponentsProps = async (content, filePath) => {
  const foldersPath = dirname(filePath);

  const componentsPaths = await getComponentsFilePaths(filePath);
  const components = Object.keys(componentsPaths);

  const innerComponentsTests = await Promise.all(components.map(async (component) => {
    const innerComponentFilePath = join(foldersPath, componentsPaths[component]) + jsExtension;

    const propsDataStructure = await getComponentPropTypes(innerComponentFilePath);
    const innerComponentProps = buildProps(propsDataStructure);

    const templatePath = resolve(__dirname, '../templates/inner-component.js');
    const innerComponentTestContent = await fs.readFile(templatePath, "utf8");

    const innerComponentTest = innerComponentTestContent
      .replace(/InnerComponent/g, component)
      .replace(/innerComponentProps/, JSON.stringify(innerComponentProps, null, 2));

    return innerComponentTest;
  }));

  return content
    .replace('${innerComponents}', innerComponentsTests.join('\n'));
};

const isUiTemplate = (template) =>
  template === 'ui';

const createNewTest = async ({ content, componentName, filePath, template }) => {
  const replacedComponentTest = componentReplacement(content, componentName);

  return isUiTemplate(template)
    ? await addInnerComponentsProps(replacedComponentTest, filePath)
    : replacedComponentTest;
};

export { componentReplacement, addInnerComponentsProps, createNewTest };
