import { promises as fs } from 'fs';
import { resolve } from 'path';
import { parse, Prop, ValueArray, Props } from 'react-docgen';

async function readFile() {
  const componentFilePath = resolve(__dirname, 'Sample.js');
  return await fs.readFile(componentFilePath, 'utf8');
}

// interface User = {
//   type: string;
//   age: number;
// };

// interface SampleProps = {
//   any?: any;
//   isVisible: boolean;
//   index?: number;
//   message?: string;
//   object?: object;
//   element?: React.ReactElement<any>;
//   children?: React.ReactNode;
//   products?: any[];
//   messages?: string[];
//   onChange: (event: object) => void;
//   status?: 'active' | 'inactive' | 'blocked';
//   nameOrAge?: string | number;
//   user: User,
// };

type PropAttrs = {
  type: string;
  required: boolean;
};

type Result = {
  [key: string]: PropAttrs;
};

type PropMapperType = {
  [key: string]: string;
};

const PropMapper: PropMapperType = {
  any: 'any',
  bool: 'boolean',
  number: 'number',
  string: 'string',
  object: 'object',
  element: 'React.ReactElement<any>',
  node: 'React.ReactNode',
  array: 'any[]',
  arrayOf: '[]',
  func: '(event: object) => void',
  shape: '',
};

enum PropTypes {
  ArrayOf = 'arrayOf',
  Enum = 'enum',
  Union = 'union',
  Shape = 'shape',
}

function isPropType(prop: Prop, propType: string) {
  return prop.type.name === propType;
}

function buildArrayOfType(prop: Prop): PropAttrs {
  const propValue = prop.type.value as Prop;
  const propName = prop.type.name;
  return {
    type: PropMapper[propValue.name] + PropMapper[propName],
    required: prop.required,
  };
}

function buildOneOf(prop: Prop): PropAttrs {
  const value = prop.type.value as ValueArray;
  const values = value.map(oneOf => oneOf.value).join(' | ');
  return {
    type: values,
    required: prop.required,
  };
}

function buildOneOfType(prop: Prop): PropAttrs {
  const value = prop.type.value as ValueArray;
  const values = value.map(oneOf => PropMapper[oneOf.name]).join(' | ');
  return {
    type: values,
    required: prop.required,
  };
}

function buildProp(prop: Prop): PropAttrs {
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

export async function generate() {
  const component = await readFile();
  const componentAST = parse(component);
  const result: Result = {};
  const allShapes: { [key: string]: Result } = {};

  for (const [propName, prop] of Object.entries(componentAST.props)) {
    if (isPropType(prop, PropTypes.Shape)) {
      const shapeResult: Result = {};
      const props = prop.type.value as Props;

      for (const [propName, prop] of Object.entries(props)) {
        shapeResult[propName] = {
          type: PropMapper[prop.name],
          required: prop.required,
        };
      }

      allShapes[propName] = shapeResult;
      result[propName] = {
        type: propName,
        required: prop.required,
      };
    } else {
      result[propName] = buildProp(prop);
    }
  }

  console.log(result);
  console.log(allShapes);
}
