<template>
  <div class="allProject">
    <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="top">
      <el-tab-pane label="通用课程" name="first">
        <ul class="general-Wrapper">
          <li v-for="item in studyVideo.subject.general" class="item"><a :href="studyVideo.url">
            <img :src='item.img' alt="">
            <span class="item-title">{{item.title}}</span>
          </a></li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="行业课程" name="second">
        <ul class="industry-Wrapper">
          <li v-for="item in studyVideo.subject.industry" class="item"><a :href="studyVideo.url">
            <img :src='item.img' alt="">
            <span class="item-title">{{item.title}}</span>
          </a></li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    props: {
      studyVideo: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        activeName: 'first'
      }
    }
  }
</script>

<style lang='scss' type='text/css'>
  #studyVideo .allProject{
    margin-top: 43px;
    .el-tabs__header{
      top: 40px;
      .el-tabs__item{
        width: 50%;
      }
    }
    .general-Wrapper,.industry-Wrapper{
      background-color: #F6EBD6;
      .item{
        position: relative;
        img{
          width: 100%;
          height:150px;
          margin-bottom: 5px;
        }
        .item-title{
          position: absolute;
          top:50%;
          left:50%;
          color: #fff;
          font-size: 25px;
          -webkit-transform: translate(-50%, -50%);
        }
      }
    }
  }
</style>