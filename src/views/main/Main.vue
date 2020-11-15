<template>
  <div class="Main">
    <NavBar />
    <div class="content">
      <MyInfo/>
      <router-view/>
      <MyInfo/>
    </div>
  </div>
</template>

<script>
import NavBar from '@components/NavBar.vue'
import MyInfo from '@components/MyInfo'

export default {
  name: 'Blog',
  components: {
    NavBar,
    MyInfo
  }

}
</script>

<style scoped>
  .content {
    margin-top: 200px;
    display: flex;
    justify-content: center;
  }
</style>