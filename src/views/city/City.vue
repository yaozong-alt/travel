<template>
    <div>
        <CityHeader/>
        <CitySearch/>
    </div>
</template>

<script>
    import CityHeader from '@/views/city/components/CityHeader'
    import CitySearch from '@/views/city/components/CitySearch'
    export default {
        name:"City",
        components:{
            CityHeader,
            CitySearch
        }
    }
</script>

<style lang="stylus" scoped>

</style>