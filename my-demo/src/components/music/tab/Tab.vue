<template>
	<div class="tab">
		<router-link tag="div" class="tab-item" to="/main/music/recommend">
			<span class="tab-link">推荐</span>
		</router-link>
		<router-link tag="div" class="tab-item" to="/main/music/singer">
			<span class="tab-link">歌手</span>
		</router-link>
		<router-link tag="div" class="tab-item" to="/main/music/rank">
			<span class="tab-link">排行</span>
		</router-link>
		<router-link tag="div" class="tab-item" to="/main/music/search">
			<span class="tab-link">搜索</span>
		</router-link>
	</div>
</template>
<script>
	export default {
		created(){
			this.$router.push({path:'/main/music/recommend'})
		},
	}
</script>