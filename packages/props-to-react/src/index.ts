import { Node, Identifier, MemberExpression } from '@babel/types';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';

const code = `
SampleComponent.propTypes = {
  arrayProp: PropTypes.array,
  boolProp: PropTypes.bool.isRequired,
  numberProp: PropTypes.number,
  objectProp: PropTypes.object,
  stringProp: PropTypes.string,
  anyProp: PropTypes.any,
  elementProp: PropTypes.element,
  nodeProp: PropTypes.node,
  arrayOfString: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  oneOfString: PropTypes.oneOf(['foo', 'bar']),
	oneOfStringOrNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	shapeProp: PropTypes.shape({
		foo: PropTypes.number,
		bar: PropTypes.string
  }).isRequired,
  /**
	 * @param {object} value - The param value.
	 */
};
`;

function isIdentifier(node: Node): node is Identifier {
  return node.type === 'Identifier';
}

function isMemberExpression(node: Node): node is MemberExpression {
  return node.type === 'MemberExpression';
}

export function test() {
  const ast = parser.parse(code);

  const result: string[] = [];

  traverse(ast, {
    enter(path) {
      if (
        path.node.type === 'ExpressionStatement' &&
        path.node.expression.type === 'AssignmentExpression' &&
        path.node.expression.right.type === 'ObjectExpression'
      ) {
        path.node.expression.right.properties.forEach(property => {
          if (property.type === 'ObjectProperty') {
            let string = '';

            if (isIdentifier(property.key)) {
              // console.log(property.key.name);
              string += property.key.name;
            }

            if (
              isMemberExpression(property.value) &&
              isIdentifier(property.value.object)
            ) {
              // console.log(property.value.object.name);
              string += property.value.object.name;
            }

            if (
              isMemberExpression(property.value) &&
              isIdentifier(property.value.property)
            ) {
              // console.log(property.value.property.name);
              string += property.value.property.name;
            }

            result.push(string);
          }
        });

        console.log(result);
      }
    },
  });
}
