<template>
  <div class="shopcar-container">
    <div class="mui-card" v-for="item in shopCarList" :key="item.id">
      <mt-switch ></mt-switch>
      <div class="mui-card-header mui-card-media">
        <img :src="item.thumb_path" />
        <div class="mui-media-body">
          <h1>{{item.title}}</h1>
          <div class="mui-media-bottom">
            <div class="price">￥{{item.sell_price}}</div>
            <div class="numbox">
              <input type="button" value="-" class="btn-left">
              <input type="number" :value="$store.getters.getCount[item.id]">
              <input type="button" value="+">
            </div>
            <div class="del">
              <a href="#">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data(){
    return {
      shopCarList: []
    }
  },
  created() {
    this.getShopCarList()
  },
  methods: {
    getShopCarList(){
      let idArr = [];
      this.$store.state.car.forEach(item =>{
        idArr.push(item.id)
      })
      if (idArr.length <= 0) {
        return;
      }
      this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(result => {
        if(result.body.status === 0){
          this.shopCarList = result.body.message
        }
      })
    }
  },
}
</script>

<style lang="less">
  .shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .mui-card{
      display: flex;
      align-items: center;
      img{
        width: 60px;
        height: 90px;
      }
      .mui-media-body{
        width: 240px;
       
        h1{
          font-size: 13px;
        }
        .mui-media-bottom{
          display: flex;
          .price{
            line-height: 35px;
            color: red;
            font-weight: 700;
          }
          .numbox{
            margin: 0 10px;
            height: 40px;
            display: flex;
            align-items: center;
            input{
                width: 35px;
                height: 35px;
                margin: 0;
                padding: 0;
                font-size: 16px;
                text-align: center;
            }
            .btn-left{
                margin-left: 5px;
            }
          }
          .del{
            line-height: 35px;
          }
        }
      }
      
      
    }
  }
</style>
