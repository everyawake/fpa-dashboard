const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const webpack = require("webpack");
const optimization = require("./webpack.optimization.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, optimization, {
  mode: "production",
  output: {
    path: __dirname + "/dist",
    // publicPath: "dist",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new HtmlWebpackPlugin({
      template: "index.ejs",
      inject: false,
      filename: path.join(__dirname, '/dist/home.html')
    })
  ],
});
