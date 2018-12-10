# craco-use-babelrc

A [craco] plugin that enables `.babelrc` in [create-react-app] 2.

## Why?

You might think you could just do this to enable `.babelrc` support;

```JavaScript
// craco.config.js

module.exports = {
  babel: {
    loaderOptions: {
      babelrc: true,
    },
  },
};
```

However this actually still leaves the `react-app` babel preset enabled! If
you're fine with this then you don't need this plugin and can just enable
`.babelrc` using the configuration above.

This plugin also clears the preset list for the loader.

## Installation

Make sure you have [craco] installed before continuing. You can find the
official installation instructions [here][craco-install].

You can then install `craco-use-babelrc` using your package manager of choice;

```Shell
npm install --save @jackwilsdon/craco-use-babelrc
```

```Shell
yarn add @jackwilsdon/craco-use-babelrc
```

## Usage

Simply enable the plugin in your `craco.config.js`, there's nothing to
configure!

```JavaScript
// craco.config.js
const BabelRcPlugin = require('@jackwilsdon/craco-use-babelrc');

module.exports = {
  plugins: [
    { plugin: BabelRcPlugin },
  ],
};
```

[craco]: https://github.com/sharegate/craco
[craco-install]: https://github.com/sharegate/craco/tree/master/packages/craco#installation
[create-react-app]: https://github.com/facebook/create-react-app
