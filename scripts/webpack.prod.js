const webpack = require('webpack');
const Merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const SriPlugin = require('webpack-subresource-integrity');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const CommonConfig = require('./webpack.common');

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    crossOriginLoading: 'anonymous',
    publicPath: '/github-organization-repos/',
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
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'BASE_NAME': JSON.stringify('/github-organization-repos'),
      },
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
    new WebpackChunkHash({ algorithm: 'sha256' }),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true,
    }),
    new SriPlugin({
      hashFuncNames: ['sha256'],
      enabled: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'chunk',
      minChunks: 2,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'parsed',
      reportFilename: 'report.html',
      logLevel: 'info',
    }),
  ],

  // Having Performant build is important and this allows us to check if our build is
  // performant or not
  performance: {
    hints: 'error',
    assetFilter: (aF) => aF.endsWith('.js'),
  },
});