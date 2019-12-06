var path = require('path');

module.exports = {
  entry: './assets/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './assets/js/'),
    publicPath: '/assets/js',
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
};