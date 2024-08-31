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
            },
            {
                test: /\.less$/,
                use: [              // 从下往上依次执行
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: "贪吃蛇",
            template: "./src/index.html",
        }),
    ]
}