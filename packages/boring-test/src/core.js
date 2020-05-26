import { promises as fs } from "fs";
import { dirname, resolve } from "path";

import { createNewTest } from './create';

import {
  getTemplateFile,
  getComponentName
} from "./read.js";

import {
  templateCreationCallback,
  testCreationCallback,
  getTestPath
} from "./write.js";

const generateTemplates = async () => {
  const templatesFiles = resolve(__dirname, '../templates');
  const templates = await fs.readdir(templatesFiles);

  templates.forEach(async (file) => {
    const templatePath = resolve(__dirname, `../templates/${file}`);
    const content = await fs.readFile(templatePath, "utf8");

    try {
      await fs.mkdir(dirname(`templates/${file}`), { recursive: true });
    } catch (error) {
      console.log(`Error on template file creation: ${error}`);
      return;
    }

    templateCreationCallback(file)(await fs.writeFile(`templates/${file}`, content));
  });
};

const generateTest = async (template, filePath) => {
  const componentName = getComponentName(filePath);
  const templateFile = getTemplateFile(template);

  const templatePath = resolve(__dirname, `../${templateFile}`);
  const content = await fs.readFile(templatePath, "utf8");

  const newTest = await createNewTest({
    content,
    componentName,
    filePath,
    template
  });

  const newTestPath = getTestPath(filePath);

  try {
    await fs.mkdir(dirname(newTestPath), { recursive: true });
  } catch (error) {
    console.log(`Error on test file creation: ${error}`);
    return;
  }

  testCreationCallback(await fs.writeFile(newTestPath, newTest));
};

export { generateTemplates, generateTest };
