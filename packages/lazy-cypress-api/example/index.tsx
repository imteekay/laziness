import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form } from './Form';
import { LazyCypress } from './LazyCypress';

export const App = () => (
  <React.Fragment>
    <LazyCypress />
    <Form />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
