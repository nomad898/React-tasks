const util = require('./util');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: util.src,
    entry: {
        main: ['./index.js'],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': util.src,
            '@models': `${util.src}/models`,
            '@components': `${util.src}/components`,
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        // uncomment following, if required to copy some static files
        new CopyWebpackPlugin({
            patterns: [{
                from: `${util.public}/assets/favicon.ico`,
                to: util.build
            }]
        })
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)?$/,
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
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
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
                            publicPath: '',
                        },
                    },
                    'css-loader'
                ],
            }
        ]
    },
};