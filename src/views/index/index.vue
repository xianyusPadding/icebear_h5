<template>
  <div id="navbar">
    <div class="logo">
      <img src="https://icebear.me/Public/Home/images/logo-y.png" alt="白熊求职">
    </div>
    <navbar></navbar>
  </div>
</template>

<script type='text/ecmascript-6'>
  import Navbar from '@/components/navbar/navbar'
  export default {
    data () {
      return {
      }
    },
    components: {
      Navbar
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>
  #navbar{
    width: 100%;
    .logo{
      height: 74px;
      background-color: #FFD733;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        height: 54px;
      }
    }
  } 
</style>
