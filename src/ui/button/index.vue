<template>
    <button :class="['hButton', buttonThemeClass]" @click="handleClick">
        <template v-if="iconLeft">
            <unicon :name="iconLeft"
                    style="display: flex; margin-right: 10px"
                    fill="#fff"
                    height="22"
                    width="22"
            />
        </template>
        <slot/>
        <template v-if="iconRight">
            <unicon :name="iconRight"
                    style="display: flex; margin-left: 10px"
                    :fill="iconFillColor"
                    height="22"
                    width="22"
            />
        </template>
    </button>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>