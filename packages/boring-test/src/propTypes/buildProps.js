import { typeToValue } from './typeValueGenerators';

export const buildProps = (props, propTypes = {}, shapeProp) => {
  if (props.length === 0) {
    return propTypes;
  }

  const prop = props[0];
  const lastPropIndex = props.length;
  const rest = props.slice(1, lastPropIndex);

  if (prop.type === 'shape') {
    const shapeProps = buildProps(
      prop.shapeTypes,
      propTypes[prop],
      prop.prop,
    );

    const newPropTypes = {
      ...propTypes,
      [prop.prop]: shapeProps
    };

    return buildProps(
      rest,
      newPropTypes
    );
  }

  if (shapeProp) {
    const lastShapeTypesIndex = props.length;
    const shapeTypesRest = props.slice(1, lastShapeTypesIndex);
    const newPropTypes = {
      ...propTypes,
      [prop.prop]: typeToValue[prop.type]
    };

    return buildProps(
      shapeTypesRest,
      newPropTypes,
      shapeProp,
    );
  }

  const newPropTypes = {
    ...propTypes,
    [prop.prop]: typeToValue[prop.type]
  }

  return buildProps(
    rest,
    newPropTypes
  );
}
