<template>
    <div class="header">
        <router-link to="/">
            <span class="iconfont">&#xe610;</span>
        </router-link>
           城市选择
    </div>
</template>

<script>
    export default {
        name:"CityHeader",
    }
</script>

<style lang="stylus" scoped>
.header
    position relative
    overflow hidden
    height $HeaderHeight
    line-height $HeaderHeight
    text-align center
    color #fff
    font-size .32rem
    background $bgColor
    .iconfont
        position absolute
        font-size .32rem
        left .2rem
        color #fff
        text-align center
</style>