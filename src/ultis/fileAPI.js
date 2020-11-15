const files = require.context('@assets/artical/', false, /\.md$/)
import Time from "@assets/time.js"


const test = require('@assets/artical/')

const componentLists = []
const children = []
const pathLists = []
const articalLists = []

console.log(Time)
files.keys().forEach((item, index) => {
  let routeItem = {}
  let articalInfo = {}
  let time = {}
  let path = item.slice(2, -3)
  let component = files(files.keys()[index]).default
  let title = component.data.title
  
  routeItem.path = path
  routeItem.component = component
  time.year = Time[index].year
  time.month = Time[index].month
  time.day = Time[index].day
  time.hour = Time[index].hour

  articalInfo.title = title
  articalInfo.path = path
  articalInfo.time = time

  articalLists.push(articalInfo)
  children.push(routeItem)
})
articalLists.sort((a, b) => {
  if(parseInt(a.time.year) === parseInt(b.time.year)){
    if(parseInt(a.time.month) === parseInt(b.time.month)){
      if(parseInt(a.time.day) === parseInt(b.time.day)){
        if((parseInt(a.time.hour.replace(':', ''))) === parseInt(b.time.hour.replace(':', ''))){
          return 0
        }else{
          return parseInt(b.time.hour.replace(':', '')) - parseInt(a.time.hour.replace(':', ''))
        }
      }else{
        return parseInt(b.time.day) - parseInt(a.time.day)
      }
    }else{
      return parseInt(b.time.month) - parseInt(a.time.month)
    }
  }else{
    return parseInt(b.time.year) === parseInt(a.time.year)
  }

})



export {children, articalLists} 