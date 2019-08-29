const path = require("path");
const os = require("os");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Happypack = require("happypack");
const happypackThreaPool = Happypack.ThreadPool({ size: os.cpus().length });
const utils = require("./utils");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/main/index.tsx"
  },
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
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        map: false
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: "/node_module",
        use: "happypack/loader?id=tsx"
      },
      {
        test: /\.js$/,
        exclude: "/node_module",
        // loaders: ["babel-loader"]
        use: "happypack/loader?id=js"
      }
      // {
      //   test: /\.less$/,
      //   exclude: "/node_modules"
      //   // use: "happypack/loader?id"
      // }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
    alias: {
      "@": utils.resolve("src"),
      "@/components": utils.resolve("src/components"),
      "@/modules": utils.resolve("src/modules"),
      "@/store": utils.resolve("src/store")
    }
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  }
};
