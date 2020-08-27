const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './scss/styles.scss',
    output: {
        filename: 'styles.js',
        path: __dirname + '/css',
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
    ],
    resolve: {
        extensions: ['.scss', '.sass'],
    },
    watch: true,
}
