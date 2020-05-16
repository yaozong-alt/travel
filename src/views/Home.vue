<template>
    <div>
        <HomeHeader/>
        <HomeSwiper :list="swiperList"/>
        <HomeIcons  :list="iconList"/>
        <HomeRecommend :list="recommendList"/>
        <HomeWeekend :list="weekendList"/>
    </div>
</template>
<script>
    import axios from 'axios'
    import HomeHeader from '@/components/home/HomeHeader';
    import HomeRecommend from '@/components/home/HomeRecommend';
    import HomeSwiper from '@/components/home/HomeSwiper';
    import HomeWeekend from '@/components/home/HomeWeekend'
    import  HomeIcons from '@/components/home/Icons'
    
    export default {
        name:"Home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data () {
            return {
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: []
            }
        },
        methods:{
            getHomeInfo () {
                axios.get('/api/index.json')
                .then(
                    this.getHomeInfoSucc
                )
            },
            getHomeInfoSucc (res) {
                    console.log(res.data)
                    const data = res.data.data;
                    if(res.data.ret && data) {
                        this.swiperList = data.swiperList;
                        this.iconList = data.iconList;
                        this.recommendList = data.recommendList;
                        this.weekendList = data.weekendList;
                    }   
            }
        },
        mounted () {
            this.getHomeInfo();
        }
    }
</script>

<style lang="stylus" scoped>

</style>