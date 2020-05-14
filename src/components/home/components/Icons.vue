<template>
    <div class="warp">
        <swiper :options="swiperOptions" v-if="showIcon">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">         
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:"HomeIcons",
        props:{
            list: Array
        },
        data(){
            return {
                swiperOptions:{
                 loop:true,
            }
            }
        },
        computed:{
            pages () {
                const pages = []//它长的样子:pages :[[#0,#1,#2,...,#7],[#8,#9,...#15]]
                //遍历iconList  目的是为了获取每个item 应该存在哪一页;
                this. list.map((item,index) => {
                    //每个item应该在哪一页呢?
                    const page = Math.floor(index / 8)
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            },
            showIcon () {
                return this.list.length
            }
        }
    }
</script>

<style lang="stylus" scoped>
    $textColor =  #333
    ellipsis ()
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
    .warp >>> .swiper-container
        height 0
        padding-bottom 50%
    .icon 
        position relative
        overflow hidden
        float left 
        width 25%
        height  0
        padding-bottom 25%
        .icon-img
            position absolute
            top .2rem
            left .3rem
            right 0
            bottom .44rem
            box-sizing border-box
            padding .1rem
            .icon-img-content
                display block
                height 100%
                width auto
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            text-align center
            color  $textColor
            ellipsis ()
</style>