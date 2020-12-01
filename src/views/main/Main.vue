<template>
  <div class="Main">
    <img src="@assets/img/bgc.png" alt="" class="bgc" v-show="showImg === 1">
    <img src="@assets/img/aboutme.png" alt="" class="bgc" v-show="showImg === 2">
    <img src="@assets/img/homeBgc.jpg" alt="" class="bgc" v-show="showImg === 3">
    <NavBar 
    v-show="navShow"/>
    <div class="content">
      <transition name="home">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
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
  data() {
    return {
      showImg: 3,
      navShow:false
    }
  },
  computed: {

  },
  watch: {
    $route(to, from) {
      if(to.name === 'home'){
        this.navShow = false
      }else{
        this.navShow = true
      }
      if(to.name === 'aboutme'){
        this.showImg = 2
      }else if(to.name === 'home'){
        this.showImg = 3
      }else{
        this.showImg = 1
      }
    }
  }

}
</script>

<style scoped>
  .Main{
    position: relative;
    width: 100vw;
  }
  .content {
    margin-top: 200px;
    display: flex;
    justify-content: center;
  }

  .bgc{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 0;
  }
  
.home-enter-active,
.home-leave-active {
  will-change: transform;
  transition: all 500ms;
  opacity: 1;
  transform: translate(0,0);
}
.home-enter {
  opacity: 0.5;
  transform: translateY(30px)
}
.home-leave {
  opacity: 0.5;
  transform: translateY(-30px)
}

</style>