export const sourceCode = `import React from 'react';
import PropTypes from 'prop-types';
import StyledTodoItem from './styled';

const TodoItem = ({ id, text, onDelete }) => (
  <StyledTodoItem>
    <span>{text}</span>
    <button onClick={() => onDelete(id)}>X</button>
  </StyledTodoItem>
);

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  text: 'Hello!',
}

export default TodoItem;`;

export const expectedComponent = `import React from 'react';
import StyledTodoItem from './styled';

type TodoItemProps = {
  id: number;
  text: string;
  onDelete: () => any;
}

const TodoItem = ({ id, text = 'Hello!', onDelete }: Props): JSX.Element => (
  <StyledTodoItem>
    <span>{text}</span>
    <button onClick={() => onDelete(id)}>X</button>
  </StyledTodoItem>
);

export default TodoItem;`;
