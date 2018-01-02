<template>
	<div class="recommend">
		<scroll class="recommend-content" :data="discList">
			<div>
				<div class="swipe-wrap">
					<swiper :recommendList="recommendList"></swiper>
				</div>
				<div class="recommend-list">
					<h1 class="list-title">热门歌单推荐</h1>
					<ul>
						<li class="item" v-for="item in discList" @click="selectItem(item)">
							<div class="icon">
								<img v-lazy="item.imgurl" width="60" height="60" alt="">
							</div>
							<div class="text">
							  <h2 class="name" v-html="item.creator.name"></h2>
							  <p class="desc" v-html="item.dissname"></p>
							</div>
						</li>
					</ul>
				</div>
			</div>	
		</scroll>
		<router-view></router-view>
	</div>
</template>
<script>
	import swiper from "../../components/base/swiper.vue"
	import scroll from '../../components/base/scroll.vue'
	import {getRecommend,getDiscList} from "../../api/recommend.js"
	import { ERR_OK } from '../../api/config'
	import { mapMutations } from 'vuex'
	export default {
		created (){
			this._getRecommend();
			this._getDiscList();
		},
		data(){
			return {
				recommendList : [],
				discList : [],
			}
		},
		methods : {
			_getRecommend() {
				getRecommend().then(res =>{
					this.recommendList = res.data.slider
				})
			},
			_getDiscList() {
			  getDiscList().then(res => {
			    if (res.code === ERR_OK) {
			      this.discList = res.data.list
			    }
			  })
			},
			selectItem(item){
				this.$router.push({
					path:'/main/music/recommend/' + item.dissid
				})
				this.setDisc(item)
				console.log(this.$store.state.disc)
			},
			setDisc(item){
				this.$store.commit('setDisc',item)
			}
			
		},
		components:{
			swiper,
			scroll
		}
	}
</script>
