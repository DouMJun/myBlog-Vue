<template>
  <div class="nav-bar">
      <router-link to="/main/home/" tag="div" class="item" v-if="!isMobile">首页</router-link>
      <router-link to="/main/blog/" tag="div" class="item" v-if="!isMobile">博客</router-link>
      <!-- <router-link to="/daily/" tag="div">日常</router-link> -->
      <!-- <router-link to="/special/" tag="div" class="item">特别</router-link>
      <router-link to="/archive/" tag="div" class="item">归档</router-link>
      <router-link to="/comment/" tag="div" class="item">留言</router-link> -->
      <router-link to="/main/aboutme/" tag="div" class="item" v-if="!isMobile">关于我</router-link>
      <div class="button" 
      v-if="isMobile"
      @click="showMenu">
        <img src="../assets/img/menu.svg" alt="">
      </div>
      <div class="menu" v-show="isShowMenu">
        <router-link to="/main/home/" tag="div" class="item" v-if="isMobile">首页</router-link>
        <router-link to="/main/blog/" tag="div" class="item" v-if="isMobile">博客</router-link>
        <!-- <router-link to="/daily/" tag="div">日常</router-link> -->
        <!-- <router-link to="/special/" tag="div" class="item">特别</router-link>
        <router-link to="/archive/" tag="div" class="item">归档</router-link>
        <router-link to="/comment/" tag="div" class="item">留言</router-link> -->
        <router-link to="/main/aboutme/" tag="div" class="item" v-if="isMobile">关于我</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return {
      isShowMenu:false
    }
  },
  methods: {
    routeTo(id) {
      console.log(id);
    }
  },
  computed: {
    isMobile() {
      return window.screen.width < 980
    }
  },
  methods: {
    showMenu() {
      this.isShowMenu = !this.isShowMenu
    }
  }

}
</script>

<style scoped>
  router-link {
    width: 200px;
  }
  .nav-bar {
    margin-top: 0px;
    display: flex;
    justify-content: flex-end;
    height: 50px;
    background-color: rgba(255, 255, 255, .5);
    color: white;
    position: inherit;
    box-shadow:1px 1px 5px lightslategray;
  }
  .content {
    width: 40%;
    display: flex;
    background-color: rgb(230, 230, 230);
    color: lightslategray;
  }
  .item {
    width: 8rem;
    flex: 0 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
  }
  .router-link-active {
    color:rgb(42, 145, 204);
  }
  @media screen and (max-width: 980px) {
    .button {
      display: flex;
      align-items: center;
    }
    .button img {
      margin: .5rem 1rem;
      width: 3rem;
      height: 80%;
    }
    .nav-bar {
      width: 100vw;
      height: 3rem;
      color: black;
      position: relative;
      box-shadow:0px 0px 0px ;
    }
    .menu {
      position: absolute;
      right: 0;
      top: 3rem;
      overflow: hidden;
    }
    .item {
      height: 2rem;
      width: 6rem;
      background-color: rgba(255,255,255,.5);
    }
  }
</style>