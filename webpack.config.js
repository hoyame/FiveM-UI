const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        publicPath: './'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        historyApiFallback: true, contentBase: './'
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new WebpackObfuscator({
            rotateStringArray: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ]
}