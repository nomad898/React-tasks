const paths = require('./paths');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 4200,
        historyApiFallback: true,
        hot: true,
        compress: true,
    },
});