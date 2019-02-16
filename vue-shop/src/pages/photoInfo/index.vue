<template>
    <div class="photoInfo-container">
        <h3>{{imgInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间: {{imgInfo.add_time | dataFormat}}</span>
            <span>点击: {{imgInfo.click}}次</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
        <div class="thumbs">
           <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
        </div>
        <!-- 图片内容区域 -->
        <div class="content" v-html="imgInfo.content"></div>

        <!-- 评论区   放置评论组件 -->
        <comment-box :id=this.id></comment-box>
    </div>
</template>


<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            imgInfo: {},
            list: []
        }
    },
    created() {
        this.getimgInfo();
        this.getthum()
    },
    methods: {
        getimgInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result => {
                // console.log(result)
                if (result.body.status === 0) {
                    this.imgInfo = result.body.message[0]
                }
            })
        },
        getthum(){
            this.$http.get('api/getthumimages/'+this.id).then(result => {
                // console.log(result) 
                if (result.body.status === 0) {
                    //循环每个图片.添加宽和高
                    result.body.message.forEach(item => {
                        item.w = 600
                        item.h = 400
                    });
                    this.list = result.body.message
                }
            })
        }
    },
}
</script>

<style lang="less">
    .photoInfo-container{
        padding: 3px;
        h3 {
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content {
            font-size: 13px;
            line-height: 30px;
        }
         .thumbs{
            img{
                margin: 10px;
                box-shadow: 0 0 8px #999;
            }
        }
    }
</style>
