import React from 'react';
import PropTypes from 'prop-types';
import { TestComponent } from './TestComponent';
import { OtherComponent } from './OtherComponent';

export class Component extends React.PureComponent {
  render() {
    const address = { city: 'string' };
    const region = { name: 'string' };
    const houseInfo = {
      type: 'string',
      bedrooms: 2,
      region: region,
      address: address,
      displayId: 'string',
    };
    const breadcrumbInfo = {
      city: 'string',
      displayId: 'string',
      regionName: 'string',
      state: 'string',
      street: 'string',
    };

    return (
      <TestComponent
        name="string"
        isReal={true}
        bedrooms={2}
        width="xs"
        breadcrumbInfo={breadcrumbInfo}
        houseInfo={houseInfo}
      >
        <OtherComponent />
      </TestComponent>
    );
  }
}

Component.propTypes = {
  name: PropTypes.string,
};

export default Component;
