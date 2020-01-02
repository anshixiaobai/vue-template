const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');



const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js',
        vendor: [
            'lodash'
        ]
    },
    // externals: {
    //     jquery: 'jQuery'
    // },
    output: {
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].bundle.js',
        path: path.join(__dirname, '..', 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    (process.env.NODE_ENV !== 'production' ?
                        MiniCssExtractPlugin.loader : 'style-loader'
                    ),
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    (process.env.NODE_ENV !== 'production' ?
                        MiniCssExtractPlugin.loader : 'style-loader'
                    ),
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 9751,
                        esModule: false,
                    }
                }]
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin(),
        // 删除dist文件
        new CleanWebpackPlugin(),
        // 以html模板
        new HtmlWebpackPlugin({
            title: '哇哈哈',
            template: 'index.html'
        })
    ],
    // 移除了重复的依赖模块
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}