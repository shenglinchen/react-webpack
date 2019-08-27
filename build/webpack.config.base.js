const path = require("path");
const os = require("os");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Happypack = require("happypack");
const happypackThreaPool = Happypack.ThreadPool({ size: os.cpus().length });
const utils = require("./utils");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

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
    }),
    new Happypack({
      id: "tsx",
      threadPool: happypackThreaPool,
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            happyPackMode: true
          }
        }
      ]
    }),
    new Happypack({
      id: "js",
      threadPool: happypackThreaPool,
      use: [
        {
          loader: "babel-loader"
        }
      ]
    }),
    new ForkTsCheckerWebpackPlugin({
      // 由于 ts-loader 搭配 happypack 时，不会打印语义错误
      checkSyntacticErrors: true
    }),
    new ProgressBarPlugin({
      format: ":bar:percent---冲冲冲",
      complete: "✈️   "
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: 9999,
      openAnalyzer: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: "/node_module",
        use: "happypack/loader?id=tsx"
        // use: [
        //   {
        //     loader: "babel-loader"
        //   },
        //   {
        //     loader: "ts-loader",
        //     options: {
        //       transpileOnly: true
        //     }
        //   }
        // ]
      },
      {
        test: /\.js$/,
        exclude: "/node_module",
        // loaders: ["babel-loader"]
        use: "happypack/loader?id=js"
      }
    ]
  },
  resolve: {
    extensions: ["js", "ts", "tsx", "json"],
    alias: {
      "@": utils.resolve("src"),
      "@/components": utils.resolve("src/components"),
      "@/modules": utils.resolve("src/modules"),
      "@/store": utils.resolve("src/store")
    }
  }
};
