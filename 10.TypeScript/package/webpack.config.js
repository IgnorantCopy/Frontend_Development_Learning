const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    // 入口文件
    entry: "./src/index.ts",
    // 输出文件
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    mode: "development",
    // 模块
    module: {
        rules: [
            {
                // 指定规则生效的文件
                test: /\.ts$/,
                // 指定使用的 loader
                use: "ts-loader",
                // 排除 node_modules 目录
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: "Document",
        }),
    ]
}