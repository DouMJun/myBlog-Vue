<template>
  <div class="blog" >
    <div class="button-container" v-show="!isShow">
      <div @click="back"
      class="return">
        <img src="@assets/img/return.svg" alt="">
      </div>
    </div>
    <BlogItem 
    v-for="(item, index) in articalLists" 
    :key="index"
    :title="item.title"
    :index="index"
    :time="item.time"
    @item-click="itemClick"
    v-show="isShow"/>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogItem from './child/BlogItem'
import "highlight.js/styles/darcula.css";
import {articalLists} from '@/ultis/fileAPI'


export default {
  name: 'Blog',
  components: {
    BlogItem,
  },
  data() {
    return {
      articalLists: articalLists
    }
  },
  created(){
    
  },
  methods: {
    itemClick(key) {
      this.$router.push(articalLists[key].path)
    },
    back() {
      this.$router.replace('/blog/')
    }
  },
  computed: {
    isShow() {
      return this.$route.path === "/blog/"
    }
  }
  
}
</script>

<style scoped>
  .blog {
    width: 800px;
    background-color: white;
    color:black;
    
    padding:20px 20px 10px;
    border-radius: 20px;

    box-shadow:0px 4px 9px grey;;
  }
  
  .return {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background: url('../../assets/img/return.svg');
    /* box-shadow:  2px 2px 2px #dfdfdf, 
             -2px -2px 2px#ffffff; */
    border-right: #dfdfdf solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .return img {
    width: 80%;
    height: 80%;
  }

  .button-container {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background: #fafafa;
    box-shadow:  2px 2px 2px #dfdfdf, 
             -2px -2px 2px#ffffff;
  }



</style>
