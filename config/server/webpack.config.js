const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const DelWebpackPlugin = require('del-webpack-plugin')


module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  target: 'node',
  // entry: './src/server.js',
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs2',
    // path: path.resolve(__dirname, '../../www'),
    path: path.resolve(__dirname, '../../www'),
    publicPath: "/service/src/",
    filename: '[name].js',
    // sourceMapFilename: '[file].map',
  },
  optimization: {
    // We no not want to minimize our code.
    minimize: false,
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false,
  },
  devtool: 'nosources-source-map',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            [
              'es2015',
              {
                modules: false,
              },
            ],
            'stage-2',
            'react',
          ],
        },
      },
    ],
  },
  plugins: [
    // new CopyPlugin([{ from: 'src/index.html', to: '../index.html' }]),
  ],
};

// ['.webpack/assets/js/service']
