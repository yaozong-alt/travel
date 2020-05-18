<template>
    <div>
        <div class="banner" @click="showGallary">
        <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <p class="banner-title">
                    {{this.sightName}}
                </p>
                <p class="banner-num">
                    <span class="iconfont">&#xe600;</span>
                   {{this.gallaryImgs.length}}
                </p>
            </div>
        </div>
        <FadeAnimation>
            <Gallary 
            :imgs=" gallaryImgs" 
            v-show="show"
            @close="haddleGallaryClick"
            />
        </FadeAnimation>
    </div>
</template>

<script>
import FadeAnimation from '@/common/fade/FadeAnimation'
import Gallary from '@/common/gallary/Gallary'
    export default {
        name:"Banner",
        props : {
            sightName : String,
            bannerImg : String,
            gallaryImgs : Array,
        },
        data () {
            return {
               show:false,                
            }
        },
        components:{
            Gallary,
            FadeAnimation,
        },
        methods:{
            showGallary () {
                this.show = true
            },
            haddleGallaryClick () {
                this. show =false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            position absolute
            display flex
            left 0
            right 0
            bottom 0
            line-height .6rem
            background-image: linear-gradient(to right, rgba(2,0,0,0), rgba(2,0,0,.7));
            color #ffffff
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-num
                padding 0 .4rem
                margin-top .1rem
                margin-right .2rem
                height .4rem
                line-height .4rem
                border-radius .2rem
                font-size .24rem
                background rgba(0,0,0,.6)
                .iconfont
                    font-size .24rem

</style>