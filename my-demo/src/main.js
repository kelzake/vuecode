import Vue from 'vue'
import store from './vuex/store'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import App from './App.vue'
import Main from './components/Main.vue'
import Axios from 'axios'
import ElementUI from 'element-ui'
import VueLazyLoad from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueLazyLoad, {
  loading: require('./components/music/mhead/logo@2x.png')
})
Vue.prototype.$axios = Axios


const router = new VueRouter({
	mode: 'history',
	routes
})

//全局导航钩子
router.beforeEach((to,from,next)=>{
	//判断该路由是否需要权限
	if(to.meta.requireAuth){
		// 通过vuex state获取当前的token是否存在
		// console.log(isEmptyObject(store.state.user)) 
		if(!isEmptyObject(store.state.user)){
			next();
		}else{
			next({
				path:'/login'
				//query:{redirect:to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
			})
		}
	}else{
		next();
	}
})

function isEmptyObject(obj){
	for(var key in obj){
		return false
	}
	return true;
}

new Vue({
 	store, 
 	router,
 	el: '#app',
 	render: h => h(App)
 })
