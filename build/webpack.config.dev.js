const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const path = require("path");
const webpack = require("webpack");
module.exports = webpackMerge(baseConfig, {
  mode: "development",
  entry: {
    app: [
      "webpack-hot-middleware/client?path=/__hmr&reload=true",
      "./src/main/index.tsx"
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  devtool: "inline-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  }
});
