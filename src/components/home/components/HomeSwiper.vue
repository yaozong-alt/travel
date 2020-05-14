<template>
<div class="warp">
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
<div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
    export default {
        name:"HomeSwiper",
        data(){
            return {
                swiperOptions: {
                    pagination:".swiper-pagination",
                    loop:true,//可以实现循环拉取;
                    autoplay:3000,//自动,
                    //speed:3000,速度
                },
                swiperList: [
                    {id:1001,imgUrl:"//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"},
                    {id:1002,imgUrl:"//imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg"}
                ]
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
