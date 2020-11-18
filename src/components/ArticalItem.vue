<template>
  <div class="blog-item" @click="clickItem">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
    <div class="time">{{ updateTime }}</div>
    
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
    content:'',
    time: '',
  },
  methods: {
    clickItem() {
      this.$emit('item-click', this.index)
    }
  },
  computed: {
    updateTime() {
      return 'updated: '+this.time.replace(/T/, ' ').slice(0, -5)
    }
  }
}
</script>


<style scoped>
  .blog-item {
    height: 160px;
    color: white;
    background-color: rgba(87, 167, 187, .8);
    margin: 20px 0;
    border-radius: 10px;
    padding: 10px;
    position: relative;
  }
  .title{
    margin:10px 0 0 10px;
    font-size: 1.5em;
  }
  .time {
    font-size:0.8em;
    position: absolute;
    right: 10px;
    bottom: 8px;
  }
</style>