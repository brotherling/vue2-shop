<template>
  <div id="app">
		<!-- 头部 -->
    <mt-header fixed title="固定在顶部"></mt-header>

		<!-- 组件区域 -->
    <transition name="fade">
			<router-view></router-view>
		</transition>

    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="car">{{$store.getters.sumCount}}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
	name: 'App',
	
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		padding-top: 40px;
		padding-bottom: 50px;
		overflow: hidden;
	}
	.fade-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.fade-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.fade-enter-active,
	.fade-leave-active{
		transition: all .5s ease;
	}
	.mint-header.is-fixed{
			z-index: 3;
	}
	.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
	}
	.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
	}
	.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
	}
</style>
