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
        display: flex;
        /*margin: 0 10px ;*/


        &.flex-grow-1{
            flex: 1 0 100%;
        }

        &.flex-grow-05{
            flex: 0 1 50%;
        }

        &.flex-grow-04{
            flex: 0 1 40%;
        }

        &.flex-grow-06{
            flex: 0 1 60%;
        }

        &.flex-grow-07{
            flex: 0 1 70%;
        }

        &.flex-grow-03{
            flex: 0 1 30%;
        }

        &.column{
            flex-direction: column;
        }

        &.justify-end{
            justify-content: flex-end;
        }
    }

</style>
