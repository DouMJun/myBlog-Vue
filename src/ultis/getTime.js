const exec = require('child_process').exec; //异步子进程
const execSync = require('child_process').execSync; //同步子进程
const fs = require('fs'); //文件读取模块
const { join } = require('path');

const PATH_STATIC = 'D:/webPractice/myBlog/myblog/src/assets/artical/'

const timeList = []
fs.readdirSync(PATH_STATIC).forEach((file) => { 
  if(file.search(/\.md*/) !== -1){
    timeList.push(
      {
        file: file,
        timeCom: fs.statSync(PATH_STATIC+file).mtimeMs,
        time: fs.statSync(PATH_STATIC+file).mtime
      }
    )
    }
  }
)
fs.writeFile('./src/assets/time.js', "export default "+JSON.stringify(timeList), (err) => {
      if(err){
        console.log(err)
      }else{
        console.log("文件修改时间写入成功！")
      }
})

module.exports = JSON.stringify(timeList)



