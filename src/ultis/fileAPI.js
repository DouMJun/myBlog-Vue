const files = require.context('@assets/artical/', false, /\.md$/)
import Time from "@assets/time.js"


const test = require('@assets/artical/')
// const fileTime = Array.from(Time)
const componentLists = []
const children = []
const pathLists = []
const articalLists = []

console.log( Time)
files.keys().forEach((item, index) => {
  let routeItem = {}
  let articalInfo = {}

  let path = item.slice(2, -3)
  let component = files(files.keys()[index]).default
  let title = component.data.title
  
  routeItem.path = path
  routeItem.component = component

  articalInfo.title = title
  articalInfo.path = path

  articalLists.push(articalInfo)
  children.push(routeItem)
})



export {children, articalLists} 