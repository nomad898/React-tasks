const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

module.exports = {
    context: paths.src,
    entry: {
        main: ['./index.jsx'],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': paths.src,
            '@models': `${paths.src}/models`,
            '@components': `${paths.src}/components`,
            '@pages': `${paths.src}/pages`,
            '@styles': `${paths.src}/styles`,
            '@public': `${paths.public}`
        }
    },
    plugins: [
        // plugin does not work with Webpack 5 https://stackoverflow.com/questions/65481943/typeerror-compiler-plugin-is-not-a-function-at-reactloadableplugin-apply
        // new UnusedFilesWebpackPlugin({
        //     patterns: [
        //         'src/components/**/*.jsx',
        //         'src/pages/**/*.jsx',
        //         'src/stores/**/*.js'
        //     ],
        // }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: `${paths.public}/assets/favicon.ico`,
                to: paths.build
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