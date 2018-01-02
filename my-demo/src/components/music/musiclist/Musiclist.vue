<template>
	<div class="music-list">
		<!--返回上一层-->
		<div class="back" @click="back">
			<i class="icon-back"></i>
		</div>
		<!-- 歌曲信息 -->
		<h1 class="title" v-html="title"></h1>
		<div class="bg-image" ref="bgImage" :style="bgStyle">
			<div class="play-wrapper">
				<div ref="playBtn" v-show="songs.length > 0" class="play">
					<i class="icon-play"></i>
					<span class="text">随机播放全部</span>
				</div>
			</div>
		</div>
		<!--歌曲列表-->
		<scroll :data="songs" 
		  @scroll="scroll"
		  :listen-scroll="listenScroll" 
		  :probe-type="probeType" 
		  class="list" 
		  ref="list"
		>
		  <div class="song-list-wrapper">
		    <song-list 
		      :songs="songs" 
		      :rank="rank" 
		      @select="selectItem"
		    >
		    </song-list>
		  </div>
		  <!--加载loading-->
		 <!--  <div v-show="!songs.length" class="loading-container">
		   <loading></loading>
		 </div> -->
		</scroll>
	</div>
</template>
<script>
	import {mapActions} from 'vuex'
	import scroll from '../../base/scroll.vue'
	import songlist from '../base/songList.vue'
	export default {
		props : {
			bgImage:{
				type: String,
				default: '',
			},
			songs: {
			  type: Array,
			  default: []
			},
			title: {
			  type: String,
			  default: ''
			},
			rank: {
			  type: Boolean,
			  default: false
			}
		},
		methods :{
			back : function(){
				this.$router.back()
			},
			selectItem(item){
				this.selectPlay({
					list : this.songs,
					index
				})		
			},
		},
		computed : {
			// 加载歌手背景图片
			bgStyle() {
			  return 'background-image:url('+this.bgImage+')'
			}
		},
		components : {
			scroll
		},
		...mapActions([
			'selectPlay'
		])
	}
</script>