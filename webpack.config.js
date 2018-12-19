const path = require('path');
const src = "./src/";

module.exports = {
  mode: 'development',
  // mode: 'none',
  entry: {
    app: `${src}js/app.js`,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|common)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};