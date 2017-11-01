<template>
  <div class="schoolRecruit">
    <div class="header">
      <div class="main">
        <i class="el-icon-document main-icon" @click="dropCond()"> 全部行业</i>
        <el-tabs v-model="activeName" class="fl-tabs">
          <el-tab-pane label="全职" name="1">
            <full-time></full-time>
          </el-tab-pane>
          <el-tab-pane label="实习" name="2">
            <internships></internships>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import fullTime from '@/components/schoolRecruit/fullTime'
  import internships from '@/components/schoolRecruit/internships'
  
  export default {
    data () {
      return {
        activeName: '1'
      }
    },
    components: {
      fullTime,
      internships
    }
  }
</script>

<style lang='scss' type='text/css'>
  #enterprise .schoolRecruit{
    color: #482929;
    .header{
      .main{
        height: 40px;
        border-bottom: 1px solid #eee;
        .main-icon{
          margin-left: 10px;
          line-height: 40px;
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
    .el-tabs{
      .el-tabs__header{
        width: 200px;
        position: fixed;
        top: 40px;
        margin-left: calc(100% - 200px);
        .el-tabs__item{
          width: 50%;
        }
      }
    }
  }
  .el-tabs__content{
    overflow: visible;
  }
</style>