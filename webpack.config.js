const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// GitHub Pages project site: https://<user>.github.io/<repo>/
const isProd = process.env.NODE_ENV === 'production';
const publicPath = isProd ? '/webgl_loops/' : '/';

module.exports = {
    entry: './module_load.js',
    mode: isProd ? 'production' : 'development',

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Animation Loops',
            templateContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Animation Loops</title>
  <link rel="stylesheet" href="${publicPath}main.css">
</head>
<body>
</body>
</html>
            `.trim(),
        }),
        new CopyPlugin([
            { from: 'main.css', to: 'main.css' },
            { from: 'images', to: 'images' },
            { from: 'models', to: 'models' },
        ]),
    ],

    output: {
        filename: 'module_load.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath,
    },

      module: {
        rules: [
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ],
          },   
          {
            test: /\.(glb|mtl|obj)$/,
            use: [
              'file-loader'
            ],
          }
        ],
      },

      devServer: {
            contentBase: './dist',
            host: '0.0.0.0',//your ip address
            disableHostCheck: true,
            compress: true,
            port: 9000
         },


}