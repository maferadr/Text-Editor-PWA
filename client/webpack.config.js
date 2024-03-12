const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () =>{
    return{
        mode: 'development',
        entry: {
            main: './src/js/index.js',
            install: './src/js/install.js',
            editor: './src/js/editor.js'
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
    //Workbox plugins for a service worker.
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                title: 'Text Editor'
            }),
            //Inject manifest in the service worker
            new InjectManifest({
                swSrc: './src-sw.js',
                swDest: 'src-sw.js',
            }),

            //Manifest.json file to describe all of our app specifications
            new WebpackPwaManifest({
                fingerprints: false,
                inject: true,
                name: 'Text Editor',
                short_name: 'Editor',
                description: 'Customize your own notes!',
                start_url: './',
                publicPath: './',
                icons: [
                    {
                        src: path.resolve('src/images/logo.png'),
                        sizes: [96, 128, 192, 256, 384, 512],
                        destination: path.join('assets', 'icons'),
                    },
                ],
            }),
        ],

    //CSS loaders and babel to webpack
        module: {
           rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
                    }
                }
            }
           ],
        },
    };
};