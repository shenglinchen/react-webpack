// 该文件是 postcss 的配置文件，可以使用 postcss.config.js 等文件名，都会被识别到

module.exports = {
  plugins: [
    // 添加浏览器前缀
    require("autoprefixer"),
    // 样式语法语义检查
    require("stylelint")({
      // 在 stylelintrc 中可以用别人已经写好的规则，如果是使用 prettier 的话，建议使用 recommend
      // 其中需要额外配置，需要忽略伪类选择器：:global
      configFile: ".stylelintrc"
    })
  ]
};
