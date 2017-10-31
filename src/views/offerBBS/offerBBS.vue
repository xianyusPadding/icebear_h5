<template>
  <div id="offerBBS">
    <m-header :dataItem='offerBBS' :data='data'></m-header>
    <div class="tab">
      <el-tabs v-model="activeName" tab-position="bottom">
        <el-tab-pane label="首页" name="0">
          <bbs-index></bbs-index>
        </el-tab-pane>
        <el-tab-pane label="我的提问" name="1">
          <bbs-question></bbs-question>
        </el-tab-pane>
        <el-tab-pane label="我的收藏" name="2">
          <bbs-collect></bbs-collect>
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
  import bbsIndex from '@/components/bbsIndex/bbsIndex'
  import bbsQuestion from '@/components/bbsQuestion/bbsQuestion'
  import bbsCollect from '@/components/bbsCollect/bbsCollect'
  import perCenter from '@/components/perCenter/perCenter'
  import {getData} from 'api/data'
  import {ERR_OK} from 'api/config'

  export default {
    data () {
      return {
        offerBBS: {},
        data: {},
        tabs: {},
        activeName: 0
      }
    },
    components: {
      mHeader,
      bbsIndex,
      bbsQuestion,
      bbsCollect,
      perCenter
    },
    created () {
      this._getData()
    },
    methods: {
      _getData() {
        getData().then((res) => {
          if (res.errno === ERR_OK) {
            this.data = res.data
            this.offerBBS = res.data.offerBBS
            this.tabs = res.data.offerBBS.tabs
          }
        })
      }
    }
  }
</script>

<style lang='scss' type='text/css'>
  #offerBBS{
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
