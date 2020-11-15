const marked = require("marked");
const renderer = new marked.Renderer();

return {
  module: {
    // node: {
    //   fs:'empty'
    // },
    publicPath: './',
    rules: [{
      test: /\.md$/,
      use: [
        { loader: 'vue-loader' },
        {
          loader: require('./markdownLoader')
        },
       
      ]
    }]
  }
}