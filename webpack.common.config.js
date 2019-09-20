const webpack = require("webpack");
const {
  TsConfigPathsPlugin,
  CheckerPlugin
} = require("awesome-typescript-loader");
const path = require("path");

module.exports = {
  entry: ["./app/index.tsx"],
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    publicPath: "dist",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    plugins: [new TsConfigPathsPlugin()],
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["@babel/preset-env", "@babel/preset-typescript"]
            },
          },
          {
            loader: "awesome-typescript-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CheckerPlugin()
  ],
};
