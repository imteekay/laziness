dts-gen-cli
===========

A CLI to generate TypeScript types from React prop types

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dts-gen-cli.svg)](https://npmjs.org/package/dts-gen-cli)
[![Downloads/week](https://img.shields.io/npm/dw/dts-gen-cli.svg)](https://npmjs.org/package/dts-gen-cli)
[![License](https://img.shields.io/npm/l/dts-gen-cli.svg)](https://github.com/leandrotk/laziness/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dts-gen-cli
$ dts-gen-cli COMMAND
running command...
$ dts-gen-cli (-v|--version|version)
dts-gen-cli/0.0.0 linux-x64 node-v12.16.2
$ dts-gen-cli --help [COMMAND]
USAGE
  $ dts-gen-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dts-gen-cli hello [FILE]`](#dts-gen-cli-hello-file)
* [`dts-gen-cli help [COMMAND]`](#dts-gen-cli-help-command)

## `dts-gen-cli hello [FILE]`

describe the command here

```
USAGE
  $ dts-gen-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ dts-gen-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/leandrotk/laziness/blob/v0.0.0/src/commands/hello.ts)_

## `dts-gen-cli help [COMMAND]`

display help for dts-gen-cli

```
USAGE
  $ dts-gen-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
