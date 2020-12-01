import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('@views/main/Main')
const Blog = () => import('@views/blog/Blog')
const Daily = () => import('@views/daily/Daily')
const Archive = () => import('@views/archive/Archive')
const Special = () => import('@views/special/Special')
const Comment = () => import('@views/comment/Comment')
const AboutMe = () => import('@views/aboutme/AboutMe')
const Home = () => import('@views/home/Home')
import {children} from '@/ultis/fileAPI'

Vue.use(VueRouter)






const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {path: '/',redirect: 'home'},
      {path: 'blog',name: 'blog',component: Blog, children: children},
      //{path: 'daily',component: Daily, children: children},
      {path: 'special',component: Special},
      {path: 'archive',component: Archive},
      {path: 'comment',component: Comment},
      {
        path: 'aboutme',
        name: 'aboutme',
        component: AboutMe
      },
      {
        path: 'home',
        name: 'home',
        component: Home,
      },
    ]
  },

  {
    path:'/',
    redirect: '/main/home'
  }
  
]

const router = new VueRouter({
  routes
})

export default router
