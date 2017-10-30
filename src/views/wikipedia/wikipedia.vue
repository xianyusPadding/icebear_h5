<template>
  <div id="wikipedia">
    <m-header :dataItem='wikipedia' :data='data'></m-header>
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

<style lang='scss' scoped='' type='text/css'>

</style>
