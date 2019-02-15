<template>
    <div class="photoList-container">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in imgCategory" :key="item.id" @tap="getimgList(item.id)">
                        {{item.title}}
                    </a>   
                </div>
            </div>
        </div>

        <!-- 图片列表区域 -->
        <ul class="img-list">
            <router-link v-for="item in images" :key="item.id" tag="li" :to="'/home/photoInfo/'+item.id">
                <img v-lazy="item.img_url">
                <div class="list">
                    <h1 class="list-title">{{item.title}}</h1>
                    <div class="list-body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>


<script>
import mui from '@/libs/mui/js/mui.min.js'

export default {
    data() {
        return {
            imgCategory: [],
            images: []
        }
    },
    created() {
        this.getimgCategory();
        this.getimgList(0);
    },
    mounted() {
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods: {
        getimgCategory(){
            this.$http.get('api/getimgcategory').then(result => {
                result.body.message.unshift({title: '全部', id:0});
                this.imgCategory = result.body.message
            })
        },
        getimgList(tabId){
            this.$http.get('api/getimages/'+tabId).then(result => {
               this.images = result.body.message
            })
        }
    },
}
</script>

<style lang="less">
    *{
        touch-action: pan-y;
    }
    .photoList-container{
        .img-list{
            list-style: none;
            margin: 0;
            padding: 10px;
            padding-bottom: 0;
            li{
                background-color: #ccc;
                text-align: center;
                margin-bottom: 10px;
                box-shadow: 0 0 9px #999;
                position: relative;
            }
            img {
                width: 100%;
                vertical-align: middle;
            }
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;       
            }
            .list{
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.4);
                max-height: 84px;
                .list-title {
                    font-size: 14px;
                }
                .list-body {
                    font-size: 13px;
                }
            }
        }
    }

</style>
