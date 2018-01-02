<template>
	<div class="main-wrap">
		<nav class="side-nav">
			<div class="weather-panel weather-bg-01">
				
			</div>
			<div><img src="../assets/logo.png"></div>
			<ul class="side-nav-ul">
				<router-link tag="li" to="/main/table">表格</router-link>
				<router-link tag="li" to="/main/form">表单</router-link>
				<router-link tag="li" to="/main/layout">排版</router-link>
				<router-link tag="li" to="/main/music">音乐</router-link>
			</ul>
		</nav>
		<div class="main-container">
			<router-view></router-view>	
		</div>	
	</div>
</template>
<script>
	export default {
		computed: {
			user(){
				 //因为在main.js中已经全局注册了store，所以这里直接用this.$直接使用。
				return this.$store.state.user
			}
		}
	}
</script>