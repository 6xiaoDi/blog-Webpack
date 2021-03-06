const path = require('path');

module.exports = {
    //配置项
    // entry: './src/index.js',    //设置入口
    mode: 'development',
    entry: {
        // index: './src/index.js',
        // list: './src/list.js',

        'txt-demo': './src/txt-demo.js',
        'markdown-demo': './src/markdown-demo.js',
        'file-demo': './src/file-demo.js',
        'css-demo': './src/css-demo.js'
    },

    output: {
        // __dirname当前该文件所在目录（绝对路径）
        path: path.resolve(__dirname, "dist"),  // 需要path，需要引入
        // filename: "bundle.js",  //单文件出口的设置
        filename: "[name].js"   // [name] 内置变量占位符（多出口），占位符默认就是key
    },

    module: {

        rules: [

            // loader
            {
                // test：被加载的模块文件的特征，后缀
                test: /\.txt$/,
                // use：使用对应某种loader处理（即在打包之前针对此类型文件进行处理）
                use: 'raw-loader'
            },

            {
                test: /\.md$/,
                // 多个loader可以使用数组或者对象
                // 执行顺序使，从右至左
                // use: 'raw-loader'
                // use: 'markdown-loader'
                use: ['html-loader','markdown-loader']
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                // 用到options。use采用对象的形式，怎么配置我们具体看loader的使用说明，如下图
                use: {
                    loader: 'file-loader',
                    options: {
                        //打包后的存放位置
                        outputPath: "./images",
                        //为你的文件配置自定义资源url引用路径
                        publicPath: '../dist/images/'
                    }
                }
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]

    }

}