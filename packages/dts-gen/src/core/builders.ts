import { ComponentInfo, Prop, ValueArray, Props } from 'react-docgen';
import { capitalize } from '../helpers/capitalize';
import { PropAttrs, Result } from '../types/dtsTypes';
import { PropMapper, PropTypes } from '../helpers/propTypeMappers';

export function isPropType(prop: Prop, propType: string) {
  return prop.type.name === propType;
}

export function buildArrayOfType(prop: Prop): PropAttrs {
  const propValue = prop.type.value as Prop;
  const propName = prop.type.name;
  return {
    type: PropMapper[propValue.name] + PropMapper[propName],
    required: prop.required,
  };
}

export function buildOneOf(prop: Prop): PropAttrs {
  const value = prop.type.value as ValueArray;
  const values = value.map(oneOf => oneOf.value).join(' | ');
  return {
    type: values,
    required: prop.required,
  };
}

export function buildOneOfType(prop: Prop): PropAttrs {
  const value = prop.type.value as ValueArray;
  const values = value.map(oneOf => PropMapper[oneOf.name]).join(' | ');
  return {
    type: values,
    required: prop.required,
  };
}

export function buildProp(prop: Prop): PropAttrs {
  if (isPropType(prop, PropTypes.ArrayOf)) {
    return buildArrayOfType(prop);
  }

  if (isPropType(prop, PropTypes.Enum)) {
    return buildOneOf(prop);
  }

  if (isPropType(prop, PropTypes.Union)) {
    return buildOneOfType(prop);
  }

  return {
    type: PropMapper[prop.type.name] || prop.type.name,
    required: prop.required,
  };
}

export function buildTypeForShape(prop: Prop) {
  const shapeResult: Result = {};
  const props = prop.type.value as Props;

  for (const [propName, prop] of Object.entries(props)) {
    shapeResult[propName] = {
      type: PropMapper[prop.name],
      required: prop.required,
    };
  }

  return shapeResult;
}

export function buildShapeProp(prop: Prop, typeName: string) {
  return {
    type: typeName,
    required: prop.required,
  };
}

export function build(componentAST: ComponentInfo) {
  const result: Result = {};
  const allShapes: { [key: string]: Result } = {};

  for (const [propName, prop] of Object.entries(componentAST.props)) {
    if (isPropType(prop, PropTypes.Shape)) {
      const shapeResult = buildTypeForShape(prop);
      const typeName = capitalize(propName);
      allShapes[typeName] = shapeResult;
      result[propName] = buildShapeProp(prop, typeName);
    } else {
      result[propName] = buildProp(prop);
    }
  }

  return { result, allShapes };
}
