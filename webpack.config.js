const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'skeleton-placeholder-react',
    libraryTarget: 'umd',
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
