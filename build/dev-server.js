const express = require("express");
const webpackConfig = require("./webpack.config.dev");
const webpack = require("webpack");
const config = require("../config");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const compiler = webpack(webpackConfig);

const app = express();

const devMiddleware = webpackDevMiddleware(compiler, {
  logLevel: "silent",
  publicPath: webpackConfig.output.publicPath
});

app.use(devMiddleware);

app.use(
  webpackHotMiddleware(compiler, {
    log: false,
    heartbeat: 2000,
    path: "/__hmr"
  })
);

devMiddleware.waitUntilValid(() => {
  console.log(`listening on http://localhost:${config.dev.port}`);
});

app.listen(9000);
