# Boring Test

Boring Test is a CLI to automate react (boring) tests.

## Getting started

You can use Boring Test in two different ways:

Installing the CLI globally with NPM

```bash
$ npm i -g boring-test
```

Or running the CLI with NPX

```bash
$ npx boring-test -f the/path/to/the/file.js -t css
```

## Usage

The Boring Test CLI supports two ways to generate a testing file:

#### With a file and a template argument

```bash
$ npx boring-test src/file.js -t css
```

#### With two arguments:

- `f` stands for `file`
- `t` stands for `template`

The `file` argument expects the component file to be tested.

The `template` options are: `css`, `ui`, and `default`. The [`css` template](https://github.com/leandrotk/boring-test/blob/master/templates/css.js) will generate a test for styled components. The [`ui` template](https://github.com/leandrotk/boring-test/blob/master/templates/ui.js) will generate a test for the component using [Enzyme](https://www.npmjs.com/package/enzyme). If you do not pass the template, it will generate an empty test file.

## Examples

#### When passing the file not as an argument

```bash
$ npx boring-test src/file.js -t css
```

It creates the test file in the `src/tests/file.test.js` path with the [`css` template](https://github.com/leandrotk/boring-test/blob/master/templates/css.js).

#### When passing the file and template

```bash
$ npx boring-test -f src/file.js -t css
```

It creates the test file in the `src/tests/file.test.js` path with the [`css` template](https://github.com/leandrotk/boring-test/blob/master/templates/css.js).

#### When passing the file only

```bash
$ npx boring-test -f src/file.js
```

With no template, it generates the default test file. Today it create just an empty file in the `src/tests/file.test.js` path.

#### When not passing the file

```bash
$ npx boring-test -t css
```

With no file, it can't generate any test template. so it just sends a message to `Add a file as the -f argument`.

## Generate templates

Generate the templates in your project.

```bash
$ npx boring-test generate-templates
```

Now you have the [default](https://github.com/leandrotk/boring-test/blob/master/templates/default.js) and the [css](https://github.com/leandrotk/boring-test/blob/master/templates/css.js) templates in a `templates` folder inside your project.

## Demo

![Boring Test Demo](https://github.com/leandrotk/boring-test/blob/master/assets/boring-test-demo.gif)

## Contributing

Boring Test is always open to accept contributors.

### Reporting Issues

When creating an issue, be clear in the title and description with relevant information.

### Project

Take a look at the [project](https://github.com/leandrotk/boring-test/projects/1) for future features and bug fixes.

### Sending PRs

Before sending a new Pull Request, take a look on existing Pull Requests and the [project](https://github.com/leandrotk/boring-test/projects/1) for current work in development.

## License

Boring Test is [MIT licensed](https://github.com/leandrotk/boring-test/blob/master/LICENSE).
