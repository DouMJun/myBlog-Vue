

const MarkdownIt = require('markdown-it')
const hljs = require('highlight.js')
// const time = require('./getTime')
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
  	// 此处判断是否有添加代码语言
    if (lang && hljs.getLanguage(lang)) {
      try {
      	// 得到经过highlight.js之后的html代码
        const preCode = hljs.highlight(lang, str, true).value
        // 以换行进行分割
        const lines = preCode.split(/\n/).slice(0, -1)
        // 添加自定义行号
        let html = lines.map((item, index) => {
          return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + '</li>'
        }).join('')
        html = '<ol>' + html + '</ol>'
        // 添加代码语言
        if (lines.length) {
          html += '<b class="name">' + lang + '</b>'
        }
        return '<pre class="hljs"><code>' +
          html +
          '</code></pre>'
      } catch (__) {}
    }
	// 未添加代码语言，此处与上面同理
    const preCode = md.utils.escapeHtml(str)
    const lines = preCode.split(/\n/).slice(0, -1)
    let html = lines.map((item, index) => {
      return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + '</li>'
    }).join('')
    html = '<ol>' + html + '</ol>'
    return '<pre class="hljs"><code>' +
      html +
      '</code></pre>'
  }
})

// // req.body.content 代表md代码
// let articleContentHtml = md.render(`@[toc]${req.body.content}`)
function getTitle(html) {
  var reg = /<h1>([\s\S]*?)<\/h1>/
  if(html.match(reg)){
    return html.match(reg)[1]
  }else{
    return ''
  }
}

function setDoc(html) {
  var reg = /<h2>([\s\S]*?)<\/h2>/g
  var sidebar = []
  html = html.replace(reg, (str, content) => {
    sidebar.push("'"+content+"'")
    return `<h2 id='${content}'>
      <a href="#${content}"/>
      ${content}
      </h2>`
  })
  return {html:html, sidebar: sidebar}
}

function getDigest(md) {
  var reg = /([\s\S]*?)<!--more-->/
  let digest = md.match(reg)

  if(digest){
    console.log(digest[1])
  }
  
}
module.exports = function(src) {
  getDigest(src)
  var sidebar = []
  var html = md.render(`${src}`)
  const title = getTitle(html)

  let obj = setDoc(html)
  html = obj.html
  sidebar = obj.sidebar
  return (
    `<template>\n
      <div id="write">
        ${html}
      </div>\n
    </template>\n
    
    <script>
    export default {
      data: {
        title: "${title}",
        sidebar: [${sidebar}]
      }
    }
    </script>
    
    <style  scope>
    </style>
    
    `
  )
}