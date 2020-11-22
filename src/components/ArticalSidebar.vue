<template>
  <div class="sidebar">
    <li class="doc" 
    v-for="(item,index) in list" 
    :key="item+index"
    @click="goto(index)"
    >
      {{item}}
    </li>
    
  </div>
</template>

<script>
export default {
  name: 'ArticalSidebar',
  props: {
    list:{
      type: Array
    }
  },
  data() {
    return {
     anchor: []
    }
  },
  created() {
  },
  updated() {
    this.anchor = []
    for(let item of this.list){
     this.anchor.push(document.getElementById(item).offsetTop)
   }
  },
  methods: {
    goto(index) {
      let timer = null,
          _that = this,
          flag = true,
          target = this.anchor[index]+250,
          max = document.body.scrollHeight - document.documentElement.clientHeight;
      flag = document.documentElement.scrollTop<target;
      console.log(this.anchor)
      timer = requestAnimationFrame(function fn() {
              if (flag&&document.documentElement.scrollTop < target) {
                if(document.documentElement.scrollTop+50 >= max||document.documentElement.scrollTop+50 >= target){
                  document.documentElement.scrollTop=Math.min(target, max);
                  cancelAnimationFrame(timer);
                }else{
                  document.documentElement.scrollTop += Math.max((target-document.documentElement.scrollTop)/30,50);
                  document.body.scrollTop = document.documentElement.scrollTop;
                  timer = requestAnimationFrame(fn);
                }
              } else if(!flag&&document.documentElement.scrollTop > target){
                  if(document.documentElement.scrollTop-50 < target){
                    document.documentElement.scrollTop=target;
                    cancelAnimationFrame(timer);
                  }else{
                    document.documentElement.scrollTop -= Math.max((document.documentElement.scrollTop-target)/30,50);
                    document.body.scrollTop = document.documentElement.scrollTop ;    
                    timer = requestAnimationFrame(fn);
                  }
              } else {
                cancelAnimationFrame(timer);
              }
            });
    }
  },
  computed: {
    
  },
  

}
</script>


<style scoped>
  .sidebar {
    width: 300px;
    background-color: rgb(255, 255, 255);
    margin: 0 10px;
    padding: 20px 20px;
    border-radius: 20px;
		box-shadow:0px 4px 9px rgb(208, 204, 204);
    font-size: 1.2rem;
    position: absolute;
    margin-left: -310px;
  }
  .doc {
    height: 2rem;
  }
</style>