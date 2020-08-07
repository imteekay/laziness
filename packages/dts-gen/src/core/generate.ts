import { parse } from 'react-docgen';
import { build } from './builders';

export async function generate(sourceCode: string) {
  const componentAST = parse(sourceCode);
  const { result, allShapes } = build(componentAST);
  console.log(result);
  console.log(allShapes);
}
