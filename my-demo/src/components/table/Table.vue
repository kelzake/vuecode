<template>
	<div>
		<span class="tb-loading" v-if="loading">
			loading...
		</span>
		<span class="" v-if="error">{{error}}</span>
		<table v-if="post">
			<thead>
				<tr>
					<th>teamname</th>
					<th>top</th>
					<th>juggle</th>
					<th>mid</th>
					<th>adc</th>
					<th>support</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="li in item">
					<td>{{li.teamname}}</td>
					<td>{{li.top}}</td>
					<td>{{li.juggle}}</td>
					<td>{{li.mid}}</td>
					<td>{{li.adc}}</td>
					<td>{{li.support}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				loading:false,
				error:null,
				complete:null,
				item:null
			}
		},
		created(){
			// 组件创建完后获取数据，
			// 此时 data 已经被 observed 了
			this.fetchData()
		},
		watch:{
			// 如果路由有变化，会再次执行该方法
    		'$route': 'fetchData'
		},
		methods:{
			fetchData(){
				this.error = this.post = null
				this.loading = true
				//获取数据
				this.$axios.get('http://localhost:3000/lolteam').then((response)=>{
					if(response.data.length >  0){
						this.loading = this.post = null;
						this.post = true;
						this.item = response.data;
					}else{
						this.post = this.loading = null;
						this.error = "没有数据"
					}
				})
			}
		}
	}
</script>