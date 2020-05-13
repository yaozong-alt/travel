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
                //出现下面的滚动小圆点;
                swiperOptions:{
                    pagination:".swiper-pagination" ,
                    loop:true,//可以实现左右的一个循环;
                    autoplay: 3000,  //每隔3秒自动轮播
                    // speed: 4000, //轮播的速度
                },
                //实现循环滚动:
                swiperList: [
                    {id:10001,imgUrl:"http://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"},
                    {id:10002,imgUrl:"http://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg"}
                ],
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .warp>>>.swiper-pagination-bullet-active
        background #ffffff
    .warp
        overflow hidden
        width 100%
        height 0
        padding-bottom 31.25%
        // background:#ccc
        .swiper-img
            width 100%
</style>
