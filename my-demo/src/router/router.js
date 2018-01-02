import Main from '../components/Main.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Company from '../components/Company.vue'
import personal from '../components/Personal.vue'

//导航模块
import Table from '../components/table/Table.vue'
import Form from '../components/form/Form.vue'
import Layout from '../components/layout/Layout.vue'
import Music from '../components/music/Music.vue'
	// 音乐子模块
	import Recommend from '../views/recommend/index.vue'
		// 推荐子模块
		import recommendDetail from '../views/recommend/details.vue'
	import Rank from '../views/rank/index.vue'
	import Search from '../views/search/index.vue'
	import Singer from '../views/singer/index.vue'
export default [
		{
			path:'/',
			redirect:'login'
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/main', 
			meta: {
				//meta元素
				 requireAuth: true,  
			},           
			component: Main,
			children:[
				{
					path:'table',
					component:Table
				},
				{
					path:'layout',
					component:Layout
				},
				{
					path:'form',
					component:Form
				},
				{
					path:'music',
					component:Music,
					children:[
						{
							path:'recommend',
							component:Recommend,
							children:[
								{
									path:':id',
									component : recommendDetail
								}
							]
						},
						{
							path:'rank',
							component:Rank
						},
						{
							path:'search',
							component:Search
						},
						{
							path:'singer',
							component:Singer
						}
					]
				},
			]
		},
		{
			path:'/register',
			component:Register,
			children:[
				{
					path:'company',
					component:Company
				},
				{
					path:'personal',
					component:personal
				},
			]
		}
	]