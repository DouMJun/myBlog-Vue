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
      this.$router.replace('/main/')
    }
  }
}
</script>
<style scoped>
  .home {

  }
  h1 {
    width: 20rem;
    display: inline-block;
    text-align: center;
  }
  .intro {
    margin: 10rem auto;
    width: 15rem;
    background-color: rgb(248, 106, 106);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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
</style>
