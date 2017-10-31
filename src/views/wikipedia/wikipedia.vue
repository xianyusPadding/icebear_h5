<template>
  <div id="wikipedia">
    <m-header :dataItem='wikipedia' :data='data'></m-header>
    <div class="tab">
      <el-tabs v-model="activeName" tab-position="top">
        <el-tab-pane label="职业描述" name="0">
        </el-tab-pane>
        <el-tab-pane label="职业发展" name="1">
        </el-tab-pane>
        <el-tab-pane label="热门问题" name="2">
        </el-tab-pane>
        <el-tab-pane label="锦囊下载" name="3">
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import mHeader from '@/components/mHeader/mHeader'
  import {getData} from 'api/data'
  import {ERR_OK} from 'api/config'

  export default {
    data () {
      return {
        wikipedia: {},
        data: {}
      }
    },
    components: {
      mHeader
    },
    created () {
      this._getWikipedia()
      this._getData()
    },
    methods: {
      _getWikipedia() {
        getData().then((res) => {
          if (res.errno === ERR_OK) {
            this.wikipedia = res.data.wikipedia
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
  #wikipedia{
    .tab{
      .el-tabs__header{
        .el-tabs__item{
          width: 25%;
        }
      }
    }
  }
</style>
