<template>
  <div id="offerBBS">
    <m-header :dataItem='offerBBS' :data='data'></m-header>
  </div>
</template>

<script type='text/ecmascript-6'>
  import mHeader from '@/components/mHeader/mHeader'
  import {getData} from 'api/data'
  import {ERR_OK} from 'api/config'

  export default {
    data () {
      return {
        offerBBS: {},
        data: {}
      }
    },
    components: {
      mHeader
    },
    created () {
      this._getOfferBBS()
      this._getData()
    },
    methods: {
      _getOfferBBS() {
        getData().then((res) => {
          if (res.errno === ERR_OK) {
            this.offerBBS = res.data.offerBBS
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
