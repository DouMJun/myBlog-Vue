const path = require('path');
var GetFileMakeTime = require("./src/plugins/GetFileMakeTime")
function resolve(dir) {
  return path.join(__dirname, dir);
}


module.exports = {
  lintOnSave: true,
  publicPath: "/myblog",
  outputDir:"myblog",
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets',resolve('src/assets'))
      .set('@components',resolve('src/components'))
      .set('@common',resolve('src/common'))
      .set('@views',resolve('src/views'))
      .set('@network',resolve('src/network')),
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('./markdownLoader')
      .loader('./markdownLoader')
      .end()
    },
    configureWebpack: {
      // outputDir:'42.192.44.81/myblog',
      plugins: [
        new GetFileMakeTime()
      ]
    }

}
