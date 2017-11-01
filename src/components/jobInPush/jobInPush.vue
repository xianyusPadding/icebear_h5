<template>
  <div class="inPush">
    <div class="header">
      <div class="main">
        <i class="el-icon-document" @click="dropCond()"> 筛选条件</i>
      </div>
      <transition name="fade">
        <div v-show="condShow" class="menu">
          <div class="conditions">
            <el-button type="info" class="">全职</el-button>
            <el-button type="info">实习</el-button>
            <el-button type="info">未截止</el-button>
            <el-button type="info">未兑换</el-button>
          </div>
          <el-button-group class="btn-groupSize">
            <el-button plain class="btn-Size">取消</el-button>
            <el-button plain class="btn-Size">确定</el-button>
          </el-button-group>
        </div>
      </transition>
    </div>
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
        condShow: false
      }
    },
    methods: {
      dropCond() {
        this.condShow = !this.condShow
      }
    },
    components: {
      inpushWrapper
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>
  .inPush{
    color: #482929;
    .header{
      height: 40px;
      .main{
        height: 40px;
        border-bottom: 1px solid #eee;
        i{
          margin-left: 10px;
          line-height: 40px;
          font-size: 14px;
          font-weight: 700;
        }
      }
      .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
      }
      .fade-enter, .fade-leave-to {
        opacity: 0
      }
      .menu{
        position: relative;
        z-index: 3;
        background-color: #fff;
        .conditions{
          padding: 20px 30px;
          button{
            background-color: #eee; 
          }
        }
        .btn-groupSize{
          width: 100%;
          .btn-Size{
            width: 50%;
            margin: 0;
          }
        }
        button{
          color: #482929;
        }
      }
    }
    
  }
</style>