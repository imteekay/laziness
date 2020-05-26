import { getComponentPropTypes } from '../getComponentPropTypes';
import { generatedPropTypes } from './mocks/generatedPropTypes';

describe('getComponentPropTypes', () => {
  it('generates proper prop types from file', async () => {
    const filePath = 'mocks/TestComponent.js';

    const result = await getComponentPropTypes(filePath);

    expect(result).toEqual(generatedPropTypes);
  });
});
