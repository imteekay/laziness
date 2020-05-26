import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import { promises as fs } from 'fs';

const generateAST = async (filePath) => {
  const fileContent = await fs.readFile(filePath, 'utf8');

  return parse(fileContent, {
    sourceType: 'module',
    plugins: ['jsx']
  });
};

const addComponentName = (componentsNames) => (path) => {
  const jsx = path.node;
  const componentName = jsx.name.name;

  componentsNames.push(componentName);
}

const addImportPath = (importsPaths) => (path) => {
  const node = path.node;
  const componentName = node.specifiers[0].local.name;
  const componentPath = node.source.value;

  importsPaths[componentName] = componentPath;
}

const getComponentsAndImports = (ast) => {
  const componentsNames = [];
  const importsPaths = {};

  traverse(ast, {
    JSXOpeningElement: addComponentName(componentsNames),
    ImportDeclaration: addImportPath(importsPaths)
  });

  return {
    componentsNames,
    importsPaths
  };
};

const getPath = async (filePath) => {
  const ast = await generateAST(filePath);
  const { componentsNames, importsPaths } = getComponentsAndImports(ast);

  const components = componentsNames.reduce((acc, name) => {
    const path = importsPaths[name];

    if (path) {
      return {
        ...acc,
        [name]: path
      };
    }

    return acc;
  }, {});

  return components;
};

export const getComponentsFilePaths = async (filePath) => {
  try {
    return await getPath(filePath);
  } catch (error) {
    const errorMessage = `Error: ${error}`;
    console.log(errorMessage);
    return errorMessage;
  }
}
