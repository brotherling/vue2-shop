// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入发送请求插件
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置请求根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899'
// 设置post请求返回数据格式
Vue.http.options.emulateJSON = true;

// css reset css初始化
import './styles/common.css'

// 引入mui的css文件
import './libs/mui/css/mui.css'
// 导入扩展图标样式
import './libs/mui/css/icons-extra.css'

// 1.导入mint-ui和其样式文件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 2.安装mint-ui(全局注册所有的组件)
Vue.use(MintUI)

//导入格式化时间插件
import moment from 'moment'
// 定义全局过滤器,改变时间格式
Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

//导入缩略图插件
import VuePreview from 'vue-pic-preview'
Vue.use(VuePreview)

// 全局导入评论组件
import comment from './components/comment.vue'
Vue.component('comment-box', comment)

// 全局导入轮播图组件
import swiper from './components/swiper.vue'
Vue.component('swiper-box', swiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
