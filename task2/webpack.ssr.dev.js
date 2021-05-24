const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const path = require('path');
const paths = require('./paths');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const miniCssExtractPluginLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        publicPath: '',
        esModule: true,
    },
};

const cssLoaders = (extra) => {
    const loaders = [
        miniCssExtractPluginLoader,
        'css-loader'
    ];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
};

const common = {
    context: paths.src, 
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['.', 'node_modules'],
        fallback: {
            "child_process": false,
            "process": false,
            "fs": false,
            "util": false,
            "http": false,
            "https": false,
            "tls": false,
            "net": false,
            "crypto": false,
            "os": false,
            "stream": false,
            "zlib": require.resolve("browserify-zlib")
        },
        alias: {
            '@': paths.src,
            '@app': `${paths.src}/app`,
            '@models': `${paths.src}/models`,
            '@components': `${paths.src}/components`,
            '@pages': `${paths.src}/pages`,
            '@styles': `${paths.src}/styles`,
            '@public': `${paths.public}`,
            '@utils': `${paths.src}/utils`,
            '@containers': `${paths.src}/containers`,
            '@stores': `${paths.src}/stores`
        }
    },
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: `${paths.public}/assets/favicon.ico`,
                to: paths.build
            }]
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        })
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        },
        {
            test: /\.(png|jpg|svg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: `assets/images/[name].[ext]`
                }
            }],
        },
        {
            test: /\.(ttf|woff|woff2|eot)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: `assets/fonts/[name].[ext]`
                }
            }],
        },
        {
            test: /\.(s[ac]ss)$/,
            use: cssLoaders('sass-loader'),
        },
        {
            test: /\.(css)$/,
            use: cssLoaders(),
        }]
    },
};

const serverConfig = {
    mode: "development",
    target: "node",
    node: {
        __dirname: false,
    },    
    entry: {
        "index.js": `${paths.src}/index.jsx`,
    },
    output: {
        path: paths.build,
        filename: "[name]",
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: `${paths.public}/index.html`,
            title: `[DEV] Webpack config`,
            favicon: `${paths.public}/assets/favicon.ico`
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new NodePolyfillPlugin()
    ],
};

const clientConfig = {
    node: {
        __dirname: false
    },
    mode: "development",
    target: "web",
    entry: {
        "main.js": `${paths.public}/main.js`,
    },
    output: {
        path: `${paths.build}/public`,
        filename: "[name]",
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: `${paths.public}/index.html`,
            title: `[DEV] Webpack config`,
            favicon: `${paths.public}/assets/favicon.ico`
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new NodePolyfillPlugin()
    ],
};

module.exports = [merge(common, serverConfig), merge(common, clientConfig)]