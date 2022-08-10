const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/index.jsx',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            // filename: 'index.html', // it seems that the default here is 'index.html'
            template: './index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // these are applied from right to left (as in standard function composition notation)
                    presets: [
                        "@babel/preset-env", // transpiles JS code with ES6 syntax to older JS syntax
                        "@babel/preset-react", // transpiles React code (e.g. JSX files) to modern JS code
                    ],
                },
            },
        ],
    },
};


