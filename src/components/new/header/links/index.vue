<template>
    <div :class="['link', className ? className : '']">
        <unicon
                v-if="iconName"
                :name="iconName"
                fill="#000"
                :height="large ? 22 : 16" :width="large ? 22 : 16"
                style="display: flex; margin-right: 5px"
        />
        <template v-if="linkText">
            {{ linkText }}
        </template>
    </div>
</template>

<style lang="scss" scoped>
    .link{
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background: #eee;
        }

        @media screen and (max-width: 700px){
            &:hover{
                background: transparent;
            }
        }
    }

</style>

<script>
    export default {
        name: "header_link",

        props: [
            'className',
            'iconName',
            'linkText',
            'large'
        ]
    }
</script>