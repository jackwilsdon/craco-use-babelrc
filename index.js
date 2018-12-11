const { getLoaders, loaderByName } = require('@craco/craco');

// The path to the babel transform for Jest.
const BABEL_TRANSFORM_PATH = require.resolve('./jestBabelTransform');

// A list of all of the known transform keys from different CRA versions.
const BABEL_TRANSFORM_KEYS = [
  "^.+\\.(js|jsx)$",
  "^.+\\.(js|jsx|ts|tsx)$",
];

module.exports = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    // Search for all instances of babel-loader.
    const { hasFoundAny, matches } = getLoaders(
      webpackConfig,
      loaderByName('babel-loader'),
    );

    // If we can't find the loader then throw an error.
    if (!hasFoundAny) {
      throw new Error('could not find babel-loader');
    }

    // Loop through each match, enabling babelrc and clearing any presets.
    matches.forEach(({ loader }) => {
      if (!loader.options) {
        loader.options = {};
      }

      loader.options.babelrc = true;
      delete loader.options.presets;
    });

    return webpackConfig;
  },
  overrideJestConfig: ({ jestConfig }) => {
    // Replace any keys we know about with our custom transform.
    BABEL_TRANSFORM_KEYS
      .filter(key => jestConfig.transform[key])
      .forEach(key => jestConfig.transform[key] = BABEL_TRANSFORM_PATH);

    return jestConfig;
  },
};
