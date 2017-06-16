const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolvePath = require('./utils');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: './src/vendor.js',
  },
  
  output: {
    path: resolvePath('dist'),
    filename: '[name].[chunkhash].js',
    sourceMapFilename: '[name].[chunkhash].map',
  },

  target: 'web',

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: process.env.NODE_ENV === 'production',
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|examples)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              ['env', { 
                modules: false, 
              }],
            ],
            plugins: ['transform-class-properties'],
          },
        },
      },
      {
        test: /\.(png|gif|jpg)/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 9000,
            },
          },
        ],
      },
    ],
    
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'].reverse(),
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      title: 'Github Organization List', 
      favicon: './public/favicon.ico',
      template: './public/index.html',
    }),
  ],
};