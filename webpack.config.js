const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: 'inline-source-map',
  entry: [ "@babel/polyfill", "./src/index.js" ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    open: true,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    proxy: {
    "/api": "http://localhost:8080"
  },
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
