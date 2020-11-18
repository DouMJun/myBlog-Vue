import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
const Main = () => import('@views/main/Main')
const Blog = () => import('@views/blog/Blog')
const Daily = () => import('@views/daily/Daily')
const Archive = () => import('@views/archive/Archive')
const Special = () => import('@views/special/Special')
const Comment = () => import('@views/comment/Comment')
const AboutMe = () => import('@views/aboutme/AboutMe')

import {children} from '@/ultis/fileAPI'
import test from '@assets/artical/test.md'

Vue.use(VueRouter)






const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {path: '',redirect: 'blog'},
      {path: 'blog',component: Blog, children: children},
      {path: 'daily',component: Daily, children: children},
      {path: 'special',component: Special},
      {path: 'archive',component: Archive},
      {path: 'comment',component: Comment},
      {path: 'aboutme',component: AboutMe},
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
