<template>
  <div class="home">
    <div class="intro">
      <h1>欢迎访问</h1>
      <div class="enter" @click="enter">进入博客</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  methods: {
    enter() {
      console.log(this.$route)
      this.$router.replace('/main/blog/')
    }
  }
}
</script>
<style scoped>
  .home {
    margin-top: -200px;
    height: 100vh;
    width: 100vw;
    background-image: url('/src/assets/img/homeBgc.jpg');
    background-size:100% ;
    background-attachment: fixed;

    overflow: hidden;
    position: absolute;
    z-index: 1;
  }
  h1 {
    width: 20rem;
    display: inline-block;
    text-align: center;
  }
  .intro {
    position: relative;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    height: 200px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: aliceblue;
    z-index: 1;
  }
 .enter {
   height: 3rem;
   width: 10rem;

   background-color: rgb(35, 245, 217);
   color: rgb(255, 255, 255);
   border-radius: 1rem;

   display: flex;
   justify-content: center;
   align-items: center;
 }
 .bgc {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: 0;
 }
</style>
