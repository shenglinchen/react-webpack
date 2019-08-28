const baseConfig = require("./webpack.base.config");
const webpackMerge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = webpackMerge(baseConfig, {
  entry: {
    app: "./src/main/index.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: "/node_modules",
        use: [
          {
            loader: MiniCssExtractPlugin.loader
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
        exclude: "/node_modules",
        use: [
          // 在 js 中动态将 css 插入到 html 的 style 标签下
          {
            loader: "style-loader"
          },
          // 解析 js 中的 import 的 css
          {
            loader: "css-loader",
            options: {
              // modules: true
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
  },
  plugins: [
    // 将 css 从 js 中提取出来作为一个单独的文件
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash]p.css",
      chunkFilename: "css/[id].[chunkhash]p.css",
      ignoreOrder: false
    })
  ]
});
