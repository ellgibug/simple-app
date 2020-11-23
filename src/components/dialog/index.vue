<template>
    <div class="dialog-wrapper" v-if="isOpen">
        <div class="dialog" ref="dialog">
            <div class="dialog__title">
                {{title}}
            </div>
            <div class="dialog__body">

                <slot></slot>


            </div>
            <div class="dialog__footer">
                <button class="p-button" @click="actionClick">{{button}}</button>
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>