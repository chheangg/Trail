const path = require('path');

module.exports = {
    entry: {
        main: './src/main.js',
        app: './src/app.js',
        pageload: './src/pageload.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader',],
            },
            { 
                test: /\.(png|jpeg|jpg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    }
}