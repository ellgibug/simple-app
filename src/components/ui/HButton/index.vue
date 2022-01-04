<template>

    <Button class="helpy-button" @click="$emit('handleClick')">
        <slot/>
    </Button>

</template>

<script>
    export default {
        props: [
           "buttonText"
        ]
    }
</script>

<style lang="scss" scoped>

    .helpy-button {
        border: none;
        background: #7042ee;
        padding: 10px 5px;
        margin: 0;
        outline: none;
        transition: all ease-in-out 0.2s;
        display: flex;
        justify-content: center;
        border-radius: 2px;
        width: 100%;
        color: #f5f9fa;

        &:hover{
            transition: all ease-in-out 0.2s;
            box-shadow: 0 0 0 0.2rem rgba(61, 109, 253, 0.15);


        }
        &:active{
            transition: all ease-in-out 0.2s;
            box-shadow: 0 0 0 0.2rem rgba(61, 109, 253, 0.25);

        }
    }
</style>
