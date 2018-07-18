const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const path = require('path');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  serve: {
    content: path.resolve(__dirname, 'dist'),
  },
});
