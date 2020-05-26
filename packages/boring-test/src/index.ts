import minimist from "minimist";
import { generateTemplates, generateTest } from "./core";

const args = minimist(process.argv.slice(2));

const template = args.t || args.template;
const command = args._[0] || args.f || args.file;

const handleGeneration = () =>
  command === 'generate-templates' ?
    generateTemplates() :
    generateTest(template, command);

command ?
  handleGeneration() :
  console.log("Add a file as the -f argument");
