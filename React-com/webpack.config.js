const webpack = require('webpack');
module.exports = {
    devtool:'source-map',
    entry: './src/index.js',
    output: {
        path : __dirname + "/dist",
        filename : "bundle.js"
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: "babel-loader",
            },
            {
                test:/\.css$/,
                loader : ["style-loader","css-loader"]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                "NODE_ENV": JSON.stringify('production')
            }
        })
    ]
}