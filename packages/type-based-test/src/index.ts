import { promises as fs } from 'fs';
import { resolve } from 'path';
import traverse from '@babel/traverse';
import parser from '@babel/parser';

const start = async () => {
  const sourcePath = resolve(__dirname, '../examples/sum.ts');
  const source = await fs.readFile(sourcePath, 'utf8');
  const ast = parser.parse(source, {
    sourceType: 'module',
    plugins: ['typescript'],
  });

  traverse(ast, {
    enter(path) {
      console.log(path);
    },
  });
};

start();
