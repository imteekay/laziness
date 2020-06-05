import { getTemplateFile, getComponentName } from '../read';

describe('getTemplateFile', () => {
  describe('with no template file', () => {
    it('returns no template', () => {
      expect(getTemplateFile('default')).toEqual('templates/default.ts');
    });
  });

  describe('with css template', () => {
    it('returns the correct template path', () => {
      const template = 'css';
      expect(getTemplateFile(template)).toEqual('templates/css.ts');
    });
  });
});

describe('getComponentName', () => {
  it('returns the component name from the file', () => {
    const filePath = 'app/containers/Component.ts';
    expect(getComponentName(filePath)).toEqual('Component');
  });
});
