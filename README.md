# craco-use-babelrc

A [craco] plugin that enables `.babelrc` in [create-react-app] 2.

## Why?

As it turns out, it's not quite as straight-forward as just setting
`babel.loaderOptions.babelrc` to `true` to enable `.babelrc` support — you also
have to take into account the following;

 * Enabling this option does not clear the existing `react-app` preset added by
   create-react-app
 * Jest does not use this option, instead requiring a custom transform

This plugin provides `.babelrc` support for both normal builds and Jest tests,
whilst clearing any presets which may be added by create-react-app.

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
