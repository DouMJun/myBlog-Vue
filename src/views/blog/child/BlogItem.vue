<template>
  <div class="blog-item" @click="clickItem">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
    
  </div>
</template>


<script>
export default {
  name: 'BlogItem',
  props: {
    title: '',
    index: {
      type: Number,
      default() {
        return -1;
      }
    },
    content:''
  },
  methods: {
    clickItem() {
      this.$emit('item-click', this.index)
    }
  }
}
</script>


<style scoped>
  .blog-item {
    height: 100px;
    color: white;
    background-color: rgba(87, 167, 187, .8);
    margin: 5px 0;
    border-radius: 10px;
    padding: 10px;
  }
</style>