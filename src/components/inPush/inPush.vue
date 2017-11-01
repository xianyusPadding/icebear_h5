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
          <div class="top">
            <img src="https://icebear-1-001.oss-cn-shenzhen.aliyuncs.com/uploads/picture/2017-08-09/598ad1eb722a6.jpg" alt="58集团">
            <div class="baseData">
              <span class="name">58集团</span>
              <span class="places">内推名额 200个</span>
              <span class="quantity">职位数量 27个</span>
            </div>
            <span class="label">全职</span>
          </div>
          <div class="middle">
            <span class="label">直通面试</span>
            <span class="date">截取日期：2016-11-30</span>
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
    .section{
      background-color: #F6EBD6;
      .inPush-Wrapper{
        padding: 10px 30px;
        .inPush-item{
          width: calc(100% - 20px);
          height: 190px;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 10px;
          background-color: #fff;
          .top{
            position: relative;
            img{
              width: 90px;
              height: 90px;
              float: left;
            }
            .baseData{
              float: left;
              span{
                display: block;
                margin-left: 10px;
                line-height: 20px;
              }
              .name{
                margin-bottom: 20px;
                font-size: 14px;
              }
            }
            .label{
              position: absolute;
              right: 0px;
              top: 45px;
              padding: 3px 8px;
              background-color: #cadfb1;
            }
          }
          .middle{
            margin-top: 110px;
            .label{
              padding: 3px 12px;
              border: 1px solid #482929;
              border-radius: 4px;
            }
            .date{
              float: right;
            }
          }
          .bottom{
            width: 100%;
            // background-color: #eee;
            margin-top: 40px;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>