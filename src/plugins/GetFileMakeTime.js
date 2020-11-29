
const fs = require('fs')
const path = require('path')
const PATH_STATIC = path.resolve(__dirname, '../assets/artical/')

class GetFileMakeTime {
  constructor(options){
    this.options = options
  }
  apply(complier) {
    complier.plugin('entryOption', function(compilation, callback) {
      const timeList = []
      fs.readdirSync(PATH_STATIC).forEach((file) => { 
        if(file.search(/\.md*/) !== -1){
          timeList.push({
              file: file,
              timeCom: fs.statSync(PATH_STATIC+'/'+file).mtimeMs,
              time: fs.statSync(PATH_STATIC+'/'+file).mtime
            })
          }
        }
      )
      fs.writeFile(path.resolve(__dirname,'../assets/time.js'), "export default "+JSON.stringify(timeList), (err) => {
            if(err){
              console.log(err)
            }else{
              console.log("文件修改时间写入成功！")
            }
      })
    });
  }
}

module.exports = GetFileMakeTime