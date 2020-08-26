# Lazy Cypress

Automate Cypress integration test in your React app.

This project was inspired by [Akira Matsuda's heavens_door](https://github.com/amatsuda/heavens_door).

## Install

Using yarn:

```bash
$ yarn add @laziness/lazy-cypress -D
```

Using npm:

```bash
$ npm install @laziness/lazy-cypress --save-dev
```

## Usage

Import the LazyCypress component in your page

```jsx
import { LazyCypress } from "@laziness/lazy-cypress";
```

And add the component into the page

```jsx
<LazyCypress />
```

Now you're ready to start recording and generating cypress tests for your pages.

## Demo

![Lazy Cypress Demo](https://github.com/leandrotk/lazy-cypress/blob/master/assets/lazy-cypress.gif)
