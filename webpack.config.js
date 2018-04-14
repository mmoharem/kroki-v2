// webpack.config.js

const path = require('path'); //  using a native part of nodejs enviroment to creat absolute path

module.exports = {
    entry: './app/assets/javascript/App.js',
    output: {
        path: path.resolve(__dirname, './app/temp/javascript'), // using the built in path resolve function
        filename: 'AppOut.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node-modsules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['es2015']
                }
            }
        }]
    }

};