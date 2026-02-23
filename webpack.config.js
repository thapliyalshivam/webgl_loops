const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports={
    entry:'./module_load.js',
    //entry can be an object. 
    mode: 'development',

    plugins: [
        new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
               title: 'Output Management', 
             }),
           ],
    
    output: {
        filename: 'module_load.js',
        path: path.resolve(__dirname, 'dist'),
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