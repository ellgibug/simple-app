<template>


    <div :class="['page', className]">
<!--        <h1 class="page__title">{{ title }}</h1>-->
        <div class="page__breadcrumbs">
            <slot name="breadcrumbs"/>
        </div>
        <div class="page__body">
            <slot/>
        </div>
    </div>


</template>

<script>
    export default {
        props: [
            'className',
            'title',
        ]
    }
</script>

<style lang="scss" scoped>
    .page{
        width: 100%;
        &__title{
            /*margin-bottom: 40px;*/
            /*font-size: 20px;*/

        }

        &__breadcrumbs{
            margin-bottom: 20px;
        }

        &__body{

        }
    }

</style>
