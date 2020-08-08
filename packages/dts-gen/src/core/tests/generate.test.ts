import { generate } from '../generate';
import { simpleSourceCode, expectedSimpleTypes } from './simpleMock';
import { complexSourceCode, expectedComplexTypes } from './complexMock';

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
