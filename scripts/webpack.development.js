const merge = require('webpack-merge');
const common = require('./webpack.common.js'),
    path = require('path'),
    Dotenv = require('dotenv-webpack'),
    DefinePlugin = require('webpack').DefinePlugin;


module.exports = merge(common, {
    plugins: [
        new Dotenv({
            path: path.join(__dirname, '/.env.development'),
            safe: false,
            systemvars: true,
            silent: false
        }),
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, '../public'),
        compress: true,
        port: 9000,
        // https://stackoverflow.com/questions/32098076/react-router-cannot-get-except-for-root-url
        // https://webpack.github.io/docs/webpack-dev-server.html
        // https://webpack.js.org/configuration/dev-server/
        historyApiFallback: true
    }
});