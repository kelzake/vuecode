<template>
	<div class="container-mobile">
		<m-head></m-head>
		<tab></tab>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<!-- 播放器全局组件 -->
			
	</div>
</template>
<script>
	import mHead from "./mhead/mHead.vue";
	import Tab from "./tab/Tab.vue";
	export default{
		components:{
			mHead,
			Tab
		}
	}
</script>