<template>
  <div id="studyView">
    <h1>学院视频</h1>
    <m-header :index='index'></m-header>
  </div>
</template>

<script type='text/ecmascript-6'>
  import mHeader from '@/components/mHeader/mHeader'

  export default {
    data () {
      return {
        index: 1
      }
    },
    components: {
      mHeader
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>

</style>
