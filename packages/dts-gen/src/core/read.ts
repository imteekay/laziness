import { promises as fs } from 'fs';
import { resolve } from 'path';

export async function readFile() {
  const componentFilePath = resolve(__dirname, 'Sample.js');
  return await fs.readFile(componentFilePath, 'utf8');
}
