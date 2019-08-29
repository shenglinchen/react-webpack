const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
    }),
    // 将 css 从 js 中提取出来作为一个单独的文件
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false
    })
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: "/node_modules",
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/",
              hmr: true
              // 注意这里不能这么写，因为在 webpack 打包构建阶段好像不能获取 node_env
              // hmr: process.env.NODE_ENV === "development"
            }
          },
          // 在 js 中动态将 css 插入到 html 的 style 标签下
          // {
          //   loader: "style-loader"
          // },
          // 解析 js 中的 import 的 css，并将 css 转成字符串插入到 js 中
          {
            loader: "css-loader",
            options: {
              // modules: true
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          // 将 css 分离为单独文件，
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/",
              hmr: true
              // hmr: process.env.NODE_ENV === "development"
            }
          },
          // 在 js 中动态将 css 插入到 html 的 style 标签下
          // {
          //   loader: "style-loader"
          // },
          // 解析 js 中的 import 的 css
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  }
});
