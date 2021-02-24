const { merge } = require('webpack-merge');
const paths = require('./paths');
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
        path: paths.build,
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
    ],   
});