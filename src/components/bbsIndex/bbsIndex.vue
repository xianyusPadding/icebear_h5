<template>
  <div class="bbsIndex">
    <!-- <div class="header">
      <div class="left">
        <i class="el-icon-document"> 全部行业</i>
      </div> 
      <div class="right"> -->
        <el-tabs v-model="activeName" tab-position="top">
          <el-tab-pane label="问答" name="first">问答</el-tab-pane>
          <el-tab-pane label="资料" name="second">资料</el-tab-pane>
        </el-tabs>
      <!-- </div>
    </div> -->
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    props: {
      data: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        activeName: 'first'
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang='scss' type='text/css'>
  #offerBBS .bbsIndex{
    margin-top: 43px;
    color: #482929;
    .el-tabs__header{
      top: 40px;
      .el-tabs__nav-wrap{
        // width: 300px;
      }
      .el-tabs__item{
        width: 50%;
      }
    }
    // .header{
    //   border: 1px solid #eee;
    //   .left{
    //     float: left;
    //     i{
    //       line-height: 40px;
    //       margin-left: 10px;
    //       font-size: 14px;
    //       font-weight: 700;
    //     }
    //   }
    //   .right{
    //     width: 300px;
    //     float: right;
    //   }
    // }
  }
</style>