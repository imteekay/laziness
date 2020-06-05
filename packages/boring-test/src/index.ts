import minimist from 'minimist';
import { TemplateType, Command } from './types';
import { generateTemplates, generateTest } from './core';
import { Template } from './Template';

const args = minimist(process.argv.slice(2));

const template: TemplateType = args.t || args.template || Template.Default;
const command: Command = args._[0] || args.f || args.file;

const handleGeneration = (command: string, template: string) =>
  command === 'generate-templates'
    ? generateTemplates()
    : generateTest(template, command);

command
  ? handleGeneration(command as string, template)
  : console.log('Add a file as the -f argument');
