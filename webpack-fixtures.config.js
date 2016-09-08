const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractFonts = new ExtractTextPlugin('fonts.css', {
    allChunks: true,
});

const extractBootstrap = new ExtractTextPlugin('bootstrap-[name].css', {
    allChunks: true,
});

const THEMES = ['tdp', 'tds', 'tfd'];

module.exports = {
    entry: {
        'tdp': './fixtures/tdp/index.js',
        'tds': './fixtures/tds/index.js',
        'tfd': './fixtures/tfd/index.js',
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`,
    },
    resolve: ['', '.scss', '.css', '.js'],
    module: {
        loaders: [
            {
                test: /\.woff(2)?(\?[a-z0-9=&.]+)?$/,
                loader: 'url',
                query: {
                    limit: 50000,
                    mimetype: 'application/font-woff',
                    name: './fonts/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|otf|eot|svg)(\?[a-z0-9=&.]+)?$/,
                loader: 'file',
                query: {
                    name: './fonts/[name].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: extractFonts.extract('style', 'css'),
            },
            {
                test: /\.scss$/,
                loader: extractBootstrap.extract('style', 'css!sass'),
            }
        ]
    },
    plugins: [
        extractFonts,
        extractBootstrap
    ],
    devServer: {
        contentBase: './test/fixtures',
    },
}
