/* eslint-disable */

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const rootPath = path.resolve(__dirname);
const outputPath = path.join(rootPath, "./dist/app/");

module.exports = {
    resolve: {
        extensions: [".ts", ".js"],
        mainFields: ["main", "module", "browser"],
    },
    entry: path.join(rootPath, "./src/app/index.ts"),
    target: "electron-renderer",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            }
        ],
    },
    devServer: {
        contentBase: outputPath,
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 9101,
        publicPath: "/",
    },
    output: {
        filename: "index.js",
        path: outputPath,
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: "res/index.html",
            inject: true,
            cache: true
        })
    ]
};
