import React, { Fragment } from 'react';
import {
  start,
  clean,
  copy,
  addFormSubmitListener,
} from '@laziness/lazy-cypress-api';

export const LazyCypress = () => {
  addFormSubmitListener();

  return (
    <Fragment>
      <button id="cypress-start" onClick={start}>
        <span role="img" aria-label="start recording">
          ⏺
        </span>
      </button>

      <button id="cypress-clean" onClick={clean}>
        <span role="img" aria-label="clean recording">
          ⏹
        </span>
      </button>

      <button id="cypress-copy" onClick={copy}>
        <span role="img" aria-label="copy recording">
          📋
        </span>
      </button>
    </Fragment>
  );
};
