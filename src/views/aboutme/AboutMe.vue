<template>
  <div class="aboutme">
    <h1>关于我</h1>
    <li>自动化大三本科在读，准备向前端方向发展</li>
    <li>喜欢看动漫，电影，有做过视频剪辑</li>
    <li>常去健身的宅男</li>
    <li>单身生涯已于2020.09.13光荣结束，目前绝赞热恋中</li>
    <li>热爱编程，也会玩一些单片机。</li>
  </div>
</template>


<script>

export default {
  name: 'Aboutme',
  components: {
  }
}
</script>


<style scoped>
  .aboutme {
    position: absolute;
    width: 800px;
    height: 100vh;
    background-color: rgb(255, 255, 255);

    padding:20px 30px;
    border-radius: 20px;

    box-shadow:0px 4px 9px grey;
  }

  li {
    line-height: 2em;
  }
  @media screen and (max-width: 980px)  {
    .aboutme {
      width: 100vw;
      padding:10px 10px;
    }
  }
</style>