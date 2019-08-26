const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  // entry: {
  //   app: "./src/main/app.js"
  // },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/main/template.ejs",
      title: "react-template"
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: "/node_module",
        // loaders: ["babel-loader", "ts-loader"]
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: "/node_module",
        loaders: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["js", "ts", "tsx", "json"]
  }
};
