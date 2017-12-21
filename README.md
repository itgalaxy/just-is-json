# just-is-json

[![NPM version](https://img.shields.io/npm/v/just-is-json.svg)](https://www.npmjs.org/package/just-is-json)
[![Travis Build Status](https://img.shields.io/travis/itgalaxy/just-is-json/master.svg?label=build)](https://travis-ci.org/itgalaxy/just-is-json)
[![dependencies Status](https://david-dm.org/itgalaxy/just-is-json/status.svg)](https://david-dm.org/itgalaxy/just-is-json)
[![devDependencies Status](https://david-dm.org/itgalaxy/just-is-json/dev-status.svg)](https://david-dm.org/itgalaxy/just-is-json?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/itgalaxy/just-is-json.svg)](https://greenkeeper.io)

Just check if a string is a valid JSON string

## Installation

```shell
npm i just-is-json
```

## API

```js
const isJSON = require("just-is-json");

isJSON('{"foo":"bar"}'); // true
isJSON("1"); // true
isJSON("null"); // true
isJSON("[1,2,3]"); // true
isJSON(1); // true
isJSON(null); // true
isJSON("true"); // true
isJSON(true); // true

isJSON("not-json"); // false
isJSON([1, 2, 3]); // false
isJSON({ foo: "bar" }); // false
isJSON('{"foo":"bar}'); // false
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
