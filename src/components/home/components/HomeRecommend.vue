<template>
  <div>
    <div class="title"><h3>热销推荐</h3></div>
      <ul>
        <li class="item" v-for="item in recommendList" :key="item.id">
            <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" alt=""> 
            </div>
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="title-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
        </li>
      </ul>
      <div class="load-more">查看所有产品</div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data(){
    return {
      recommendList: [
        {
          id:1001,imgUrl:"//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg",title:"故宫",desc:"世界五大宫之首"
        },
         {
          id:1002,imgUrl:"//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg",title:"故宫",desc:"世界五大宫之首"
        },
         {
          id:1003,imgUrl:"//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg",title:"故宫",desc:"世界五大宫之首"
        },
         {
          id:1004,imgUrl:"//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg",title:"故宫",desc:"世界五大宫之首"
        },
         {
          id:1005,imgUrl:"//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg",title:"故宫",desc:"世界五大宫之首"
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
  .load-more
      background #ffffff
      height .9rem
      line-height .9rem
      color #00d0d4
      text-align center
  .item
      overflow hidden
      display flex
      height 1.8rem
      border-bottom  .02rem solid #cccccc
    .item-img
      height 1.6rem
      width 1.6rem
      padding .1rem
      border-radius .2rem
    .item-info
      flex 1
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
      .title-desc
        line-height .44rem
        color #666
      .item-button
        background #ff9300
        line-height .44rem
        padding .1rem
        margin-top .05rem
        color #ffffff
        border-radius .06rem
</style>
