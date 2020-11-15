const exec = require('child_process').exec; //异步子进程
const execSync = require('child_process').execSync; //同步子进程
const fs = require('fs'); //文件读取模块
const { join } = require('path');

const reg = /Date:([\s\S]*?)\n/
const timeList = []

fs.readdir('D:/webPractice/myBlog/myblog/src/assets/artical/', (err, files) => {
  files.forEach((item, index) => {
    if(item.search(/\.md*/) !== -1){
      let commitTime = {};
      let time = execSync('git log -p src/assets/artical/'+item).toString().match(reg)[1].trim().split(' ')
      commitTime.file = item
      commitTime.year = time[4]
      commitTime.month = time[1]
      commitTime.day = time[2]
      commitTime.hour = time[3]
      timeList.push(commitTime)
    }
  })
  fs.writeFile('./src/assets/time.js', "export default "+JSON.stringify(timeList), (err) => {
    if(err){
      console.log(err)
    }else{
      console.log("文件修改时间写入成功！")
    }
    
  })
})




