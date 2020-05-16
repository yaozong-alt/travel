<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe610;</span>
        </div>
        <div class="header-input">
             <span class="iconfont">&#xe62d;</span>
            输入景点/游玩主题/城市
        </div>
        <router-link to="/city">
            <div class="header-right">
            {{this.city}}
                <span class="iconfont">&#xe62a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:"HomeHeader",
        computed: {
            ...mapState(['city'])
        }
    }
</script>

<style lang="stylus" scoped>
    .header
        display flex
        line-height $HeaderHeight
        background $bgColor
        color:#fff
        .header-left
            width .64rem
            float left
            .iconfont
                display block
                text-align center
        .header-input
            flex 1
            margin-top .12rem
            margin-left .2rem
            padding-left .1rem
            height .64rem
            line-height  .64rem
            background #ffffff
            color #cccccc
            border-radius .1rem
        .header-right
            min-width 1.06rem
            padding 0 .1rem
            float right
            color #ffffff
            text-align center 
            .iconfont
                font-size .25rem
</style>