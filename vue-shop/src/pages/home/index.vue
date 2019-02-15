<template>
    <div class="home-componnet">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="( item, index ) in banners" :key="index">
              <a :href="item.url">
                <img :src="item.img">
              </a>
            </mt-swipe-item>    
        </mt-swipe>

        <!-- 九宫格 -->
      
          <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="/home/newsList">
                <img src="../../assets/images/menu1.png">
                <div class="mui-media-body">新闻资讯</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="/home/photoList">
                <img src="../../assets/images/menu2.png">
                <div class="mui-media-body">图片分享</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <a href="#">
                <img src="../../assets/images/menu3.png">
                <div class="mui-media-body">商品购买</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <a href="#">
                <img src="../../assets/images/menu4.png">
                <div class="mui-media-body">留言反馈</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <a href="#">
                <img src="../../assets/images/menu5.png">
                <div class="mui-media-body">视频专区</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <a href="#">
                <img src="../../assets/images/menu6.png">
                <div class="mui-media-body">联系我们</div>
              </a>
            </li>
          </ul>
				
    </div>
</template>
<script>
export default {
  data() {
    return {
      banners: []
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      // this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(result => {
      //   console.log(result.body)
      // });
      // console.log(1);
      // console.log(this)
      this.$http.get("http://www.lovegf.cn:8899/api/getlunbo")
      .then(result => {
        this.banners = result.body.message
      })
    }
  }
}
</script>
<style lang="less">
    .home-componnet{
        .mint-swipe{
            height: 200px;
            .mint-swipe-item{
              img{
                width: 100%;
                height: 100%;
              }
            }
        }
        .mui-grid-9{
          background-color: #fff;
          img{
            width: 80%;
          }
          .mui-table-view-cell{
            border: none;
          }
        }
    }
</style>