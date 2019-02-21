const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: './src/scripts/index.js',
        style: './src/styles/index.css'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            /**
             * CSS Loader
             */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, 
            /**
             * SCSS Loader
             */
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }, 
            /**
             * Webp loader
             */
            {
                test: /\.(jpe?g|png)$/,
                use: [
                    {
                        loader: 'image-webp-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            publicPath: './',
                            requestWebp: true
                        }
                    }
                ]
            },
            /**
             * Image loader
             */
            {
                test: /\.(svg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, 
            /**
             * Font Loader
             */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }, 
            /**
             * Javascript Loader
             */
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }, 
            /**
             * HTML Loader
             */
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader?interpolate',
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html'
        })
    ]
}