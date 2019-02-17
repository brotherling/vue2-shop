<template>
    <div class="goodsDesc-container">
        <h3 class="title">{{desc.title}}</h3>
        <hr>
        <div class="content" v-html="desc.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            desc: {}
        }
    },
    created() {
        this.getDesc()
    },
    methods: {
        getDesc(){
            this.$http.get('api/goods/getdesc/'+this.id).then(result => {
                // console.log(result)
                if(result.body.status == 0){
                     this.desc = result.body.message[0]
                }
            });
        }
    },
}
</script>

<style lang="less">
    .goodsDesc-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>
