const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
  }
}

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    'bundle.js': path.resolve(__dirname, 'src/client/index.js')
  },
  module: {
    rules: [js]
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: '[name]'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/client/assets', to: 'public' },
    ]),
  ]
}


var configuration = [clientConfig];
configuration.watch = true;


module.exports = configuration;