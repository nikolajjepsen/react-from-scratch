const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const baseURL = path.resolve(__dirname);

module.exports = {
    entry: path.resolve(baseURL, 'src', 'index.js'),
    // resolve.extensions allows for selecting which order files with same name should be used
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                }
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(baseURL, 'public', 'index.html'),
            filename: './index.html',
            inject: 'body',
        }),
    ],
};
