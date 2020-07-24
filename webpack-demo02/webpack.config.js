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
        // filename: "[name].js"
        filename: "./public/js/[name].js"
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
            title: "My App",
            // 模板文件存放的目录
            template: "./html/template.html",
            // 生成（打包）后的html存放目录
            filename: "app.html",
            minify: {
                collapseWhitespace: true, // 折叠有助于文档树中文本节点的空白
                removeComments: true, // 删除HTML注释
                removeRedundantAttributes: true, // 当值匹配默认值时删除属性。
                removeScriptTypeAttributes: true, // type="text/javascript"从script标签中删除。其他type属性值保持不变
                removeStyleLinkTypeAttributes: true, // type="text/css"从style和link标签中删除。其他type属性值保持不变
                useShortDoctype: true // doctype用短（HTML5）文档类型替换
            },
        }),
        // new HtmlWebpackPlugin({
        //     // 模板文件存放的目录
        //     template: "./html/template1.html",
        //     // 生成（打包）后的html存放目录
        //     filename: "app1.html"
        // }),
    ],
};