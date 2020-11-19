<template>
  <div>
    {{list}}
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
  created(){
    console.log(this.list)
  }

}
</script>


<style scoped>

</style>