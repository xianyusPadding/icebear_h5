<template>
  <div class="mHeader">
    <a class="main" @click="dropDown()">
      <img src="https://icebear.me/Public/Mobile/images/assets/mlogo.png" alt="白熊logo">
      <h3>{{dataItem.title}}</h3>
      <i class="el-icon-arrow-down"></i>
    </a>
    <div class="menu" v-show="dropShow">
      <ul>
        <li v-for="(item, index) in data" v-show="item.title != dataItem.title">
          <a :href="item.url">
            <i class="el-icon-menu"></i>
            <p>{{item.title}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    props: {
      dataItem: {
        type: Object,
        default: {}
      },
      data: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        dropShow: false
      }
    },
    created () {
    },
    methods: {
      dropDown() {
        this.dropShow = !this.dropShow
      }
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>
  .mHeader{
    width: 100%;
    height: 44px;
    background: #FFD734;
    text-align: center;
    line-height: 44px;
    .main{ 
      img{
        height: 34px;
      }
      h3{
        display: inline;
        font-size: 14px;
      }
    }
    .menu{
      border-bottom: 1px solid #eee;
      z-index: 2;
      li{
        width: 33%;
        margin-top: 10px;
        display: inline-block;
        a{
          display: inline-block;
          i{
            width: 50px;
            height: 50px;
            border: 1px solid #eee;
            border-radius: 25px;
            display: inline-block;
            line-height: 50px;
          }
          p{
            margin-top: 10px;
            line-height: 20px;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
