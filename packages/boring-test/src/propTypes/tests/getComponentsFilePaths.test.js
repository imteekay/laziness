import { getComponentsFilePaths } from '../getComponentsFilePaths';

describe('getComponentsFilePaths', () => {
  it('generates proper path from component file', async () => {
    const filePath = 'mocks/Component.js';

    const paths = await getComponentsFilePaths(filePath);

    expect(paths).toMatchObject({
      OtherComponent: "./OtherComponent",
      TestComponent: "./TestComponent"
    })
  });
});
