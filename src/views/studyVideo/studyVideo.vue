<template>
  <div id="studyVideo">
    <m-header :dataItem='studyVideo' :data='data'></m-header>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="通用课程" name="first">通用课程</el-tab-pane>
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
    .el-tabs__nav{
      width: 100%;
      .el-tabs__item{
        width: 50%;
        text-align: center;
      }
    }
  }
</style>
