"use strict";

var fs = require("fs");
var path = require("path");
var express = require("express");

var config = require("../config");
var app = express();

// 读取编译成的文件。第一个参数是绝对路径，第二个参数表示文件的编码。返回一个字符串
var html = fs.readFileSync(path.resolve(__dirname, "../../dist/index.html"), {
  encoding: "utf8"
});

app.use(function(req, res, next) {
  console.log("req.url: " + req.url);
  next();
});

app.all("/ping", function(req, res) {
  return res.status(200).send("OK");
});

app.all("/", function(req, res) {
  res.send(html);
});

app.use(express.static(path.resolve(__dirname, "../../dist/")));

app.use(function(req, res) {
  res.redirect("/");
});

var port = config.port;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
