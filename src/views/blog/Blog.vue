<template>
  <div class="blog" >
    <ArticalSidebar
    :list="sidebarListCom"
    v-show="showSidebar"
    :class="{fix: isFixed}"/>
    <Artical 
    :path="'/main/blog/'"
    :articalLists="articalLists"
    >
    </Artical>
    <MyInfo
      class="myinfo"
    />
  </div>
</template>

<script>
import MyInfo from '@components/MyInfo'
import Artical from '@components/Artical'
import {articalLists} from '@/ultis/fileAPI'
import ArticalSidebar from '@components/ArticalSidebar'

export default {
  name: 'Blog',
  components: {
    Artical,
    ArticalSidebar,
    MyInfo
  },
  data() {
    return {
      articalLists: articalLists,
      showSidebar: false,
      isFixed: false,
      sidebarList: []
    }
  },
  created() {
    window.addEventListener("scroll",this.ifFixed,true);
  },
  methods: {
    ifFixed() {
      let that = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed = scrollTop>250-70
    }
  },
  computed: {
    sidebarListCom() {
      this.sidebarList = [];
    for(let item of this.articalLists){
      (item.path === this.$route.path.replace(/\/[\s\S]*\//,''))&&(this.sidebarList = item.sidebar)
    }
    this.showSidebar = (this.sidebarList.length !== 0)
      return this.sidebarList
    }
  },
  beforeRouteUpdate(to, from, next) {
      let  _that = this;
      let backTop = requestAnimationFrame(function fn() {
              if(document.documentElement.scrollTop > 0){
                document.documentElement.scrollTop -= Math.max((document.documentElement.scrollTop)/10,50);
                document.body.scrollTop = document.documentElement.scrollTop ;    
                backTop = requestAnimationFrame(fn);
              } else {
                cancelAnimationFrame(backTop);
              }
            });
    next()
  },
  destroyed(){
    window.addEventListener("scroll",this.ifFixed);
  }
}
</script>

<style scoped>
.blog{
  position: relative;
}
.fix {
  position: fixed;
  top: 70px;
}
</style>
