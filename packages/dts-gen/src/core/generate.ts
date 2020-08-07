import { parse } from 'react-docgen';
import { capitalize } from '../helpers/capitalize';
import { Result } from '../types/dtsTypes';
import { PropTypes } from '../helpers/propTypeMappers';
import {
  isPropType,
  buildTypeForShape,
  buildProp,
  buildShapeProp,
} from './builders';

export async function generate(sourceCode: string) {
  const componentAST = parse(sourceCode);
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

  console.log(result);
  console.log(allShapes);
}