const merge = require('webpack-merge'); // eslint-disable-line no-undef, import/no-extraneous-dependencies
const path = require('path'); // eslint-disable-line no-unused-vars
const TerserPlugin = require('terser-webpack-plugin'); // eslint-disable-line no-undef, import/no-extraneous-dependencies
const base = require('./base');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'bundle.min.js',
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
});
