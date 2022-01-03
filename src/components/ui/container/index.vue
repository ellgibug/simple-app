<template>

<div class="c-wrapper">
    <div :class="['container', className]">
        <slot/>
    </div>
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

    .c-wrapper{
        margin: 0 auto;
        max-width: 1188px;
        width: 100%;
       // overflow: hidden;
    }
    .container{
       // margin: 0 -10px;


        /*padding: 0 24px;*/

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

        &.justify-end{
            justify-content: flex-end;
        }
    }




</style>
