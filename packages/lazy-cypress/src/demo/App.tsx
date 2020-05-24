import React from 'react';
import { Form } from './Form';
import { LazyCypress } from '../lib/LazyCypress';

export const App = () => (
  <div className="App">
    <LazyCypress />
    <Form />
  </div>
);

export default App;
