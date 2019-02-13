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
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
