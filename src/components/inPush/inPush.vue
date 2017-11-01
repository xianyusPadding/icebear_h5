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
      <ul class="inPush-Wrapper">
        <li class="inPush-item">
          <div class="left">
            <img src="https://icebear-1-001.oss-cn-shenzhen.aliyuncs.com/uploads/picture/2017-08-09/598ad1eb722a6.jpg" alt="58集团">
            <span class="label">直通面试</span>
          </div>
          <div class="right">
            <span>58集团</span>
            <span>内推名额 200个</span>
            <span>职位数量 27个</span>
            <span>全职</span>
            <span>截取日期：2016-11-30</span>
          </div>
          <div class="bottom">
            <span>国内领先分类信息网站</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
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
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>
  .inPush{
    color: #482929;
    .header{
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
    .section{
      .inPush-Wrapper{
        padding: 10px 30px;
        .inPush-item{
          width: 100%;
          border: 1px solid #ccc;
          padding: 10px;
          display: flex;
          .left{
            flex: 0 0 80px;
            img{
              width: 60px;
            }
            .label{
              display: inline-block;
              border: 1px solid #ccc;
              padding: 3px 5px;
              border-radius: 3px;
            }
          }
          .right{
            flex: 0 0 1;
            align-self: center;
          }
          .bottom{
            
          }
        }
      }
    }
  }
</style>