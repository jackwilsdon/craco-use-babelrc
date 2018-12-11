// We require babel-jest even though it's not in our dependencies, as it should
// be present in CRA.
const { createTransformer } = require('babel-jest');

module.exports = createTransformer({ babelrc: true });
