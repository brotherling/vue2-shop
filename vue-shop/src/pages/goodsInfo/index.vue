<template>
    <div class="goodsInfo-container">
        <!-- 轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
               <swiper-box :swipe="goodsSwipes"></swiper-box>
            </div>
        </div>
        <!-- 商品购买区 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:<span>￥{{goodsInfo.market_price}}</span>
                        销售价:<span class="sell">￥{{goodsInfo.sell_price}}</span>
                    </p>
                    <div class="numbox">
                        购买数量:
                        <input type="button" value="-" class="btn-left"
                        @click="buyCount >= 2 && buyCount--"
                        :disabled="buyCount == 1">

                        <input type="number" v-model="buyCount" @change="buyMax">

                        <input type="button" value="+"
                        @click="buyCount < goodsInfo.stock_quantity && buyCount++"
                        :disabled="buyCount == goodsInfo.stock_quantity">
                    </div>
                    <div>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </div>
                </div>
            </div>   
        </div>

        <!-- 商品信息区 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-msg">
                    <p>商品货号: {{goodsInfo.goods_no}}</p>
                    <p>库存情况: {{goodsInfo.stock_quantity}}</p>
                    <p>上架时间: {{goodsInfo.add_time | dataFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain >图文介绍</mt-button>
                <mt-button type="danger" size="large" plain>商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            goodsInfo: {},
            goodsSwipes: [],
            buyCount: 1
        }
    },
    created() {
        this.getgoodsInfo();
        this.getgoodsSwipe()
    },
    methods: {
        getgoodsInfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result => {
                // console.log(result)
                if(result.body.status == 0){
                    this.goodsInfo = result.body.message[0]
                }
            })
        },
        buyMax(){
            if(this.buyCount > this.goodsInfo.stock_quantity){
                this.buyCount = this.goodsInfo.stock_quantity
            }
        },
        getgoodsSwipe(){
            this.$http.get('api/getthumimages/'+this.id).then(result => {
                console.log(result)
                if(result.body.status == 0){
                    this.goodsSwipes = result.body.message
                }
            })
        }
    },
}
</script>

<style lang="less">
    .goodsInfo-container{
        background-color: #eee;
        .price{
            .sell{
                color: red;
                font-size: 16px;
                font-weight: bold;
            }
        }
        .numbox{
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
        .mui-card-content-msg{
            padding-left: 15px;
            padding-top: 10px;
        }
        .mui-card-footer{
            display: block;
            button{
                margin: 15px 0;    
            }
        }
    }
</style>
