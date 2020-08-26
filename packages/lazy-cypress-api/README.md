# Lazy Cypress API

An API to generate Cypress code

Using yarn:

```bash
$ yarn add @laziness/lazy-cypress-api
```

Using npm:

```bash
$ npm install @laziness/lazy-cypress-api
```

## Usage

An example in a React component:

```jsx
export const LazyCypress = () => {
  addFormSubmitListener();

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
```

Call `addFormSubmitListener()` in your page or tool to start listening to the form.

`start()` will start "recording". It writes the beginning of the generated code in the session storage node called `lazyCypress`.

`clean()` always clean up the session storage node called `lazyCypress`.

`copy()` will copy the generated Cypress code in the session storage to the clipboard.
