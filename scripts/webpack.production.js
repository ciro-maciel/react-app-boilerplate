const path = require('path'),
    merge = require('webpack-merge'),
    Dotenv = require('dotenv-webpack'),
    DefinePlugin = require('webpack').DefinePlugin,
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    CompressionPlugin = require('compression-webpack-plugin'),
    swPrecacheWebpackPlugin = require('sw-precache-webpack-plugin'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const common = require('./webpack.common.js'),
    rootDir = 'public',
    // PUBLIC_PATH = '/react-app-boilerplate/',
    PUBLIC_URL = 'https://ciro-maciel.github.io/react-app-boilerplate/';

module.exports = merge(common, {
    plugins: [
        new UglifyJsPlugin({
            parallel: true,
            sourceMap: false,
            uglifyOptions: {
                compress: {
                    warnings: false,
                    // Disabled because of an issue with Uglify breaking seemingly valid code:
                    // https://github.com/facebookincubator/create-react-app/issues/2376
                    // Pending further investigation:
                    // https://github.com/mishoo/UglifyJS2/issues/2011
                    comparisons: false,
                    sequences: true, // join consecutive statemets with the “comma operator”
                    properties: true, // optimize property access: a["foo"] → a.foo
                    dead_code: true, // discard unreachable code
                    drop_debugger: true, // discard “debugger” statements
                    unsafe: false, // some unsafe optimizations (see below)
                    conditionals: true, // optimize if-s and conditional expressions
                    evaluate: true, // evaluate constant expressions
                    booleans: true, // optimize boolean expressions
                    loops: true, // optimize loops
                    unused: true, // drop unused variables/functions
                    hoist_funs: true, // hoist function declarations
                    hoist_vars: false, // hoist variable declarations
                    if_return: true, // optimize if-s followed by return/continue
                    join_vars: true, // join var declarations
                    cascade: true, // try to cascade `right` into `left` in sequences
                    side_effects: true // drop side-effect-free statements
                },
                output: {
                    comments: false,
                    // Turned on because emoji and regex is not minified properly using default
                    // https://github.com/facebookincubator/create-react-app/issues/2488
                    ascii_only: true,
                    // http://lisperator.net/uglifyjs/codegen
                    indent_start: 0, // start indentation on every line (only when `beautify`)
                    indent_level: 4, // indentation level (only when `beautify`)
                    quote_keys: false, // quote all keys in object literals?
                    space_colon: true, // add a space after colon signs?
                    inline_script: false, // escape "</script"?
                    width: 80, // informative maximum line width (for beautified output)
                    max_line_len: 32000, // maximum line length (for non-beautified output)
                    beautify: false, // beautify output?
                    source_map: null, // output a source map
                    bracketize: false, // use brackets every time?
                    comments: false, // output comments?
                    semicolons: true, // use semicolons to separate statements? (otherwise, newlines)
                }
            }
        }),
        new Dotenv({
            path: path.join(__dirname, '/.env.production'),
            safe: false,
            systemvars: true,
            silent: false
        }),
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../../analysis.html',
        }),
        // https://github.com/goldhand/sw-precache-webpack-plugin
        // https://github.com/GoogleChromeLabs/sw-precache#options-parameter
        // https://github.com/GoogleChrome/sw-precache/issues/156
        // https://github.com/GoogleChrome/sw-precache
        new swPrecacheWebpackPlugin({
            cacheId: '@ciro-maciel/react-app-boilerplate',
            filename: '../../worker.js',
            minify: true,
            staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,json,ttf,woff,ico}'],
            // replacePrefix: 'react-app-boilerplate',
            stripPrefix: rootDir,
            // stripPrefixMulti: {
            //     'public': 'react-app-boilerplate'
            // },
            // stripPrefix: rootDir,
            navigateFallback: PUBLIC_URL
        })
    ]
});