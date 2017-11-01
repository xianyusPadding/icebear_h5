<template>
  <div class="myJob">
    <div class="header"></div>
    <div class="section">
      <inpush-wrapper></inpush-wrapper>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import inpushWrapper from '@/components/jobInPush/inpushWrapper'
  export default {
    data () {
      return {
      }
    },
    components: {
      inpushWrapper
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>

</style>