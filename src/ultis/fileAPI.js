const files = require.context('@assets/artical/', false, /\.md$/)


import Time from "@assets/time"

const componentLists = []
const children = []
const pathLists = []
const articalLists = []

files.keys().forEach((item, index) => {
  let routeItem = {}
  let articalInfo = {}
  let time = {}
  let path = item.slice(2, -3)
  let component = files(files.keys()[index]).default

  let timeCom = 0
  routeItem.path = path
  routeItem.component = component

  timeCom = Time[index].timeCom
  time = Time[index].time

  articalInfo.timeCom = timeCom
  articalInfo.title = component.data.title
  articalInfo.path = path
  articalInfo.time = time
  articalInfo.sidebar = component.data.sidebar
  
  articalLists.push(articalInfo)
  children.push(routeItem)
})
articalLists.sort((a, b) => {
  return b.timeCom - a.timeCom
})



export {children, articalLists} 