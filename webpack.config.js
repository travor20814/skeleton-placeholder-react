const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    './src/index.js',
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
    library: 'skeleton-placeholder-react',
    libraryTarget: 'commonjs2',
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
