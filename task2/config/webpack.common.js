const util = require('./util');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const filename = (ext, subfolder = '') => `${subfolder}[name].${ext}`

const jsLoaders = extra => {
    const loaders = [{
            loader: 'babel-loader',
            options: babelOptions()
        },
        {
            loader: 'eslint-loader'
        }
    ];
    return loaders;
}

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    };
    if (preset) {
        opts.presets.push(preset);
    }
    return opts;
}

module.exports = {
    context: util.src,
    entry: {
        main: ['@babel/polyfill', './index.js'],
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
                use: jsLoaders()
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: filename('[ext]', 'assets/images/')
                    }
                }],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: filename('[ext]', 'assets/fonts/')
                    }
                }],
            }
        ]
    },
};