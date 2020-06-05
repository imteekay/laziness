import React from 'react';
import { shallow } from 'enzyme';

import { ${componentToBeTested} } from '../${componentToBeTested}';

describe('${componentToBeTested}', () => {
  let renderedComponent;

  const defaultProps = {
    someProp: 'someProp',
  };

  const render = (props) => shallow(<${componentToBeTested} {...defaultProps} {...props} />);

  beforeAll(() => {
    renderedComponent = render();
  });

  ${innerComponents}
});
