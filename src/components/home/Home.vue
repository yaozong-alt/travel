<template>
    <div>
        <HomeHeader :city="city"/>
        <HomeSwiper :list="swiperList"/>
        <HomeIcons  :list="iconList"/>
        <HomeRecommend :list="recommendList"/>
        <HomeWeekend :list="weekendList"/>
    </div>
</template>
<script>
    import HomeHeader from '@/components/home/components/HomeHeader'
    import HomeSwiper from '@/components/home/components/HomeSwiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from '@/components/home/components/HomeRecommend'
    import HomeWeekend from './components/HomeWeekend'
    import axios from 'axios'
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
                city:"",
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
                        this.city = data.city;
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