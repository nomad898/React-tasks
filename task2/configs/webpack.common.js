const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
// const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

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

module.exports = {
    context: paths.src,
    entry: {
        main: ['./index.jsx'],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
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
            use: cssLoaders('sass-loader'),               
        },
        {
            test: /\.(css)$/,
            use: cssLoaders(),  
        }]
    },
};