const paths = require('./paths');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const appDir = paths.src;
const buildDir = paths.build;

console.log(appDir);
console.log(buildDir);
console.log();


const filename = (ext, subfolder = '') =>
    isDev ?
    `${subfolder}[name].${ext}` :
    `${subfolder}[name].[contenthash].${ext}`;

const cssLoaders = extra => {
    const loaders = [{
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: buildDir,
            },
        },
        'css-loader'
    ];
    if (extra) {
        loaders.push(extra);
    }
    return loaders;
}

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if (isProd) {
        config.minimizer = [
            new CssMinimizerPlugin(),
        ]
    }
    return config;
}

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react'
        ],
        // plugins: [

        // ]
    };
    if (preset) {
        opts.presets.push(preset);
    }
    return opts;
}

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions()
    }];
    if (isDev) {
        loaders.push('eslint-loader');
    }
    return loaders;
}

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: `${paths.public}/index.html`,
            title: isDev ? '[DEV] Webpack config' : 'Webpack config',
            favicon: `${paths.public}/assets/favicon.ico`,
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        // uncomment following, if required to copy some static files
        new CopyWebpackPlugin({
            patterns: [{
                from: `${paths.public}/assets/favicon.ico`,
                to: buildDir
            }]
        })
    ];

    if (isProd) {
        base.push(new BundleAnalyzerPlugin())
    }

    return base;
}

const rules = () => {
    const base = [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            use: jsLoaders()
        },
        {
            test: /\.css$/,
            use: cssLoaders()
        },
        {
            test: /\.s[ac]ss$/,
            use: cssLoaders('sass-loader')
        },
        {
            test: /\.(png|jpg|svg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: filename('[ext]', 'assets/images/')
                },
                // uncomment following if need to minimize imgs
                // limit: 
            }],
        },
        {
            test: /\.(ttf|woff|woff2|eot)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: filename('[ext]', 'assets/fonts/')
                },
                // uncomment following if need to minimize fonts
                // limit: 
            }],
        }
    ];

    return base;
}

module.exports = {
    context: appDir,
    entry: {
        main: ['@babel/polyfill', './index.js'],
    },
    output: {
        filename: filename('js'),
        chunkFilename: filename('js'),
        path: paths.build,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': appDir,
            '@models': `${paths.src}/models`,
        }
    },
    optimization: optimization(),
    plugins: plugins(),
    module: {
        rules: rules()
    },
};