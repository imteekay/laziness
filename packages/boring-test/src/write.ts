import { promises as fs } from 'fs';
import { dirname } from 'path';

import { FilePath, WriteProps } from './types';
import {
  getLastElement,
  getFirstElement,
  getSecondElement,
  excludeLast,
} from './utils';

const TESTS = 'tests';
const TEST = 'test';

export const getTestFileName = (fileName: FilePath): string => {
  const fileNameList = fileName.split('.');
  const componentName = getFirstElement(fileNameList);
  const fileExtension = getSecondElement(fileNameList);

  return [componentName, TEST, fileExtension].join('.');
};

export const getTestPath = (filePath: FilePath): string => {
  const fileList = filePath.split('/');
  const fileName = getLastElement(fileList);
  const testFileName = getTestFileName(fileName);
  const folders = excludeLast(fileList);

  return [...folders, TESTS, testFileName].join('/');
};

export const writeNewTest = async ({
  filePath,
  newTestContent,
}: WriteProps) => {
  const newTestPath = getTestPath(filePath);

  try {
    await fs.mkdir(dirname(newTestPath), { recursive: true });
  } catch (error) {
    console.log(`Error on test file creation: ${error}`);
    return;
  }

  try {
    await fs.writeFile(newTestPath, newTestContent);
    console.log('Created! 😎');
  } catch (error) {
    console.log(`Error occurred: ${error}`);
  }
};
