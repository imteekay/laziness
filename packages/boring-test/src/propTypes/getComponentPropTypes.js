import { promises as fs } from 'fs';

const isEmpty = (list) => list && list.length === 0;
const getLastItem = (list) => list && list[list.length - 1];

const clean = (propType) =>
  propType
    .replace(' = {', '')
    .trim();

const getInstanceOf = (type) =>
  type
    .replace('instanceOf', '')
    .replace(/[^a-zA-Z ]/g, "");

const buildTypes = ({ prop, type, isRequired, instanceOf, shapeTypes }) => ({
  prop,
  type,
  isRequired,
  instanceOf,
  shapeTypes
});

const cleanType = (type) =>
  type.replace(',', '');

const buildNamedPropTypes = (propType) => {
  if (propType.includes('})')) {
    return buildTypes({ type: 'end' });
  }

  const [prop, typeShape] = propType.split(': ');
  const [propTypes, type, isRequiredString] = typeShape.split('.');
  const propTypesList = ['ThemePropType', 'intlShape', 'WidthPropType'];
  const isRequired = Boolean(isRequiredString);

  if (propTypesList.includes(propTypes)) {
    return buildTypes({
      prop,
      type: propTypes,
      isRequired
    });
  }

  if (type.includes('instanceOf')) {
    return buildTypes({
      prop,
      type: 'instanceOf',
      isRequired,
      instanceOf: getInstanceOf(type)
    });
  }

  if (type.includes('shape')) {
    return buildTypes({
      prop,
      type: 'shape',
      isRequired,
      shapeTypes: []
    });
  }

  return buildTypes({
    prop,
    type: cleanType(type),
    isRequired
  });
}

const getContentPropTypes = (fileContent) =>
  fileContent
    .split('propTypes')[1]
    .split('};')[0]
    .split('\n')
    .map(clean)
    .filter(Boolean);

const buildShapeTypes = ({ props, propType }) => (resultPropType) => {
  const lastProp = getLastItem(props);

  if (resultPropType.type === 'shape') {
    if (resultPropType.prop === lastProp) {
      resultPropType.shapeTypes.push(propType);
      return;
    }

    return resultPropType.shapeTypes.forEach(buildShapeTypes({ props, propType }));
  }
};

const buildPropTypesStructure = ({ generatedPropTypes, props }) => (propType) => {
  if (propType.type === 'shape') {
    if (isEmpty(props)) {
      generatedPropTypes.push(propType);
      props.push(propType.prop);
      return;
    }

    generatedPropTypes.forEach(buildShapeTypes({ props, propType }));
    props.push(propType.prop);
    return;
  }

  if (propType.type === 'end') {
    props.pop();
    return;
  }

  if (isEmpty(props)) {
    generatedPropTypes.push(propType);
    return;
  }

  generatedPropTypes.forEach(buildShapeTypes({ props, propType }));
}

const generateComponentPropTypes = (fileContent) => {
  const propTypes = getContentPropTypes(fileContent);
  const namedPropTypes = propTypes.map(buildNamedPropTypes);
  const props = [];
  const generatedPropTypes = [];

  namedPropTypes.forEach(buildPropTypesStructure({ generatedPropTypes, props }));

  return generatedPropTypes;
};

export const getComponentPropTypes = async (filePath) => {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    return generateComponentPropTypes(fileContent);
  } catch (error) {
    const errorMessage = `Error: ${error}`;
    console.log(errorMessage);
    return errorMessage;
  }
}
