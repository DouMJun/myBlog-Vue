<template>
  <div class="Main">
    <NavBar />
    <div class="content">
      <div id="block"
      v-show="infoShow"></div>
      <router-view/>
      <MyInfo
      class="myinfo"
      v-show="infoShow"
      />
    </div>
    <BackTop/>
  </div>
</template>

<script>
import NavBar from '@components/NavBar.vue'
import MyInfo from '@components/MyInfo'
import BackTop from '@components/BackTop'
export default {
  name: 'Blog',
  components: {
    NavBar,
    MyInfo,
    BackTop
  },
  computed: {
    infoShow() {
      return this.$route.path === '/main/blog/'
    }
  }

}
</script>

<style scoped>
  .Main{
    background:url('../../assets/img/bgc.png') no-repeat;
    background-size:100% ;
  }
  .content {
    margin-top: 200px;
    display: flex;
    justify-content: center;
  }
  #block {
    width: 300px;
  }
</style>