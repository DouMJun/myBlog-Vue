<template>
  <div class="blog" >
    <div class="button-container" v-show="!isShow">
      <div @click="back"
      class="return">
        <img src="@assets/img/return.svg" alt="">
      </div>
    </div>
    <ArticalItem
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
import "highlight.js/styles/darcula.css";
import ArticalItem from '@components/ArticalItem'

export default {
  name: 'Artical',
  components: {
    ArticalItem
  },
  props: {
    path: {
      type: String,
      default() {
        return ''
      }
    },
    articalLists: {
      type:Array,
      default(){
        return []
      }
    }
  },
  created(){
  },
  methods: {
    back() {
      this.$router.replace(this.path)
    },
    itemClick(key) {
      this.$router.push(this.articalLists[key].path)
    },
  },
  computed: {
    isShow() {
      return this.$route.path === this.path || this.$route.path === this.path.slice(0,-1)
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

    box-shadow:0px 4px 9px grey;
  }
  
  .return {
    width: 50px;
    height: 50px;
    border-radius: 5px;
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
