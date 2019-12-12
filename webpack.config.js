const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "index.html"),
    filename: "./index.html"
});

module.exports = {
    //這個webpack打包的對象，這裡面加上剛剛建立的index.js
    mode:"development",
    entry: {
        index: './index.jsx'
    },
    output: {
        //這裡是打包後的檔案名稱
        filename: 'bundle.js',
        //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
        path: path.resolve('./docs'),
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            { 
                test: /\.jsx$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader',
                    options: { 
                        presets: ['@babel/preset-react']
                    }
                }
            },
            { 
                test: /.js$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader', 
                    options: { 
                        presets: ['@babel/preset-env']
                     } 
                    } 
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 
                    {
                        loader: 'file-loader',
                        options: {}
                    }
            }
        ],
    },
    devServer: {
        historyApiFallback: true
    }
};