const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerPort: 9999,
      openAnalyzer: false
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["构建成功----冲啊   🚣"]
      }
    })
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  }
});
