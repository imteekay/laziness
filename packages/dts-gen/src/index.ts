import { promises as fs } from 'fs';
import { resolve } from 'path';
import { parse, Prop } from 'react-docgen';

async function readFile() {
  const componentFilePath = resolve(__dirname, 'Sample.js');
  return await fs.readFile(componentFilePath, 'utf8');
}

// interface User = {
//   name: string;
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
  name: string;
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
  enum: '',
  union: '',
  shape: '',
};

function isPropType(prop: Prop, propType: string) {
  return prop.type.name === propType;
}

function buildProp(prop: Prop) {
  if (isPropType(prop, 'arrayOf')) {
    const propValue = prop.type.value as Prop;
    const propName = prop.type.name;
    return {
      name: PropMapper[propValue.name] + PropMapper[propName],
      required: prop.required,
    };
  }

  return {
    name: PropMapper[prop.type.name] || prop.type.name,
    required: prop.required,
  };
}

export async function generate() {
  const component = await readFile();
  const componentAST = parse(component);
  const result: Result = {};

  for (const [propName, prop] of Object.entries(componentAST.props)) {
    console.log(prop);
    result[propName] = buildProp(prop);
  }

  console.log(result);
}
