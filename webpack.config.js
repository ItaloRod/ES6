module.exports = {
    entry : ['regenerator-runtime/runtime', './src/main.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public',
        host: '0.0.0.0',
        port: 3000,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 1000  
    }
}