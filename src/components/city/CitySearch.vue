<template>
    <div>
        <div class="search">
            <input 
            type="text" 
            class="search-input" 
            placeholder="输入城市名或拼音"
            v-model="keyword"
            >
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" 
                v-for="(item,index) in list" 
                :key="index"
                @click=" haddleChangeCity (item)"
                >
                    {{item}}
                </li>
                <li  class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配项
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import BScroll from "better-scroll"
    export default {
        name:"CitySearch",
        props: {
            cities : Object,
        },
        data () {
            return {
                keyword : "", //进行双向的绑定
                list : [],//用来存放搜索到的内容
                timer : null
            }
        },
        methods: {
            haddleChangeCity (city) {
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapActions(['changeCity'])
        },
        computed:{
            hasNoData () {
                return !this.list.length
            }
        },
        watch : {
            keyword () {
                if (this.timer) {
                    clearTimeout (this.timer)
                }
                if (!this.keyword){
                    this.list = []
                    return
                }
                this.timer = setTimeout (() => {
                    const results = [];
                    //遍历cities中的内容
                    for (const key in this.cities) {
                       //for .. in 遍历的是对象的key值:A,B,C,D....
                                //A : [{},{},{}]
                        //也就是遍历的是A,B,C,D..的这些数组中的元素
                        this.cities[key].map(value => {
                            if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                                results.push(value.name)
                            }
                        })
                    }
                    this.list = results
                },100)
            }
        },
        mounted () {
            setTimeout(() => {
                this.scroll = new BScroll(this.$refs.search,{click:true})
                },800)
            //使用setTimeout函数初始化,解决初始化不能滚动的bug;
        }
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
.search-content
    position absolute
    z-index 1
    overflow hidden
    top 1.58rem
    left  0
    bottom 0
    right 0
    background #eeeeee
    .search-item
        line-height .54rem
        padding .2rem
        color #666
        background #ffffff



</style>