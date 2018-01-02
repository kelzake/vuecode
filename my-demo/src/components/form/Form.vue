<template>
	<div class="form-inline">
		<div class="form-group">
			<label>开始时间</label>
			<el-time-picker v-model="startime" suffix-icon="el-icon-date" :picker-options="{selectableRange:'18:30:00 - 20:30:00'}"></el-time-picker>
		</div>
		<div class="form-group">
			<label>结束时间</label>
			<el-time-picker v-model="endtime" suffix-icon="el-icon-date"></el-time-picker>
		</div>
		<div class="form-group">
			<label for="">帐号</label>
			<input type="text">
		</div>
		<div class="form-group">
			<label for="">密码</label>
			<input type="text">
		</div>
		<div class="form-group">
			<label for="">公司营业执照</label>
			<input type="text">
		</div>
		<el-button type="primary">主要按钮</el-button>
	 	<el-button type="success">成功按钮</el-button>	
	</div>
</template>
<script>
	export default{
		data(){
			return {
				item:null,
				startime:new Date(2016, 9, 10, 18, 40),
				endtime: new Date(2016, 9, 10, 18, 40),
			}
		},
		created(){
			this.getData()
			.then((data)=>{
				console.log(data)
				return this.getData2()
			})
			.then((data)=>{
				console.log(data)
				return this.getData3()
			})
			.then((data)=>{
				console.log(data)
			})

		},
		methods:{
			getData(){
				/*this.$axios.get('http://localhost:3000/lolteam').then((response)=>{
				})*/
				var p = new Promise(function(resolve, reject){
				    //做一些异步操作
				    setTimeout(function(){
				        console.log('执行完成1');
				        resolve('一些数据1');
				    }, 2000);
				});
				return p
			},
			getData2(){
				var p = new Promise(function(resolve, reject){
				    //做一些异步操作
				    setTimeout(function(){
				        console.log('执行完成2');
				        resolve('一些数据2');
				    }, 2000);
				});
				return p
			},
			getData3(){
				var p = new Promise(function(resolve, reject){
				    //做一些异步操作
				    setTimeout(function(){
				        console.log('执行完成3');
				        resolve('一些数据3');
				    }, 2000);
				});
				return p
			}
		}
	}
</script>





