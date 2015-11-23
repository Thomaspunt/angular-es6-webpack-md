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
        loader: 'ngtemplate!html',
        include: path.resolve(__dirname, 'src/')
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?sourceMap',
        include: path.resolve(__dirname, 'src/')
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'ng-annotate?add=true!babel',
        include: path.resolve(__dirname, 'src/')
      } 
    ]
  },
  plugins: []
};
