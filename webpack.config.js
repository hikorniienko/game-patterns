const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        "./src/design/Command/index.ts",
        "./src/design/Flyweight/index.ts",
        "./src/design/Observer/index.ts",
        "./src/design/Prototype/index.ts",
        "./src/design/Singleton/index.ts",
        "./src/design/State/index.ts",
        "./src/sequencing/DoubleBuffer/index.ts",
        "./src/sequencing/GameLoop/index.ts",
        "./src/sequencing/UpdateMethod/index.ts",
        "./src/behevioral/SubclassSandbox/index.ts",
        "./src/behevioral/TypeObject/index.ts",
        "./src/decoupling/Component/index.ts",
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        static: "./dist",
        port: 8080,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
    optimization: {
        minimize: true,
    },
};
