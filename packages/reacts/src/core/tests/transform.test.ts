import { transform } from '../transform';
import { sourceCode, expectedComponent } from './mocks';

describe('transform', () => {
  it('add all the types for the React component', () => {
    expect(transform(sourceCode)).toEqual(expectedComponent);
  });
});
