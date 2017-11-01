<template>
  <div id="enterprise">
    <m-header :dataItem='applyJob' :data='data'></m-header>
    <div class="tab">
      <el-tabs v-model="activeName" tab-position="bottom">
        <el-tab-pane label="内推" name="0">
          <inPush></inPush>
        </el-tab-pane>
        <el-tab-pane label="校招实习" name="1">
        </el-tab-pane>
        <el-tab-pane label="我的求职" name="2">
        </el-tab-pane>
        <el-tab-pane label="个人中心" name="3">
          <per-center></per-center>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import mHeader from '@/components/mHeader/mHeader'
  import perCenter from '@/components/perCenter/perCenter'
  import inPush from '@/components/inPush/inPush'
  import {getData} from 'api/data'
  import {ERR_OK} from 'api/config'

  export default {
    data () {
      return {
        applyJob: {},
        data: {},
        activeName: 0
      }
    },
    components: {
      mHeader,
      perCenter,
      inPush
    },
    created () {
      this._getApplyJob()
      this._getData()
    },
    methods: {
      _getApplyJob() {
        getData().then((res) => {
          if (res.errno === ERR_OK) {
            this.applyJob = res.data.applyJob
          }
        })
      },
      _getData() {
        getData().then((res) => {
          if (res.errno === ERR_OK) {
            this.data = res.data
          }
        })
      }
    }
  }
</script>

<style lang='scss' type='text/css'>
  #enterprise{
    .tab{
      .el-tabs__header{
        position: fixed;
        bottom: 0px;
        margin-bottom: 0px;
        border-top: 1px solid #eee;
        margin-top: 5px;
        .el-tabs__item{
          width: 25%;
        }
      }
    }
  }
</style>
