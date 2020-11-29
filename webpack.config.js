const marked = require("marked");
const renderer = new marked.Renderer();


module.exports = {
    publicPath: '42.192.44.81/myblog',
    rules: [{
      test: /\.md$/,
      use: [
        { loader: 'vue-loader' },
        {
          loader: require('./markdownLoader')
        },
       
      ]
    }],
    plugins:[
      new GetFileMakeTime({options: true})
    ]
  }
