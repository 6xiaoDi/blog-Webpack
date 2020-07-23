const path = require('path');

module.exports = {
    //配置项
    // entry: './src/index.js',    //设置入口
    mode: 'development',
    entry: {
        index: './src/index.js',
        list: './src/list.js',
    },

    output: {
        // __dirname当前该文件所在目录（绝对路径）
        path: path.resolve(__dirname, "dist"),  // 需要path，需要引入
        // filename: "bundle.js",  //单文件出口的设置一个filename即可
        filename: "[name].js"   // [name] 内置变量占位符（多出口），占位符默认就是key
    },

}