<template>
    <div>
        <HomeHeader/>
        <HomeSwiper/>
        <HomeIcons/>
        <HomeRecommend/>
        <HomeWeekend/>
    </div>
</template>

<script>
    import HomeHeader from '@/components/home/components/HomeHeader'
    import HomeSwiper from '@/components/home/components/HomeSwiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from '@/components/home/components/HomeRecommend'
    import HomeWeekend from './components/HomeWeekend'
    export default {
        name:"Home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        }
    }
</script>

<style lang="stylus" scoped>

</style>