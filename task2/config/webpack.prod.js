const util = require('./util');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: `[name].[contenthash].js`,
        path: util.build,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: `${util.public}/index.html`,
            title: `Webpack config`,
            favicon: `${util.public}/assets/favicon.ico`,
            minify: {
                collapseWhitespace: true
            }
        }),
        // Extracts CSS into separate files
        // Note: style-loader is for development, MiniCssExtractPlugin is for production
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [{
                test: /\.(s[ac]ss)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../dist/',
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(css)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../dist/',
                        },
                    },
                    'css-loader'
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
});