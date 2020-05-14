<template>
    <div class="warp">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">         
                    </div>
                    <p class="icon-desc">{{item.iconDesc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:"HomeIcons",
        data(){
            return {
                iconList: [
                    {id:1001,imgUrl:"//s.qunarzz.com/homenode/images/touchheader/hotel.png",iconDesc:"酒店"},
                    {id:1002,imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",iconDesc:"机票"},
                    {id:1003,imgUrl:"//s.qunarzz.com/homenode/images/touchheader/train.png",iconDesc:"火车票"},
                    {id:1004,imgUrl:"//s.qunarzz.com/homenode/images/touchheader/package.png",iconDesc:"度假"},
                    {id:1005,imgUrl:"//s.qunarzz.com/homenode/images/touchheader/piao.png",iconDesc:"景点门票"},
                    {id:1006,imgUrl:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",iconDesc:"海外酒店"},
                    {id:1007,imgUrl:"https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",iconDesc:"汽车票船票"},
                    {id:1008,imgUrl:"https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png",iconDesc:"攻略"},                  
                    {id:1009,imgUrl:"//s.qunarzz.com/homenode/images/touchheader/piao.png",iconDesc:"景点门票"}
                ],
            swiperOptions:{
                 loop:true,
            }
            }
        },
        computed:{
            pages () {
                const pages = []//它长的样子:pages :[[#0,#1,#2,...,#7],[#8,#9,...#15]]
                //遍历iconList  目的是为了获取每个item 应该存在哪一页;
                this.iconList.map((item,index) => {
                    //每个item应该在哪一页呢?
                    const page = Math.floor(index / 8)
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
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