<template>
  <div id="app">
    <router-view></router-view>
   
  </div>
</template>
<script>
export default {
  name: 'App',
  metaInfo: {
      title: 'This is the test',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
      ]
  },
}
</script>
<style>
  @import "~@assets/css/base.css";
</style>
