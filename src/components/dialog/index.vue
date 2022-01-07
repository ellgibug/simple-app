<template>
    <div class="dialog-wrapper" v-if="isOpen">
        <div :class="['dialog', isOpen && 'dialog_opened']" ref="dialog">

            <div class="dialog__close">
                <button class="transparent-button" @click="isOpen = false">
                    <unicon name="times"
                            fill="#7042ee"
                            style="display: flex"
                            height="24"/>
                </button>
            </div>

            <div class="dialog__title">
                {{title}}
            </div>
            <div class="dialog__body">
                <slot></slot>
            </div>
            <div class="dialog__footer">
                <HButton @handleClick="actionClick">
                    {{ button }}
                </HButton>
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>