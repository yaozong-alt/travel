<template>
  <div>
    <div class="title"><h3>周末去哪儿</h3></div>
      <ul>
        <li class="item" v-for="item in list" :key="item.id">
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
  props:{
    list : Array
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
    padding-bottom 37.09%
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
