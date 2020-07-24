const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    mode: 'development',

    entry: {
        // 'test': './src/test.js',

        'template': './src/template.js'
    },
    output: {
        // 这个路径是默认会被加入 devServer 的 contentBase 中
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },


    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            // 模板文件存放的目录
            template: "./html/template.html",
            // 生成（打包）后的html存放目录
            filename: "app.html"
        }),
        new HtmlWebpackPlugin({
            // 模板文件存放的目录
            template: "./html/template1.html",
            // 生成（打包）后的html存放目录
            filename: "app1.html"
        }),
    ],
};