export const complexSourceCode = `
import React from 'react';
import PropTypes from 'prop-types';

const Sample = () => <div>Hi!</div>;

Sample.propTypes = {
  any: PropTypes.any,
  isVisible: PropTypes.bool.isRequired,
  index: PropTypes.number,
  string: PropTypes.string,
  object: PropTypes.object,
  element: PropTypes.element,
  children: PropTypes.node,
  products: PropTypes.array,
  messages: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  status: PropTypes.oneOf(['active', 'inactive', 'blocked']),
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }),
  nameOrAge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
};

export default Sample;
`;

export const expectedComplexTypes = `type Profile = {
  username: string;
  email: string;
  active: boolean;
  dispatch: () => void;
};

type User = {
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
  onChange: () => void;
  status?: 'active' | 'inactive' | 'blocked';
  profile?: Profile;
  nameOrAge?: string | number;
  user: User;
};`;
