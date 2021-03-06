const path = require('path');

module.exports = {
    entry: "./src/js/index",
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "bundle.js",
        publicPath: "./public/",
    },

    context: __dirname,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src/js")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                },
            },
        ],
    },
}