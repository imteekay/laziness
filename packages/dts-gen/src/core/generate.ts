import { parse } from 'react-docgen';
import { build } from './builders';
import { PropAttrs, TemplateParams, Shapes } from '../types/dtsTypes';

function generateTypeNameTemplate(typeName: string) {
  return `type ${typeName} = {`;
}

function generateAttributeType(prop: string, propAttr: PropAttrs) {
  const { type, required } = propAttr;
  const optional = required ? '' : '?';
  return `  ${prop}${optional}: ${type};`;
}

function generateEndOfTemplate() {
  return '};';
}

function generateTemplate({ componentName, types }: TemplateParams) {
  const typeNameTemplate = generateTypeNameTemplate(componentName);
  const templateList = [typeNameTemplate];

  for (const [prop, propAttr] of Object.entries(types)) {
    const attributeType = generateAttributeType(prop, propAttr);
    templateList.push(attributeType);
  }

  templateList.push(generateEndOfTemplate());
  return templateList.join('\n');
}

function generateCustomTypeTemplates(shapes: Shapes) {
  const templates: string[] = [];

  for (const [typeName, types] of Object.entries(shapes)) {
    const template = generateTemplate({ componentName: typeName, types });
    templates.push(template);
  }

  return templates;
}

export async function generate(sourceCode: string) {
  const componentAST = parse(sourceCode);
  const { result, shapes } = build(componentAST);

  const customTypeTemplates = generateCustomTypeTemplates(shapes);
  const mainComponentTemplate = generateTemplate({
    componentName: componentAST.displayName,
    types: result,
  });

  console.log(customTypeTemplates.join('\n\n'));
  console.log(mainComponentTemplate);
}
