<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'app'
  }
</script>

<style lang='scss' type='text/css'>
.el-tabs__header{
  width: 100%;
  text-align: center;
  .el-tabs__nav{
    width: 100%;
    .el-tabs__item{
      color: #B89D86;
      padding: 0;
    }
    .el-tabs__item.is-active{
      color: #482929
    }
  } 
}
</style>
