<template>
  <div class="blog" >
    <ArticalSidebar
    :list="sidebarListCom"
    v-show="showSidebar"
    :class="{fix: isFixed}"/>
    <Artical 
    :path="'/blog/'"
    :articalLists="articalLists"
    >
    </Artical>
  </div>
</template>

<script>
import Artical from '@components/Artical'
import {articalLists} from '@/ultis/fileAPI'
import ArticalSidebar from '@components/ArticalSidebar'

export default {
  name: 'Blog',
  components: {
    Artical,
    ArticalSidebar
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
      return this.sidebarList
    }
  },
  updated(){

  },
  beforeRouteUpdate(to, from, next) {
    this.sidebarList = [];
    for(let item of this.articalLists){
      (item.path === to.path.replace(/\/[\s\S]*\//,''))&&(this.sidebarList = item.sidebar)
    }
    this.showSidebar = (this.sidebarList.length !== 0)
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
