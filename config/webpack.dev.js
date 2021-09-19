const { merge } = require('webpack-merge');
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
  // devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 3000,
  },
  plugins: [new DashboardPlugin()],
});
