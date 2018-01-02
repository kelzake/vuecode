<template>
    <transition name="slide">
        <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>  
    </transition>  
</template>
<script>
    import MusicList from '../../components/music/musicList/musicList.vue'
    export default {
        computed: {
          title() {
            return this.$store.state.disc.dissname
          },
          bgImage() {
            return this.$store.state.disc.imgurl
          },
        },
        data(){
            return {
                songs:[]
            }
        },
        components:{
            MusicList
        }
    }
</script>
<style>
    .slide-enter-active, .slide-leave-active {
      transition: all 0.3s
    }
    .slide-enter, .slide-leave-to {
      transform: translate3d(100%, 0, 0)
    }
</style>
