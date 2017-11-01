<template>
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
</template>

<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>
  .inPush-Wrapper{
    background-color: #F6EBD6;
    padding: 10px 10px;
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
</style>