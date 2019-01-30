const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    library: 'CedarMaps',
    libraryTarget: 'commonjs2',
    path: path.resolve('dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
