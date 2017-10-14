const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ContextReplacementPlugin = require('webpack').ContextReplacementPlugin;

module.exports = {
    // entry: './src/index.js',
    entry: {
        'main': "./src/client.js"
    },
    output: {
        path: path.resolve(__dirname, '../public', 'assets/js'),
        filename: '[name].js',
        publicPath: 'assets/js/'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    babelrc: false,
                    presets: [
                        ["env", {
                            modules: false
                        }], 'stage-2', "react"
                    ],
                    plugins: ['syntax-dynamic-import']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: '../../index.html',
            showErrors: true,
            inject: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
            minChunks: 3
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        })
    ],
    devtool: 'cheap-module-source-map'
}