<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe610;</span>
        </div>
        <div class="header-input">
             <span class="iconfont">&#xe62d;</span>
            输入景点/游玩主题/城市
        </div>
        <div class="header-right">
          {{this.city}}
            <span class="iconfont">&#xe62a;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"HomeHeader",
        props:{
            city : String
        }
    }
</script>

<style lang="stylus" scoped>
    //1 rem = 50px;
    //43 px = .86px;
    $bgColor = #00b4d4
    .header
        display flex
        line-height .86rem
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
            width 1.26rem
            float right
            text-align center 
            .iconfont
                font-size .25rem
</style>