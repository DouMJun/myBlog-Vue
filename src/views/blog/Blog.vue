<template>
  <div class="blog" >
    <ArticalSidebar
    :list="getList"
    v-show="showSidebar"/>
    <Artical :path="'/blog/'"
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
      articalLists: articalLists
    }
  },
  created() {

  },
  computed: {
    getList() {
      for(let item of this.articalLists){
        if(item.path === this.$route.path.replace(/\/[\s\S]*\//,'')){
          return item.sidebar
        }
      }
      return []
    },
    showSidebar(){
      return this.getList !== []
    }
  },
  
}
</script>

<style scoped>
</style>
