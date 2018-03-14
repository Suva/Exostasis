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
        new HtmlWebpackPlugin({inlineSource: '.(js|css)$'}),
        new HtmlWebpackInlineSourcePlugin(),
        new IgnoreAssetsWebpackPlugin({ignore: 'main.js'})
    ]
};