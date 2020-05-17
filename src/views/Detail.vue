<template>
    <div>
        <Banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"/>
        <DetailHeader/>
        <DetailList :list="list"/>
        <div class="content"></div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Banner from '@/components/detail/Banner'
    import DetailHeader from '@/components/detail/Header'
    import DetailList from '@/components/detail/List'
    export default {
        name:"Detail",
        components:{
            Banner,
            DetailHeader,
            DetailList
        },
       data () {
           return {
               sightName : "",
               bannerImg : "",
               gallaryImgs :[],
               list : [],
           }
       } ,
       methods : {
           getDetailInfo () {
               axios.get ('/api/detail.json',{
                  params : {
                      id : this.$route.params.id,
                  }
               })
               .then (
                   this.getDetailInfoSucc
               )
           },
           getDetailInfoSucc (res) {
               res = res.data;
               if (res.ret && res.data) {
                   const data =res.data;
                   this.sightName = data.sightName;
                   this.bannerImg = data.bannerImg;
                   this.gallaryImgs = data.gallaryImgs;
                   this.list = data.categoryList;
               }
           }
       },
       mounted () {
          this.getDetailInfo ();
       }
    }
</script>

<style lang="stylus" scoped>
.content
    height 50rem


</style>