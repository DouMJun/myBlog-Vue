const files = require.context('@assets/artical/', false, /\.md$/)
const test = require('@assets/artical/')

const componentLists = []
const children = []
const pathLists = []
const articalLists = []
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