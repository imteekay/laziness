import { promises as fs } from 'fs';
import { dirname, resolve } from 'path';

import { TemplateType, FilePath } from './types';
import { buildNewTestContent } from './build';
import { getTemplateFile, getComponentName } from './read';
import { writeNewTest } from './write';

export const generateTemplates = async () => {
  const templatesFiles = resolve(__dirname, '../templates');
  const templates = await fs.readdir(templatesFiles);

  templates.forEach(async (file: string) => {
    const templatePath = resolve(__dirname, `../templates/${file}`);
    const content = await fs.readFile(templatePath, 'utf8');

    try {
      await fs.mkdir(dirname(`templates/${file}`), { recursive: true });
    } catch (error) {
      console.log(`Error on template file creation: ${error}`);
      return;
    }

    try {
      await fs.writeFile(`templates/${file}`, content);
      console.log(`Created ${file} template! 😎`);
    } catch (error) {
      console.log(`Error occurred: ${error}`);
    }
  });
};

export const generateTest = async (
  template: TemplateType,
  filePath: FilePath
) => {
  const componentName = getComponentName(filePath);
  const templateFile = getTemplateFile(template);

  const templatePath: string = resolve(__dirname, `../${templateFile}`);
  const content: string = await fs.readFile(templatePath, 'utf8');

  const newTestContent: string = await buildNewTestContent({
    content,
    componentName,
  });

  await writeNewTest({ filePath, newTestContent });
};
