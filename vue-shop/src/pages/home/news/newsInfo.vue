<template>
    <div class="newsInfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{info.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间: {{info.add_time | dataFormat}}</span>
            <span>点击: {{info.click}}次</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content" v-html="info.content"></div>

        <!-- 评论区域 -->
        <comment-box :id=this.id></comment-box>
    </div>
</template>

<script>
    // 引入评论组件
    // import comment from '@/components/comment.vue'
export default {
    data(){
        return {
            id: this.$route.params.id,
            info: {}
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result => {
                // console.log(result)
                if(result.body.status === 0){
                    this.info = result.body.message[0]
                }else{
                    Toast('获取数据失败')
                }
            })
        }
    },
}
</script>

<style lang="less">
    .newsInfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            color: #226aff;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>
