<template>
    <div>
        <router-link 
        tap="div"
        to="/"
        class="header-abs"
        v-show="showAbs"
        >
             <span class="iconfont">&#xe610;</span>
        </router-link>
        <div class="fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <span class="iconfont">&#xe610;</span>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
    export default {
        name:"DetailHeader",
        data(){
            return {
                showAbs : true,
                opacityStyle:{
                   opacity : 0,
               } 
            }
        },
        methods : {
            handleScroll () {
                const top = document.documentElement.scrollTop;
                if (top > 80) {
                    let opacity = top/500
                   opacity = opacity > 1 ? 1:opacity
                    this.opacityStyle = {opacity}
                    this.showAbs = false
                }else{
                    this.showAbs = true
                }
                console.log(document.documentElement.scrollTop)
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        unmouted () {
            window.removeEventListener('scroll', this.handleScroll)
        }
        // activated () {
        //     window.addEventListener('scroll', this.handleScroll)
        // },
        // deactivated () {
        //     window.removeEventListener('scroll', this.handleScroll)
        // }
        
    }
</script>

<style lang="stylus" scoped>
    .header-abs 
        position absolute
        top .2rem
        left .2rem
        width .8rem
        height .8rem
        line-height .8rem
        text-align center
        border-radius .4rem
        background rgba(0,0,0,.8)
        .iconfont
            color #ffffff
            font-size .4rem
   .fixed
    z-index 2
    position fixed 
    top 0
    left 0
    right 0
    height .7rem
    line-height $HeaderHeight
    text-align center
    color #fff
    font-size .32rem
    background $bgColor
    .iconfont
        color #ffffff
        font-size .4rem
   
            
           


</style>