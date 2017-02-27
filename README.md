# babel-plugin-default-identifier

> A [Babel](https://github.com/babel/babel) plugin to wrap the "default" identifier with apostrophes

This plugin is useful for legacy browsers or tools that treat "default" identifier as a keyword

## Example

**Input** `src/simple/actual.js`

```js
var x = {
  default: 0
};
```

**Output** `dist/simple/actual.js`

```js
'use strict';

var x = {
  'default': 0
};
```

## Getting started

### Installation

```sh
$ npm install babel-plugin-default-identifier
```

### Usage

#### Via `.babelrc` (Recommended)

```json
{
  "plugins": ["default-identifier"]
}
```

## Running tests

Run mocha tests with `npm test`

## License

MIT
