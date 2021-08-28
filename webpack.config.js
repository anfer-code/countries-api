const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js"],
        alias: {
            "@utils": path.resolve(__dirname, "src/utils/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@templates": path.resolve(__dirname, "src/templates/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
            "@assets": path.resolve(__dirname, "src/assets/"),
            
        }
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.tff$/i,
                type: "asset/resource"
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: "body"
        }),
        new MiniCssExtractPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
}