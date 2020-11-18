<template>
  <div class="blog" >
    <Artical :path="'/blog/'"
    :articalLists="articalLists"
    >
    </Artical>
  </div>
</template>

<script>
import Artical from '@components/Artical'
import {articalLists} from '@/ultis/fileAPI'


export default {
  name: 'Blog',
  components: {
    Artical
  },
  data() {
    return {
      articalLists: articalLists
    }
  },
  
}
</script>

<style scoped>
</style>
