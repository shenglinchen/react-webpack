const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  resolve(pathName) {
    return path.resolve(__dirname, "..", pathName);
  },
  styleLoaders(option) {
    let output = [];
    output.push({
      test: /\.css/,
      exclude: "/node_modules",
      use: [
        // 假如传入的参数中明确指出要将 css 从 js 中分离出来，则使用 MiniCssExtractPlugin，否则使用 style-loader
        option.extract ? MiniCssExtractPlugin.loader : "style-loder",
        {
          loader: "css-loader",
          // 由于使用了 css-module 之类的插件来处理 css，需要设置该选项
          module: true
        }
      ]
    });
  }
};
