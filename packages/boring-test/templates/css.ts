import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';

import ${componentToBeTested} from '../${componentToBeTested}';

describe('${componentToBeTested}', () => {
  const defaultProps = {
    propHere: 'propvValue'
  };

  const render = (props) => mount(<${componentToBeTested} {...defaultProps} {...props} />);

  describe('when prop has some value', () => {
    it('has the style rule', () => {
      const component = render();
      const cssStyle = 'css-style';
      const cssValue = 'css-value';

      expect(component).toHaveStyleRule(cssStyle, cssValue);
    });
  });
});
