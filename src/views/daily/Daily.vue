<template>
  <div class="daily">
    <Artical :path="'/daily/'"
    :articalLists="artical"
    >
    </Artical>
  </div>
</template>

<script>
import Artical from '@components/Artical'

import {articalLists} from '@/ultis/fileAPI'

export default {
  name: 'Daily',
  components: {
    Artical
  },
  data() {
    return {
      artical: articalLists
    }
  },
  methods: {
    
  },
  computed: {
  }
}
</script>

<style scoped>
  
</style>