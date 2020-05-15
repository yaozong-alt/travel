<template>
    <ul class="list">
        <li class="item" 
        v-for="item in letters" 
        :key="item"
        :ref="item"
        @click="haddleLetterClick"
        @touchstart.prevent="haddleTouchStart"
        @touchmove="haddleTouchMove"
        @touchend="haddleTouchEnd"
        >
            {{item}}
        </li>
        
    </ul>
</template>

<script>
    export default {
        name:"CityAlphabet",
         props:{
            cities : Object
        },
        data(){
            return {
                touchStatus : false,
                startY:0,
                timer:null,
            }
        },
        updated () {
             //获得A字母到顶部之间的距离;startY;
            this.startY = this.$refs['A'][0].offsetTop;
        }, 
        computed:{
            letters () {
                let letters = [];
                for (const key in this.cities) {
                   letters.push(key)
                }
                return letters;
            }
        },
        methods:{
            haddleLetterClick (e) {
                this.$emit('change',e.target.innerText)
            },
            haddleTouchStart () {
                this.touchStatus = true;
            },
            haddleTouchMove (e) {
                if(this.touchStatus){
                    //console.log("this.timer:",this.timer)
                    if(this.timer){
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(() => {
                        //  const startY = this.$refs['A'][0].offsetTop;
                        //获得当前滚轮到顶部之间的距离
                        //第零项表示的是手指的一些信息;
                        const touchY = e.touches[0].clientY-79;
                        //获得每个字母对应的位置;
                        const index = Math.floor((touchY - this.startY)/20);
                        // console.log("A距离顶部的高度:",startY);
                        // console.log("touchY:",touchY);
                        //console.log("每个字母的位置",index);
                        if(index >= 0 && index < this.letters.length){
                            this.$emit('change',this.letters[index])
                        }
                        },16)
                    }
                    
            },
            haddleTouchEnd () {
                this.touchStatus = false;
            }
        },
        mounted () {
            console.log("this",this.$root)
        }

    }
</script>

<style lang="stylus" scoped>
.list
    position absolute
    display flex
    flex-direction column
    justify-content center
    top 1.58rem
    right 0
    bottom 0
    width .4rem 
    .item
        line-height .4rem
        text-align center
        color $bgColor 
</style>