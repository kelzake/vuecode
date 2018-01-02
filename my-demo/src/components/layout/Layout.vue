<template>
	<div>
		<span>{{count}}</span>
	</div>
</template>
<script>
	export default{
		computed:{
			count(){
				return this.$store.state.count
			}
		}
	}
</script>