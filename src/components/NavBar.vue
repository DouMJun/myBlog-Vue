<template>
  <div class="nav-bar">
    <!-- <div class="content"> -->
      <router-link to="/home/" tag="div" class="item">首页</router-link>
      <router-link to="/main/blog/" tag="div" class="item">博客</router-link>
      <!-- <router-link to="/daily/" tag="div">日常</router-link> -->
      <!-- <router-link to="/special/" tag="div" class="item">特别</router-link>
      <router-link to="/archive/" tag="div" class="item">归档</router-link>
      <router-link to="/comment/" tag="div" class="item">留言</router-link> -->
      <router-link to="/main/aboutme/" tag="div" class="item">关于我</router-link>
    <!-- </div> -->
    
  </div>
</template>

<script>
export default {
  name: 'NavBar'  ,
  methods: {
    routeTo(id) {
      console.log(id);
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

    box-shadow:1px 1px 5px lightslategray;
  }

  .content {
    width: 40%;
    display: flex;
    background-color: rgb(230, 230, 230);
    color: lightslategray;
  }
  .item{
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
</style>