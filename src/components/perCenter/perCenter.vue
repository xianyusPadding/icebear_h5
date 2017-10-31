<template>
  <div class="perCenter">
    <div class="userInfo">
      <div class="avater">
        <img :src="data.avater" alt="">
      </div>
      <div class="desc">
        <span class="userName">{{data.name}}</span>
        <span class="vip" v-if="data.vip">白熊VIP</span>
        <span class="integal">我的积分：{{data.integal}}</span>
      </div>
    </div>
    <ul class="content">
      <li class="item" v-for="value in about"><a href="#">
        {{value.title}}
        <i class="el-icon-arrow-right"></i>
      </a></li>
    </ul>

    <span class="loginStatus">
      退出登录
    </span>
  </div>
</template>

<script type='text/ecmascript-6'>
  import {getData} from 'api/perCenter'
  import {ERR_OK} from 'api/config'
  export default {
    data () {
      return {
        data: {},
        about: {}
      }
    },
    created() {
      this._getData()
    },
    methods: {
      _getData() {
        getData().then((res) => {
          if (res.errno === ERR_OK) {
            this.data = res.data
            this.about = res.data.about
          }
        })
      }
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>
  .perCenter{
    background-color: #F9F9F9;
    color: #482929;
    .userInfo{
      height: 70px;
      padding: 34px 0 38px 30px;
      .avater{
        margin-right: 30px;
        float: left;
        img{
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
      }
      .desc{
        float: left;
        span{
          display: block;
        }
        .userName{
          font-weight: 600;
          font-size: 18px;
        }
        .vip{
          color: #6769C9;
          line-height: 30px;
        }
        .integal{
          color: #9B9B9B;
          font-size: 15px;
        }
      }
    }
    .content{
      background-color: #fff;
      .item{
        height: 50px;
        padding-left: 30px;
        border-top: 1px solid #eee;
        a{
          line-height: 50px;
          font-size: 14px;
        }
        &:last-child{
          border-bottom: 1px solid #eee;
        }
        .el-icon-arrow-right{
          line-height: 50px;
          padding-right: 20px;
          float: right;
        }
      }
    }
    .loginStatus{
      height: 50px;
      margin-top: 50px;
      line-height: 50px;
      display: block;
      text-align: center;
      background-color: #fff;
      border: 1px solid #eee;
    }
  }
</style>