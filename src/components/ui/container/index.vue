<template>


    <div :class="['container', className]">
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
    .container{
        margin: 0 auto;
        /*padding: 0 24px;*/
        max-width: 1188px;
        /*border: 2px solid red;*/
        display: flex;


        &.align-center{
            align-items: center;
            align-self: stretch;
        }

        &.align-start{
            align-items: start;
        }

        &.justify-center{
            justify-content: center;
        }

        &.justify-space-between{
            justify-content: space-between;
        }
    }




</style>
