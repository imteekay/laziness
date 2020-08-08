import { simpleSourceCode, expectedSimpleTypes } from './mocks/simpleMock';
import { complexSourceCode, expectedComplexTypes } from './mocks/complexMock';
import {
  componentTemplate,
  customTypeTemplates,
  expectedJoinedTemplates,
} from './mocks/templateMocks';

import {
  generate,
  joinTemplates,
  generateAttributeType,
  generateEndOfTemplate,
  generateTypeNameTemplate,
} from '../generate';

describe('generate', () => {
  it('returns the correct types for simple source code', async () => {
    const types = await generate(simpleSourceCode);
    expect(types).toEqual(expectedSimpleTypes);
  });

  it('returns the correct types for multiple shapes', async () => {
    const types = await generate(complexSourceCode);
    expect(types).toEqual(expectedComplexTypes);
  });
});

describe('generateEndOfTemplate', () => {
  it('returns the end of the template', () => {
    expect(generateEndOfTemplate()).toEqual('};');
  });
});

describe('generateTypeNameTemplate', () => {
  it('returns the template for the User type', () => {
    const typeName = 'User';
    expect(generateTypeNameTemplate(typeName)).toEqual(`type ${typeName} = {`);
  });

  it('returns the template for the Profile type', () => {
    const typeName = 'Profile';
    expect(generateTypeNameTemplate(typeName)).toEqual(`type ${typeName} = {`);
  });
});

describe('generateAttributeType', () => {
  it('returns the template for a required name field', () => {
    const prop = 'name';
    const type = 'string';

    expect(generateAttributeType(prop, { type, required: true })).toEqual(
      `  ${prop}: ${type};`
    );
  });

  it('returns the template for an optional email field', () => {
    const prop = 'email';
    const type = 'string';

    expect(generateAttributeType(prop, { type, required: false })).toEqual(
      `  ${prop}?: ${type};`
    );
  });
});

describe('joinTemplates', () => {
  it('returns the templates together', () => {
    expect(joinTemplates(componentTemplate, customTypeTemplates)).toEqual(
      expectedJoinedTemplates
    );
  });
});
