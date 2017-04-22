const webpack = require('webpack');
const path = require('path');

var DEV_API = "http://localhost/api/";

module.exports = {
    headers: { 
        "Access-Control-Allow-Origin": "*" 
    },
    entry: [
        'babel-polyfill',
        './src/app.js',
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'app.js',
    },
    plugins: [
        new webpack.DefinePlugin({
            DEV_API: JSON.stringify(DEV_API),
        })
    ],
    module: {
        'loaders': [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
            { test: /\.(png|jpg|gif)$/, loader: 'file' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            },
            { test: /\.html$/,
                exclude: /index\.html$/,
                loader: 'ngtemplate?relativeTo=' + __dirname + '!html'
            }
        ]
    }
}