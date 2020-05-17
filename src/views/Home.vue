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
    import {mapState} from 'vuex'
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
                lastestCity :"",
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: []
            }
        },
        computed:{
            ...mapState(['city'])
        },
        methods:{
            getHomeInfo () {
                axios.get('/api/index.json?city=' + this.city)
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
            this.lastestCity = this.city;//预先存上一次的城市
            this.getHomeInfo();
        },
        activated () {
            if ( this.lastestCity !== this.city){
                this.lastestCity = this.city
                this.getHomeInfo();
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>