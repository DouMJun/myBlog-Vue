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
    height: 15rem;
    color: rgb(0, 0, 0);
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 1px 1px 8px #e4e7e9,
              -1px -1px 8px #dce5eb;
    margin: 20px 10px;
    border-radius: 10px;
    padding: 10px 10px;
    position: relative;

    transition: box-shadow 0.3s;
  }

  .blog-item:hover {
    box-shadow: 5px 5px 15PX #c3cbd0,
              -5px -5px 15px #c3cbd0;
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
    margin: 0 10px 10px 0;
  }
</style>