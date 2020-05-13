<template>
    <div>
        <HomeHeader/>
        <HomeSwiper/>
    </div>
</template>

<script>
    import HomeHeader from '@/components/home/components/HomeHeader'
    import HomeSwiper from '@/components/home/components/HomeSwiper'
    export default {
        name:"Home",
        components:{
            HomeHeader,
            HomeSwiper,
        }
    }
</script>

<style lang="stylus" scoped>

</style>