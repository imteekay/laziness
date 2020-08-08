import { PropMapperType } from '../types/dtsTypes';

export const PropMapper: PropMapperType = {
  any: 'any',
  bool: 'boolean',
  number: 'number',
  string: 'string',
  object: 'object',
  element: 'React.ReactElement<any>',
  node: 'React.ReactNode',
  array: 'any[]',
  arrayOf: '[]',
  func: '() => void',
};

export enum PropTypes {
  ArrayOf = 'arrayOf',
  Enum = 'enum',
  Union = 'union',
  Shape = 'shape',
}
