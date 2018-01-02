<template>
	<div class="form-reg-wrap">
		<div class="form-reg-logo">
			<div class="login-cloud login-cloud-1"></div>
			<div class="login-cloud login-cloud-2"></div>
			<div class="login-cloud login-cloud-3"></div>
			<span class="form-reg-title">Welcome!</span>
		</div>
		<form class="form-reg-form" autocomplete="off">
			<div class="form-group">
				<input v-model="name" :class="(name==''?'login-input-empty':'')" placeholder="用户名" autocomplete="off"/>
			</div>
			<div class="form-group">
				<input v-model="pwd" type="password" placeholder="密码" autocomplete="off"/>
			</div>
			<button type="button" class="form-reg-btn" @click="isLogin">登陆</button>
		</form>
	</div>	
</template>
	<script>
		export default {
			data() {
				return {
					name:'',
					pwd:'',
					error:''
				}
			},
			computed: {
				user() {
					return this.$store.state.user
				}
			},
			methods:{
				isLogin:function() {
					this.$axios.get('http://localhost:3000/users').then((response) => { 
						//这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
						//注意这里是个难点，Vuex与Vue-Resource结合使用。
						if(response.data != null & response.data.length > 0){ 
							this.$store.commit('isLogin',response.data[0]);
							this.name=''
							this.pwd= ''
							this.$router.push({ path: 'main' }) 
						}else{
							alert('请输入正确的用户名和密码！！！');
							this.name=''
							this.pwd= ''
						}
					}).then((error)=> this.error = error)
				}
			}
		}
	</script>