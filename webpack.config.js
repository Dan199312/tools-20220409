const path = require('path');
const HTMLWebpackPlugin = require ('html-webpack-plugin');


module.exports = {
  entry: ['./src/main.js', './src/style.css'],
  plugins: [
    new HTMLWebpackPlugin ({
      template: './src/index.html',

    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [{
      test: /.css$/,
      use: ['style-loader', 'css-loader'],
    },],
  },
};
