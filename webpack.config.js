const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    mode: 'development',
    output: {
        filename: 'game.[chunkhash].js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx"]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ],
    }
};

module.exports = config;