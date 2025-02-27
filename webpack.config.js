const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
    return {
        mode:'development',
        entry: {
            'index': './src/index.js',
        },
        devtool: 'eval-source-map',
        output: {
            filename: '[name].js', // [name]은 entry에서 정의한 키 값 (index 또는 dev.property)
            path: path.resolve(__dirname, 'dist'),
        },
        module:{
            rules:[{
                loader: 'babel-loader',
                test: /\.js|\.jsx$/,
                exclude: /node_modules/
            },
            {
                test: /\.scss|.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test : /\.json$/,
                use: ['json-loader'],
                type: 'javascript/auto'
            }]
        },
        devServer: {
            host: 'localhost',
            port: 3100,
            historyApiFallback: true,
            open: true,
            static: {
                directory: path.join(__dirname, 'public'),
            },
            proxy: {
                // '/api': 'http://dev2.ntd.co.kr/'
                '/api': 'http://localhost:3000/',
                changeOrigin: true, // cross origin 허용 설정
            },
            historyApiFallback: true, // router-dom 옵션
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src/"),
                // "/assets": path.resolve(__dirname, "./assets"),
            },
            extensions:[".js",".jsx",".css", ".svg"]
        },
        plugins: [
            new HtmlPlugin({
                template: './public/index.html'
            }),
            new CopyPlugin({
                patterns: [
                    { from: './assets', to: './assets' }
                ]
            }),
            new webpack.ProgressPlugin()
        ]
    }
};