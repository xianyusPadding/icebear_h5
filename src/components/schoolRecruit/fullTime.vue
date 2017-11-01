<template>
  <div class="fullTime">
    <ul class="sec-Wrapper">
      <li class="sec-item">
        <a href="#">
          <img width="50" height="50" src="https://icebear-1-001.oss-cn-shenzhen.aliyuncs.com/uploads/picture/2017-10-18/59e71432eb26b.png" alt="无印良品">
          <span class="name">无印良品</span>
        </a>
        <span class="time">已开始(2017-11-02截止)</span>
        <i class="el-icon-star-off icon"></i>
      </li>
    </ul>
  </div>
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
  .fullTime{
    color: #482929;
    .sec-Wrapper{
      .sec-item{
        position: relative;
        min-height: 50px;
        padding: 15px 20px;
        border-bottom: 1px solid #eee;
        .name{
          position: absolute;
          top: 15px;
          left: 80px;
          font-weight: 700;
          color: #482929;
        }
        .time{
          position: absolute;
          top: 46px;
          left: 80px;
          font-size: 14px;
          color:#82B547;
        }
        .icon{
          position: absolute;
          top: 27px;
          right: 15px;
          font-size: 25px;
        }
      }
    }
  }
</style>