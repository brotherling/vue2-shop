<template>
    <div class="goodsList-container">
        <!-- 使用编程式导航 -->
        <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="toDetail(item.id)">
            <img :src="item.img_url" alt>
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>

        <!-- 加载更多 -->
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goodsList: [],
            page: 1
        }
    },
    created() {
        this.getgoodsList()
    },
    methods: {
        getgoodsList(){
            this.$http.get('api/getgoods?pageindex='+this.page).then(result => {
                if(result.body.status === 0){
                    this.goodsList = this.goodsList.concat(result.body.message)
                }
            })
        },
        getMore(){
            this.page++;
            this.getgoodsList();
        },
        toDetail(id){
            // 注意: 区分this.$route 和 this.$router 这两个对象
            // this.$route是路由 参数对象, 所有路由中的参数 params query 都属于它
            // this.$router是路由 导航对象, 用它可以方便的 使用JS代码, 实现路由的前进,后退,跳转到新的url地址
            this.$router.push('/home/goodsInfo/' + id)
            
        }
    },
}
</script>

<style lang="less">
    .goodsList-container{
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         padding: 7px;
        .goods-item{
           width: 49%;
           border: 1px solid #ccc;
           box-shadow: 0 0 8px #ccc;
           margin: 4px 0;
           padding: 2px;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           min-height: 293px;
           img{
               width: 100%;
           }
           .title{
               font-size: 14px;
           }
           .info{
               background-color: #eee;
               p{
                   margin: 0;
                   padding: 5px;
               }
               .price{
                   .now{
                       color: red;
                       font-weight: bold;
                       font-size: 16px;
                   }
                   .old{
                       text-decoration: line-through;
                       font-size: 12px;
                       margin-left: 10px; 
                   }
               }
               .sell{
                   display: flex;
                   justify-content: space-between;
                   font-size: 13px;
               }
           }
        }
    }
</style>
