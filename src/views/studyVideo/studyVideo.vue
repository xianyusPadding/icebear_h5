<template>
  <div id="studyVideo">
    <m-header :dataItem='studyVideo' :data='data'></m-header>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="通用课程" name="first">
        <ul class="general-Wrapper">
          <li v-for="item in studyVideo.subject.general" class="item"><a :href="studyVideo.url">
            <img :src='item.img' alt="">
            <span class="item-title">{{item.title}}</span>
          </a></li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="行业课程" name="second">行业课程</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type='text/ecmascript-6'>
  import mHeader from '@/components/mHeader/mHeader'
  import {getData} from 'api/data'
  import {ERR_OK} from 'api/config'

  export default {
    data () {
      return {
        studyVideo: {},
        data: {},
        activeName: 'first'
      }
    },
    components: {
      mHeader
    },
    created () {
      this._getStudyVideo()
      this._getData()
    },
    methods: {
      _getStudyVideo() {
        getData().then((res) => {
          if (res.errno === ERR_OK) {
            this.studyVideo = res.data.studyVideo
          }
        })
      },
      _getData() {
        getData().then((res) => {
          if (res.errno === ERR_OK) {
            this.data = res.data
          }
        })
      },
      handleClick(tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style lang='scss' type='text/css'>
  #studyVideo{
    .el-tabs__header{
      margin-bottom: 5px;
    }
    .el-tabs__nav{
      width: 100%;
      .el-tabs__item{
        width: 50%;
        text-align: center;
        color: #B89D86;
        font-weight: 700;
      }
      .el-tabs__item.is-active{
        color: #482929
      }
    }
    .general-Wrapper{
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
