const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const baseURL = path.resolve(__dirname);

module.exports = {
    entry: path.resolve(baseURL, 'src', 'index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            },
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
