const path = require("path");

module.exports = {
  resolve(pathName) {
    console.log(path.resolve(__dirname, "..", pathName));
    return path.resolve(__dirname, "..", pathName);
  }
};
