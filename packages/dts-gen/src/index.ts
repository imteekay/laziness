import { promises as fs } from 'fs';
import { resolve } from 'path';
import { parse } from 'react-docgen';

async function readFile() {
  const componentFilePath = resolve(__dirname, 'Sample.js');
  return await fs.readFile(componentFilePath, 'utf8');
}

// type User = {
//   name: string;
//   age: number;
// };

// type SampleProps = {
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

export async function generate() {
  const component = await readFile();
  const componentAST = parse(component);

  for (const [propName, prop] of Object.entries(componentAST.props)) {
    console.log(propName, '-->', prop.type.name);
    console.log(prop);
  }
}
