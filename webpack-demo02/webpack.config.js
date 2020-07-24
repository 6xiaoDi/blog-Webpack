const path = require('path');

module.exports = {

    mode: 'development',
    entry: {
        'test': './src/test.js',
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
};