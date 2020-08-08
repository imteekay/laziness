export const simpleSourceCode = `
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
  nameOrAge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
};

export default Sample;
`;

export const expectedSimpleTypes = `type User = {
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
  nameOrAge?: string | number;
  user: User;
};`;
