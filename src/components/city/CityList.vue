<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area ">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                    class="button-wrapper" 
                    v-for="item in hot" 
                    :key="item.id"
                    @click="haddleChangeCity(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" 
            v-for="(item,key) in cities" 
            :key='key'
            :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <ul class="item-list">
                    <li 
                    class="item border-bottom" 
                    v-for="innerItem in item" 
                    :key="innerItem.id"
                    @click="haddleChangeCity(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from '@better-scroll/core'
    import {mapState,mapActions} from 'vuex'
    export default {
        name:"CityList",
        props:{
            hot : Array,
            cities : Object,
            letter : String
        },
        computed: {
            ...mapState(['city'])
        },
        methods: {
            haddleChangeCity (city) {
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapActions(['changeCity'])
        },
        watch :{
            letter () {
                if(this.letter){
                    const element = this.$refs[this.letter][0];
                    this.scroll.scrollToElement(element);
                }
                //console.log("CityList中的watch监控letter的变化:",this.letter);
            }
        },
        mounted () {
            setTimeout(() => {
                this.scroll = new BScroll(this.$refs.wrapper,{click:true})
                },600)
            //使用setTimeout函数初始化,解决初始化不能滚动的bug;
        }
    }
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before 
            border-color #cccccc
        &:after 
            border-color #cccccc
    .border-bottom
        &:before 
            border-color #cccccc
.list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
        line-height .54rem
        background #eeeeee
        padding-left .2rem
        color #666666
        font-size .26rem
    .button-list
        overflow hidden
        padding .1rem .6rem .1rem .1rem
        .button-wrapper
            float left
            width 33.33%
            .button
                margin .1rem 
                padding .1rem 0
                text-align center
                border .02rem solid #cccccc
                border-radius .06rem
    .item-list
        .item
            line-height .76rem
            color #666666
            padding-left .2rem
</style>