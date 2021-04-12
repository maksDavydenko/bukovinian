module.exports = {

    entry: {
        main: './index.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        historyApiFallback: true
    },

    loaders: {

    exclude: /node_modules/,
        loaders: [ 'style', 'css', 'postcss', 'sass' ],
    test   : /\.scss$/
},
};
