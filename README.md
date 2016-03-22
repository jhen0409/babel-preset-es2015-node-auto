# babel-preset-es2015-node-auto

> Auto select babel-preset-es2015-node version via node version

## Included

* [babel-preset-es2015-node4](https://github.com/jbach/babel-preset-es2015-node4)
* [babel-preset-es2015-node5](https://github.com/alekseykulikov/babel-preset-es2015-node5)

## Install

```sh
$ npm install --save-dev babel-preset-es2015-node-auto
```

## Usage

### Via `.babelrc` (recommended)

**.babelrc**

```json
{
  "presets": ["es2015-node-auto"]
}
```

### Via CLI

```sh
$ babel script.js --preset es2015-node-auto
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  presets: ['es2015-node-auto'],
})
```
