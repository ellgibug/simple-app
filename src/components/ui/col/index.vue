<template>


    <div :class="['col', className]">
        <slot/>
    </div>


</template>

<script>
    export default {
        props: [
            'className'
        ]
    }
</script>

<style lang="scss" scoped>
    .col{
        height: 100%;
        /*border: 2px solid red;*/
    }
</style>
