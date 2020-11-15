const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
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
      // .use('html-loader')
      // .loader('html-loader')
      // .end()
      // .use('markdown-loader')
      // .loader('markdown-loader')
      // .end()
  }
};