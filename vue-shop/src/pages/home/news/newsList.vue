<template>
    <div class="newslist-container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in lists" :key="item.id">
                <router-link :to="'/home/newsInfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h2>{{ item.title }}</h2>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{item.add_time | dataFormat}}</span>
                            <span>点击: {{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            
        </ul>
    </div>
</template>



<script>
export default {
    data(){
        return {
            lists: []
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList(){
            this.$http.get('api/getnewslist').then(result => {
               if(result.body.status === 0){
                    this.lists = result.body.message
               }
            })
        }
    },
}
</script>

<style lang="less">
    .newslist-container{
        h2{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
