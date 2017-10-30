<template>
  <div id="enterprise">
    <m-header :dataItem='enterprise' :data='data'></m-header>
  </div>
</template>

<script type='text/ecmascript-6'>
  import mHeader from '@/components/mHeader/mHeader'
  import {getData} from 'api/data'
  import {ERR_OK} from 'api/config'

  export default {
    data () {
      return {
        enterprise: {},
        data: {}
      }
    },
    components: {
      mHeader
    },
    created () {
      this._getEnterprise()
      this._getData()
    },
    methods: {
      _getEnterprise() {
        getData().then((res) => {
          if (res.errno === ERR_OK) {
            this.enterprise = res.data.enterprise
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

<style lang='scss' scoped='' type='text/css'>

</style>
