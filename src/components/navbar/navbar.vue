<template>
  <section class="tab">
    <router-link tab="div" class="tab-item" to="/studyVideo">
      <h3>学院视频</h3>
      <img src="https://icebear.me/Public/Mobile/images/home_academy.png" alt="学院视频">
    </router-link>
    <router-link tab="div" class="tab-item" to="/offerBBS">
      <h3>求职BBS</h3>
      <img src="https://icebear.me/Public/Mobile/images/home_bbs.png" alt="求职BBS">
    </router-link>
    <router-link tab="div" class="tab-item" to="/enterprise">
      <h3>名企求职</h3>
      <img src="https://icebear.me/Public/Mobile/images/home_job.png" alt="名企求职">
    </router-link>
    <router-link tab="div" class="tab-item" to="/wikipedia">
      <h3>在线百科</h3>
      <img src="https://icebear.me/Public/Mobile/images/home_baike.png" alt="在线百科">
    </router-link>
  </section>
</template>

<script type='text/ecmascript-6'>
</script>

<style lang='scss' scoped='' type='text/css'>
  .tab{
    .tab-item{
      width: 100%;
      height: -webkit-calc((100vh - 74px)/4);
      display: block;
      background-color: #82b547;
      color: #fff;
      position: relative;
      h3{
        position: absolute;
        top: 24px;
        left: 38px;
        display: inline-block;
        font-size: 1.5rem;
      }
      img{
        max-height: 100px;
        position: absolute;
        bottom: 0px;
        right: 0px;
      }
      &:nth-child(2){
        background-color: #482929;
      }
      &:nth-child(3){
        background-color: #6769C9;
      }
      &:nth-child(4){
        background-color: #F5A623;
      }
    }
  }
</style>
