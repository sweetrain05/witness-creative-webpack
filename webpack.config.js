const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    devServer: {
        static: { directory: path.resolve(__dirname, "dist") },
        port: 8080,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            { test: /\.html$/, use: ["html-loader"] },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["@babel/preset-env"] },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/assets/background", to: "img" },
                { from: "src/assets/img", to: "img" },
                { from: "src/assets/logo", to: "img" },
                { from: "src/assets/menu", to: "img" },
            ],
        }),
        new HtmlWebpackPlugin({
            title: "index",
            filename: "index.html",
            template: "src/template.html",
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            title: "contact",
            filename: "contact.html",
            template: "src/pages/contact.html",
            chunks: ["contact"],
        }),
        new HtmlWebpackPlugin({
            title: "landing",
            filename: "landing.html",
            template: "src/pages/landing.html",
            chunks: ["landing"],
        }),
        new HtmlWebpackPlugin({
            title: "news",
            filename: "news.html",
            template: "src/pages/news.html",
            chunks: ["news"],
        }),
        new HtmlWebpackPlugin({
            title: "header",
            filename: "header.html",
            template: "src/components/header.html",
            chunks: ["header"],
        }),
        new HtmlWebpackPlugin({
            title: "footer",
            filename: "footer.html",
            template: "src/components/footer.html",
            chunks: ["footer"],
        }),
    ],
};
