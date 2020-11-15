<template>
  <div class="nav-bar">
    <div class="content">
      <router-link to="/blog/" tag="div">博客</router-link>
      <router-link to="/daily/" tag="div">日常</router-link>
      <router-link to="/special/" tag="div">特别</router-link>
      <router-link to="/archive/" tag="div">归档</router-link>
      <router-link to="/comment/" tag="div">留言</router-link>
      <router-link to="/about-me/" tag="div">关于我</router-link>
    </div>
    
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
  .nav-bar {
    margin-top: 0px;
    display: flex;
    justify-content: right;
    height: 50px;
    background-color: rgba(255, 255, 255, .5);
    color: white;
    flex-direction: row-reverse;

    box-shadow:1px 1px 5px lightslategray;
  }

  .content {
    width: 40%;
    display: flex;
    background-color: rgb(230, 230, 230);
    color: lightslategray;
  }
  .content div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
  }
</style>