<template>
  <div id="studyVideo">
    <m-header :dataItem='studyVideo' :data='data'></m-header>
    <div class="tab">
      <el-tabs v-model="activeName" tab-position="bottom">
        <el-tab-pane label="全部课程" name="0">
          <sv-all-project :studyVideo='studyVideo'></sv-all-project>
        </el-tab-pane>
        <el-tab-pane label="我的课程" name="1">
        </el-tab-pane>
        <el-tab-pane label="个人中心" name="2">
          <per-center></per-center>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import mHeader from '@/components/mHeader/mHeader'
  import svAllProject from '@/components/svAllProject/svAllProject'
  import perCenter from '@/components/perCenter/perCenter'
  import {getData} from 'api/data'
  import {ERR_OK} from 'api/config'

  export default {
    data () {
      return {
        studyVideo: {},
        data: {},
        activeName: 0
      }
    },
    components: {
      mHeader,
      svAllProject,
      perCenter
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
    .tab{
      .el-tabs__header{
        position: fixed;
        bottom: 0px;
        margin-bottom: 0px;
        border-top: 1px solid #eee;
        margin-top: 5px;
        .el-tabs__item{
          width: 33%;
        }
      }
    }
  }
</style>
