import { promises as fs } from 'fs';
import { resolve } from 'path';
import { parse } from '@typescript-eslint/typescript-estree';

const start = async () => {
  const sourcePath = resolve(__dirname, '../examples/sum.ts');
  const source = await fs.readFile(sourcePath, 'utf8');
  const program = parse(source);
  console.log(program);
};

start();
