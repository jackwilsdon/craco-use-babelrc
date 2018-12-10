const { getLoaders, loaderByName } = require('@craco/craco');

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
};
