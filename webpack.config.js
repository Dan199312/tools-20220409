const path = require('path');
const HTMLWebpackPlugin = require ('html-webpack-plugin');


module.exports = {
  entry: './src/main.js',
  plugins: [
    new HTMLWebpackPlugin ({
      template: './src/index.html',

    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};
