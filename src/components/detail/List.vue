<template>
    <div>
        <div v-for="item in list" :key="item.title" class="item">
            {{item.title}}
            
            <div v-if="item.children" >
                <DetailList :list="item.children"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"DetailList",
        props : {
            list : Array,
        }

    }
</script>

<style lang="stylus" scoped>
    .item
        padding .2rem
        margin .1rem
        border-bottom .05rem solid red

</style>