const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const RemovePlugin = require('remove-files-webpack-plugin')

const outputPath = __dirname + '/css'

module.exports = {
    mode: 'production',
    entry: './scss/styles.scss',
    output: {
        filename: 'styles.js',
        path: outputPath,
    },
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CompressionPlugin(),
        new RemovePlugin({
            after: {
                test: [
                    {
                        folder: outputPath,
                        method: absoluteItemPath => {
                            return new RegExp(/\.js/).test(absoluteItemPath)
                        },
                        recursive: true,
                    },
                ],
            },
        }),
    ],
    resolve: {
        extensions: ['.scss', '.sass'],
    },
    watch: true,
}
