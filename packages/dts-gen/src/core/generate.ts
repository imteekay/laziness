import { parse } from 'react-docgen';
import { capitalize } from '../helpers/capitalize';
import { Result } from '../types/dtsTypes';
import { PropTypes } from '../helpers/propTypeMappers';
import { readFile } from './read';
import { isPropType, buildTypeForShape, buildProp } from './builders';

export async function generate() {
  const component = await readFile();
  const componentAST = parse(component);
  const result: Result = {};
  const allShapes: { [key: string]: Result } = {};

  for (const [propName, prop] of Object.entries(componentAST.props)) {
    if (isPropType(prop, PropTypes.Shape)) {
      const shapeResult = buildTypeForShape(prop);
      const typeName = capitalize(propName);

      allShapes[typeName] = shapeResult;

      result[propName] = {
        type: typeName,
        required: prop.required,
      };
    } else {
      result[propName] = buildProp(prop);
    }
  }

  console.log(result);
  console.log(allShapes);
}
