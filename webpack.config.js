const path = require('path');
module.exports={
    entry:'./module_load.js',
    output: {
        filename: 'module_load.js',
        path: path.resolve(__dirname, 'dist'),
      },


}