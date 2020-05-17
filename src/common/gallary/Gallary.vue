<template>
    <div class="container" @click="haddleGallaryClick">
        <div class="warp">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="swiper-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Gallary",
        props: {
            imgs:Array,
        },
        data () {
            return {
                    swiperOptions: {
                    pagination:".swiper-pagination",
                    paginationType: 'fraction',
                    loop:true,//可以实现循环拉取;
                    observer:true,
                    observeParents:true,
                    // autoplay:3000,//自动,
                    // speed:3000,
                }
            }
        },
        methods: {
            haddleGallaryClick () {
               this.$emit("close")
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit 
    .container
        display flex
        flex-direction  column
        justify-content center
        position fixed
        z-index 99
        top 0
        right 0
        bottom 0
        left 0
        background #000
        color  #ffffff 
        .warp
           //overflow hidden
           width 100%
           height 0
           padding-bottom 100%
           .swiper-img
                width 100%
            .swiper-pagination
                color #ffffff
                // border 1px solid red
                // width 100%
                // height .4rem
                bottom -1rem
                z-index 100
</style>