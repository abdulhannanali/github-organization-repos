const webpack = require('webpack');
const Merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const SriPlugin = require('webpack-subresource-integrity');

const CommonConfig = require('./webpack.common');

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    crossOriginLoading: 'anonymous',
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true,
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      sourceMap: true,
      mangle: {
        screw_ie8: true,
        keep_fnames: false,
      },
      comments: false,
    }),
    new WebpackChunkHash({ algorithm: 'sha512WithRSAEncryption' }),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true,
    }),
    new SriPlugin({
      hashFuncNames: ['sha256', 'sha384'],
      enabled: true,
    }),
  ],
});