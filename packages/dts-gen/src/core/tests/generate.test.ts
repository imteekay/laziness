import { generate } from '../generate';
import sourceCode from './mock';

const expectedTypes = `type User = {
  name?: string;
  age?: number;
};

type Sample = {
  any?: any;
  isVisible: boolean;
  index?: number;
  string?: string;
  object?: object;
  element?: React.ReactElement<any>;
  children?: React.ReactNode;
  products?: any[];
  messages?: string[];
  onChange: (event: object) => void;
  status?: 'active' | 'inactive' | 'blocked';
  nameOrAge?: string | number;
  user: User;
};`;

describe('generate', () => {
  it('returns the correct types', async () => {
    const types = await generate(sourceCode);
    expect(types).toEqual(expectedTypes);
  });
});
