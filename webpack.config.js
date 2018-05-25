// @flow

const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

const developmentPlugins = [
  new webpack.HotModuleReplacementPlugin(),
];

const productionPlugins = [];

const productionEntries = [
  './src/index.js',
];

const developmentEntries = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:1222',
  'webpack/hot/only-dev-server',
  path.resolve(__dirname, 'examples/entry.jsx'),
];

module.exports = {
  devtool: NODE_ENV !== 'production' ? 'source-map' : false,
  mode: NODE_ENV === 'production' ? NODE_ENV : 'development',
  entry: [
    ...(NODE_ENV !== 'production' ? developmentEntries : productionEntries),
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: '_',
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    library: 'skeleton-placeholder-react',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    ...(NODE_ENV !== 'production' ? developmentPlugins : productionPlugins),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    hot: true,
    contentBase: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'static'),
    ],
    disableHostCheck: true,
    publicPath: '/',
    compress: true,
    port: 1222,
    filename: 'bundle.js',
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [
        'babel-loader',
      ],
      exclude: /node_modules/,
      include: [
        __dirname,
      ],
    }],
  },
};
