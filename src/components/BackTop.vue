<template>
  <div class="back" @click="back" v-show="isShow">
    <img src="@assets/img/back.svg" alt="">
  </div>
</template>


<script>
export default {
  name: 'BackTop',
  props: {
    
  },
  data(){
    return {
      showHeight: 400,
      isShow: false
    }
  },
  mounted(){
    window.addEventListener("scroll",this.show,true);
  },
  methods: {
    back() {
      let backTop = null,
      _that = this;
      backTop = requestAnimationFrame(function fn() {
              if(document.documentElement.scrollTop > 0){
                document.documentElement.scrollTop -= Math.max((document.documentElement.scrollTop)/10,50);
                document.body.scrollTop = document.documentElement.scrollTop ;    
                backTop = requestAnimationFrame(fn);
              } else {
                cancelAnimationFrame(back);
              }
            });
    },
    show(){
      this.isShow = document.documentElement.scrollTop > this.showHeight
    }
  },
  computed: {
  },
  destroyed(){
    window.removeEventListener("scroll",this.show);
  }
}
</script>

<style scoped>
.back{
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  position: fixed;
  bottom: 20px;
  right: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.back img{
  width: 130%;
  height: 130%;
}

</style>