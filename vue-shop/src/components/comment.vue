<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="putComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="i">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dataFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
                </div>
            </div>
        </div>
        <!-- 加载更多 -->
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import moment from 'moment'
export default {
    data() {
        return {
            pageIndex: 1,  //默认加载1页
            comments: [],
            msg: ''
        }
    },
    created() {
        this.getComment()
    },
    props: ['id'],
    methods: {
        getComment(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex)
            .then(result => {

                if(result.body.status === 0){
                    //每当获取新数据后, 不能把老数据覆盖,而是在后面拼接
                    this.comments = this.comments.concat(result.body.message)
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getComment();
        },
        putComment(){
            if(this.msg.trim().length === 0){
                Toast('评论内容不能为空')
            }else{
                this.$http.post("api/postcomment/"+this.id, {"content": this.msg})
                .then(result => {
                    // console.log(result)
                    if(result.body.status === 0){
                        // 该方法会造成页面刷新
                        // this.comments = [];
                        // this.pageIndex = 1;
                        // this.getComment();
                        // this.msg = '';

                        // 采用数组拼接,把获得的数据拼接到已有数据的第一位
                        const newComment = {
                            "add_time": moment().format('YYYY-MM-DD HH:mm:ss'),
                            "content": this.msg,
                            "user_name": "匿名用户"
                        };
                        this.comments.unshift(newComment);
                        this.msg = '';
                    }
                })
            }
        }
    },
    
}
</script>

<style lang="less">
    .comment-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>
