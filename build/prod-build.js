const prodConfig = require("./webpack.prod.config");
const webpack = require("webpack");
const chalk = require("chalk");

webpack(prodConfig, (err, stats) => {
  if (err) throw err;

  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + "\n \n"
  );

  console.log(
    chalk.yellow(
      "构建的文件 index.html 直接打开的话无法获取到数据 \n 请使用 yarn run deploy 起服务"
    )
  );
});
