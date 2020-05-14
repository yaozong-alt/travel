<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
    export default {
        name:"CitySearch",
    }
</script>

<style lang="stylus" scoped>
.search
    height .72rem
    background $bgColor
    padding 0 .1rem
    .search-input
        box-sizing border-box
        width 100%
        margin-top .1rem
        padding 0 .02rem
        height .52rem
        line-height .52rem
        text-align center 
        color  #666
        border-radius .06rem

</style>