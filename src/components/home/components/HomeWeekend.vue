<template>
  <div>
    <div class="title"><h3>周末去哪儿</h3></div>
      <ul>
        <li class="item" v-for="item in recommendList" :key="item.id">
            <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" alt=""> 
            </div>
            <div class="item-info">
              <p class="item-title">
                  {{item.title}}
             </p>
              <p class="title-desc">{{item.desc}}</p>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data(){
    return {
      recommendList: [
        {
          id:1001,imgUrl:"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",title:"八达岭长城",desc:"不到长城非好汉"
        },
         {
          id:1002,imgUrl:"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",title:"八达岭长城",desc:"不到长城非好汉"
        },
         {
          id:1003,imgUrl:"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",title:"八达岭长城",desc:"不到长城非好汉"
        },
         {
          id:1004,imgUrl:"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",title:"八达岭长城",desc:"不到长城非好汉"
        },
         {
          id:1005,imgUrl:"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",title:"八达岭长城",desc:"不到长城非好汉"
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
    background #eeeeee
    line-height .8rem
    text-indent .2rem
.item-img-wrapper
    background red
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
.item-info
      padding .1rem
    .item-title
        line-height .54rem
        font-size .32rem
    title-desc
        line-height .44rem
        color #666
     
</style>
