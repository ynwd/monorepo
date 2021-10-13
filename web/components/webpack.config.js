const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        index: { import: "./src/index.js" }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    output: {
        filename: "components.bundle.min.js",
        library: 'fstrComponents',
        libraryTarget: 'umd',
        clean: true
    },
}