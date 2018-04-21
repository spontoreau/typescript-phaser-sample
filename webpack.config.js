const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const config = {
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    mode: 'development',
    output: {
        filename: 'game.[chunkhash].js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin(),
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
          }),
    ],
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            { test: [ /\.vert$/, /\.frag$/ ], use: 'raw-loader' },
            { test: /\.(png|jpg|gif)$/, use: 'file-loader' }
        ],
    }
};

module.exports = config;