const path = require("path");

module.exports = {
  resolve(pathName) {
    return path.resolve(__dirname, "..", pathName);
  }
};
