const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const IgnoreAssetsWebpackPlugin = require('ignore-assets-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({inlineSource: '.(js|css)$', title: 'EXOSTASIS'}),
        new HtmlWebpackInlineSourcePlugin(),
        new IgnoreAssetsWebpackPlugin({ignore: 'main.js'})
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpeg|jpg|gif|woff|mp3)$/,
                use: [ 'url-loader' ]
            }
        ]
    }
};