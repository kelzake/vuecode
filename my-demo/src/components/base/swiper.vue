<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in recommendList" :style="{ backgroundImage: 'url(' + str.picUrl + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>
<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	export default {
		props:['recommendList'],
		mounted(){
			console.log('mouted',this);
			var swiper = new Swiper('.swiper-container',{
				pagination: '.swiper-pagination',
				paginationClickable: true,
				loop: true,
				speed: 600,
				autoplay: 4000,
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
				onTouchEnd: function() {
				    swiper.startAutoplay()
				}
			});
		}
	}
</script>
<style lang="scss">
	.swiper-container {
	        width: 100%;
	        height: 10rem;
	        .swiper-wrapper {
	            width: 100%;
	            height: 100%;
	        }
	        .swiper-slide {
	            background-position: center;
	            background-size: cover;
	            width: 100%;
	            height: 100%;
	            img {
	                width: 100%;
	                height: 100%;
	            }
	        }
	        .swiper-pagination-bullet {
	            width:0.833rem;
	            height: 0.833rem;
	            display: inline-block;
	            border-radius:8px;
	            background: rgba(255,255,255,0.8);
	        }
	        .swiper-pagination-white .swiper-pagination-bullet-active{
	        	width: 1.8rem;
	        }
	    }
</style>