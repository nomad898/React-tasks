const util = require('./util');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 4200,
        historyApiFallback: true,
        hot: true,
        compress: true,
    },
    output: {
        filename: `[name].js`,
        path: util.build,
    },   
    plugins: [
        new HTMLWebpackPlugin({
            template: `${util.public}/index.html`,
            title: `[DEV] Webpack config`,
            favicon: `${util.public}/assets/favicon.ico`           
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],   
});