const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    port: 8080,
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node-modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.?(s)css$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.png$/,
        type: 'asset/inline',
      },
      {
        test: /\.jpg$/,
        type: 'asset/inline',
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    })
  ],
  devServer: {
    watchFiles: ["src/*.html"],
    hot: true,
    liveReload:true,
  },
};
