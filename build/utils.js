const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  resolve(pathName) {
    return path.resolve(__dirname, "..", pathName);
  }
};
