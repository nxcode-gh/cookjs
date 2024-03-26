const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode:'development',  
    entry: '../dev/src/index.js',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'cookjs@1.0.0_.min.js',
        path: path.resolve(__dirname, '../dev/dist/WWW'),
        clean:true,
        publicPath: '/',
        libraryTarget:'umd',
        library:'slx',
    },
    devtool: 'source-map',
    devServer: {
        allowedHosts: ['.ngrok-free.app'],
        static: './',
        port:8080,
        historyApiFallback: true,
        proxy:[]
    },
    plugins:[
        new HtmlWebpackPlugin({filename:"index.html",template:'./src/index.html',inject:'head',scriptLoading:'blocking'}),
        
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    module: {
        rules: [
          //plotlyjs
        /*{
            test: /\.js$/,
            loader: 'ify-loader'
        },*/
            {
              test: /\.m?js/,
              type: "javascript/auto",
            },
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false,
                }
            },
            {
                test: /\.css$/i,
                use: [
                  {
                    loader: "style-loader",
                    options: { injectType: "lazyStyleTag", insert:"body" },
                  },
                  "css-loader",
                ],
            },
            //typescript 
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: ['/node_modules/']
            },
            //bootstrap
            {
                test: /\.(scss)$/,
                use: [{
                // inject CSS to page
                    loader: 'style-loader'
                },
                {
                // translates CSS into CommonJS modules
                    loader: 'css-loader'
                },
                {
                // Run postcss actions
                    loader: 'postcss-loader',
                    options: {
                // `postcssOptions` is needed for postcss 8.x;
                // if you use postcss 7.x skip the key
                    postcssOptions: {
                    // postcss plugins, can be exported to postcss.config.js
                    plugins: function () {
                        return [
                            require('autoprefixer')
                            ];
                        }
                    }
              }
            }, 
            {
              // compiles Sass to CSS
              loader: 'sass-loader'
            }]
          }
        ],
      },
        
}  