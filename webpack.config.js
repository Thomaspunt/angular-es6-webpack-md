var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'ng-annotate?add=true!babel'
      } 
    ]
  },
  plugins: []
};
