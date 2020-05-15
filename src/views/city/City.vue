<template>
    <div>
        <CityHeader/>
        <CitySearch/>
        <CityList :cities="cities" :hot="hotCities" :letter="letter"/>
        <CityAlphabet :cities="cities" @change="haddleLetterChange"/>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from '@/views/city/components/CityHeader'
    import CitySearch from '@/views/city/components/CitySearch'
    import CityList from '@/views/city/components/CityList'
    import CityAlphabet from '@/views/city/components/CityAlphabet'
    export default {
        name:"City",
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data () {
            return {
                cities: {},
                hotCities: [],
                letter: "",
            }
        },
        methods: {
            getCityInfo () {
                axios.get('/api/city.json')
                .then(
                    this.getCityInfoSucc
                )
            },
            getCityInfoSucc (res) {
                const data = res.data.data;
                // console.log(data);
                if(res.data.ret && data){
                    this.cities = data.cities;
                    this.hotCities = data.hotCities;
                }
            },
            haddleLetterChange (letter) {
               this.letter = letter;
               console.log('City中的letter:',letter);
            }
        },
        mounted () {
            this.getCityInfo();
            // console.log("this",this);
        }
    }
</script>

<style lang="stylus" scoped>

</style>