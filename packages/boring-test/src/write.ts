import {
  getLastElement,
  getFirstElement,
  getSecondElement,
  excludeLast
} from './utils';

const TESTS = "tests";
const TEST = "test";

export const templateCreationCallback = (file) => (e) => {
  if (e) throw e;
  console.log(`Created ${file} template! 😎`);
};

export const testCreationCallback = (e) => {
  if (e) throw e;
  console.log("Created! 😎");
};

export const getTestFileName = (fileName) => {
  const fileNameList = fileName.split(".");
  const componentName = getFirstElement(fileNameList);
  const fileExtension = getSecondElement(fileNameList);

  return [componentName, TEST, fileExtension].join(".");
};

export const getTestPath = (filePath) => {
  const fileList = filePath.split("/");
  const fileName = getLastElement(fileList);
  const testFileName = getTestFileName(fileName);
  const folders = excludeLast(fileList);

  return [...folders, TESTS, testFileName].join("/");
};
