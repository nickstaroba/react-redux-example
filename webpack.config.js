const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => ({
    devtool: "eval-source-map",
    entry: "./src/index.jsx",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                            ],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
});
