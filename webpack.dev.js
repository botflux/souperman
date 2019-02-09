const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

const config = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
})

config.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = config