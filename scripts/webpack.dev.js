const webpack = require('webpack');
const { NamedModulesPlugin } = webpack;

const CommonConfig = require('./webpack.common');
const Merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');

const { resolvePath } = require('./utils');

module.exports = Merge(CommonConfig, {
  devServer: {
    compress: true,
    port: 9000,
    contentBase: resolvePath('dist'),
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  output: {
    // Hash is required for JavaScript files using Hot Module Replacement
    publicPath: '/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].map',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    new DashboardPlugin(),
  ],

  devtool: 'inline-source-map',
});
