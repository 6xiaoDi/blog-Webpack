const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
        })
    ],
}