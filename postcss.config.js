module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: ["last 2 versions", ">1%"] //autoprefixer新版本中browsers替换成overrideBrowserslist。市场占有率大于1%的
    })
  ]
};
