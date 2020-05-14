<template>
    <div>
        <HomeHeader/>
        <HomeSwiper/>
        <HomeIcons/>
    </div>
</template>

<script>
    import HomeHeader from '@/components/home/components/HomeHeader'
    import HomeSwiper from '@/components/home/components/HomeSwiper'
    import HomeIcons from './components/Icons'
    export default {
        name:"Home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons
        }
    }
</script>

<style lang="stylus" scoped>

</style>