const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../src'),
    mode: 'development',
    entry: {
        main: './index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            '@models': path.resolve(__dirname, '../src/models'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            favicon: './favicon.ico'
        }),
        new CleanWebpackPlugin(),
        // uncomment following, if required to copy some static files
        // new CopyWebpackPlugin({
        //     patterns: [{
        //         from: path.resolve(__dirname, '../src/favicon.ico'),
        //         to: path.resolve(__dirname, '../dist')
        //     }]
        // })
    ],
    module: {
        rules: [
            // {
            //     test: /\.jsx?$/,
            //     loader: 'babel-loader',            
            // },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    },
};