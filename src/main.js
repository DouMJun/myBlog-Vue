import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import highlight from 'highlight.js'



// Vue.use(highlight);
Vue.config.productionTip = false

// Vue.directive('highlight', (el) => {
//   let blocks = el.querySelectorAll('pre code')
//   blocks.forEach((block) => {
//     highlight.highlightBlock(block)
//   })
// })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
