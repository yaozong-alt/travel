<template>
<div class="warp">
  <swiper :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
<div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
    export default {
        name:"HomeSwiper",
        props:{
            list : Array
        },
        data(){
            return {
                swiperOptions: {
                    pagination:".swiper-pagination",
                    loop:true,//可以实现循环拉取;
                    autoplay:3000,//自动,
                    speed:3000,
                },
            }
        },
        computed:{
            showSwiper () {
                return this.list.length
            }
        }
       
    }
</script>

<style lang="stylus" scoped>
  .warp>>>.swiper-pagination-bullet-active
       background #fff
    .warp
        overflow hidden
        width 100%
        height 0
        padding-bottom 30.5%
        // background:#ccc
        .swiper-img
            width 100%
</style>
